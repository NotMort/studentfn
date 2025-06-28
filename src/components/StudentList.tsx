import React from "react";
import { Student } from "../types/Student.ts";

interface Props {
  students: Student[];
}


export default function StudentList({ students }: Props) {
  return (
    <ul>
      {students.map((s) => (
        <li key={s.id}>
          {s.id} - {s.name} ({s.adders})
        </li>
      ))}
    </ul>
  );
}
