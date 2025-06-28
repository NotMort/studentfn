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
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input name="adders" className="form-control" value={form.adders} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Student</button>
    </form>
  );
}
