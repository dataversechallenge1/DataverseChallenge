//number of authenticated users
const teacherIds = [
  process.env.NEXT_PUBLIC_TEACHER_ID1,
  process.env.NEXT_PUBLIC_TEACHER_ID2,
  process.env.NEXT_PUBLIC_TEACHER_ID3,
  process.env.NEXT_PUBLIC_TEACHER_ID4,
  process.env.NEXT_PUBLIC_TEACHER_ID5,
  process.env.NEXT_PUBLIC_TEACHER_ID6,
  process.env.NEXT_PUBLIC_TEACHER_ID7,
  process.env.NEXT_PUBLIC_TEACHER_ID8,
  process.env.NEXT_PUBLIC_TEACHER_ID9,
  process.env.NEXT_PUBLIC_TEACHER_ID10,
  process.env.NEXT_PUBLIC_TEACHER_ID11,
  process.env.NEXT_PUBLIC_TEACHER_ID12,
  process.env.NEXT_PUBLIC_TEACHER_ID13,
  process.env.NEXT_PUBLIC_TEACHER_ID14,
  process.env.NEXT_PUBLIC_TEACHER_ID15,
  process.env.NEXT_PUBLIC_TEACHER_ID16,
  process.env.NEXT_PUBLIC_TEACHER_ID17,
  process.env.NEXT_PUBLIC_TEACHER_ID18,
  process.env.NEXT_PUBLIC_TEACHER_ID19,
  process.env.NEXT_PUBLIC_TEACHER_ID20,
  process.env.NEXT_PUBLIC_TEACHER_ID21,
  process.env.NEXT_PUBLIC_TEACHER_ID22,
  process.env.NEXT_PUBLIC_TEACHER_ID23,
  process.env.NEXT_PUBLIC_TEACHER_ID24,
  process.env.NEXT_PUBLIC_TEACHER_ID25,
  process.env.NEXT_PUBLIC_TEACHER_ID26,
  process.env.NEXT_PUBLIC_TEACHER_ID27,
  process.env.NEXT_PUBLIC_TEACHER_ID28,
  process.env.NEXT_PUBLIC_TEACHER_ID29,
  process.env.NEXT_PUBLIC_TEACHER_ID30,
]


// Modified isTeacher function to check if userId is in the array
export const isTeacher = (userId?: string | null) => {
  return userId ? teacherIds.includes(userId) : false;
};
