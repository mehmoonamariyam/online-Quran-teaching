import { useState } from "react";
import StatsCards from "./StatsCards";
import StudentsTable from "./StudentsTable";
import DashboardSidebar from "./sidebar";
import TutorsManager from "./tutorsmanage";
import CoursesManager from "./CoursesManager";



const AdminDashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ayesha Khan", email: "ayesha@email.com", course: "Tajweed", status: "Pending" },
    { id: 2, name: "Ali Ahmed", email: "ali@email.com", course: "Hifz", status: "Pending" },
  ]);

  const approveStudent = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "Enrolled" } : s
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (

    <div className="flex">
      <DashboardSidebar/>
    <div className="ml-64 w-full p-6">

      {/* Stats Section */}
      <StatsCards
        stats={{
          students: students.length,
          tutors: 10,
          courses: 8,
          requests: students.filter((s) => s.status === "Pending").length,
          messages: 5,
        }}
      />

      {/* Students Table */}
      <StudentsTable
        students={students}
        onApprove={approveStudent}
        onDelete={deleteStudent}
      />
      <TutorsManager/>
      <CoursesManager/>
    </div>
    </div>
  );
};



export default AdminDashboard;
