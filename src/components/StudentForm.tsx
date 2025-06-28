import React, { useState } from "react";
import { Student } from "../types/Student.ts";
import { addStudent } from "../api/studentApi.ts";

interface Props {
  onStudentAdded: () => void;
}

export default function StudentForm({ onStudentAdded }: Props) {
  const [form, setForm] = useState<Student>({ id: 0, name: "", adders: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addStudent(form);
    setForm({ id: 0, name: "", adders: "" });
    onStudentAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="adders" value={form.adders} onChange={handleChange} placeholder="Adders" required />
      <button type="submit">Add Student</button>
    </form>
  );
}
