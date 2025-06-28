import { Student } from "../types/Student.ts";

const BASE_URL = "http://localhost:8081/student";

export const getAllStudents = async (): Promise<Student[]> => {
  const res = await fetch(`${BASE_URL}/all`);
  return await res.json();
};

export const addStudent = async (student: Student): Promise<void> => {
  await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};
