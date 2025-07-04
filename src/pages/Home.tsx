import React, { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm.tsx";
import StudentList from "../components/StudentList.tsx";
import { getAllStudents } from "../api/studentApi.ts";
import { Student } from "../types/Student.ts";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);

  const refreshStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  useEffect(() => {
    refreshStudents();
  }, []);

return (
    <div className="container mt-4">
      <h1 className="mb-4">Student Management</h1>
      <StudentForm onStudentAdded={refreshStudents} />
      <h2>All Students</h2>
      <StudentList students={students} />
    </div>
  );
}
