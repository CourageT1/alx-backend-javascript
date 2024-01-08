// 2-get_students_by_loc.js
export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((student) => student.location === city);
}
