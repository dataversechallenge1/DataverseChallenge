import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CheckCircle, Clock, CheckCheck, PieChart, BatteryMedium } from "lucide-react";
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";
import { InfoCard } from "./_components/info-card";


export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  

  const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex items-center p-4 bg-blue-200 rounded-md shadow-md">
          <div className="mr-4">
            <BatteryMedium className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">In Progress</p>
          <p className="text-gray-500">
          {coursesInProgress.length > 0
            ? `${coursesInProgress.length} ${coursesInProgress.length === 1 ? 'course' : 'courses'}`
            : 'No ongoing courses at the moment'}
        </p>

          </div>
        </div>
        <div className="flex items-center p-4 bg-green-500 rounded-md shadow-md">
          <div className="mr-4">
            <CheckCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Completed</p>
            <p className="text-white">
            {completedCourses.length > 0
        ? `${completedCourses.length} ${completedCourses.length === 1 ? 'course' : 'courses'}`
        : 'You are one step closer to completing your first course'}

            </p>
          </div>
        </div>
      </div>
      <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
