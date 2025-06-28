import React, { useState, useEffect } from "react";
import { Student } from "../types/Student.ts";

interface Props {
  students: Student[];
}

export default function StudentList({ students }: Props) {
  const [filter, setFilter] = useState("");
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);

  useEffect(() => {
    const lowerFilter = filter.toLowerCase();
    const filtered = students.filter(
      (s) =>
        s.name.toLowerCase().includes(lowerFilter) ||
        s.adders.toLowerCase().includes(lowerFilter) ||
        s.id.toString().includes(lowerFilter)
    );
    setFilteredStudents(filtered);
  }, [filter, students]);

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Filter by name, address, or ID"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.adders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
