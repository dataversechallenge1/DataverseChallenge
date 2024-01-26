import Mux from "@mux/mux-node";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!,
);

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          }
        }
      }
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Iterate over chapters and attempt to delete video, but don't halt on errors
    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        try {
          // Attempt to delete the video associated with the chapter
          await Video.Assets.del(chapter.muxData.assetId);
        } catch (videoDeletionError) {
          // Log the error, but continue with the deletion of the course
          console.error("[VIDEO_DELETION_ERROR]", videoDeletionError);
        }
      }
    }

    // Delete the course and its chapters from the database
    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId,
      },
    });

    // Return JSON response with the deleted course data
    return NextResponse.json(deletedCourse);
  } catch (error) {
    // Log any other errors during the process
    console.error("[COURSE_ID_DELETE]", error);
    // Return a generic internal error response
    return new NextResponse("Internal Error", { status: 500 });
  }
}
