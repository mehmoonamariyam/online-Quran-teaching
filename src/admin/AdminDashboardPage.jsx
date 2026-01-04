import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCourse, deleteCourse, fetchCourses, updateCourse } from "../store/slice/courseSlice";
import { addTutor, deleteTutor, getTutors, updateTutor } from "../store/slice/TutorSlice";

const AdminDashboardPage = () => {
  const dispatch = useDispatch();

  // ===== Courses state =====
  const { courses, loading: coursesLoading } = useSelector((state) => state.courses);
  const [courseForm, setCourseForm] = useState({ title: "", description: "" });
  const [editCourseId, setEditCourseId] = useState(null);

  // ===== Tutors state =====
  const { tutors, loading: tutorsLoading } = useSelector((state) => state.tutors);
  const [tutorForm, setTutorForm] = useState({ name: "", email: "" });
  const [editTutorId, setEditTutorId] = useState(null);

  // ===== Load data on mount =====
  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(getTutors());
  }, [dispatch]);

  // ===== Handlers =====
  const handleCourseSubmit = (e) => {
    e.preventDefault();
    if (editCourseId) {
      dispatch(updateCourse({ id: editCourseId, updatedData: courseForm }));
      setEditCourseId(null);
    } else {
      dispatch(addCourse(courseForm));
    }
    setCourseForm({ title: "", description: "" });
  };

  const handleTutorSubmit = (e) => {
    e.preventDefault();
    if (editTutorId) {
      dispatch(updateTutor({ id: editTutorId, data: tutorForm }));
      setEditTutorId(null);
    } else {
      dispatch(addTutor(tutorForm));
    }
    setTutorForm({ name: "", email: "" });
  };

  const handleCourseEdit = (course) => {
    setCourseForm({ title: course.title, description: course.description });
    setEditCourseId(course._id);
  };

  const handleTutorEdit = (tutor) => {
    setTutorForm({ name: tutor.name, email: tutor.email });
    setEditTutorId(tutor.id);
  };

  const handleCourseDelete = (id) => {
    if (window.confirm("Are you sure to delete this course?")) {
      dispatch(deleteCourse(id));
    }
  };

  const handleTutorDelete = (id) => {
    if (window.confirm("Are you sure to delete this tutor?")) {
      dispatch(deleteTutor(id));
    }
  };

  return (
    <div className="p-6 space-y-12">

      {/* ===== Courses Section ===== */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Courses</h2>

        {/* Course Form */}
        <form onSubmit={handleCourseSubmit} className="mb-6 flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Course Title"
            value={courseForm.title}
            onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
            required
            className="border p-2 rounded flex-1 min-w-[200px]"
          />
          <input
            type="text"
            placeholder="Course Description"
            value={courseForm.description}
            onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
            required
            className="border p-2 rounded flex-1 min-w-[200px]"
          />
          <button
            type="submit"
            className="bg-pink-900 text-white px-4 py-2 rounded"
          >
            {editCourseId ? "Update" : "Add"}
          </button>
        </form>

        {/* Courses Table */}
        {coursesLoading ? (
          <p>Loading courses...</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td className="p-2 border">{course.title}</td>
                  <td className="p-2 border">{course.description}</td>
                  <td className="p-2 border flex gap-2">
                    <button
                      onClick={() => handleCourseEdit(course)}
                      className="bg-yellow-500 px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleCourseDelete(course._id)}
                      className="bg-red-500 px-2 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* ===== Tutors Section ===== */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Teachers / Tutors</h2>

        {/* Tutor Form */}
        <form onSubmit={handleTutorSubmit} className="mb-6 flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Tutor Name"
            value={tutorForm.name}
            onChange={(e) => setTutorForm({ ...tutorForm, name: e.target.value })}
            required
            className="border p-2 rounded flex-1 min-w-[200px]"
          />
          <input
            type="email"
            placeholder="Tutor Email"
            value={tutorForm.email}
            onChange={(e) => setTutorForm({ ...tutorForm, email: e.target.value })}
            required
            className="border p-2 rounded flex-1 min-w-[200px]"
          />
          <button
            type="submit"
            className="bg-pink-900 text-white px-4 py-2 rounded"
          >
            {editTutorId ? "Update" : "Add"}
          </button>
        </form>

        {/* Tutors Table */}
        {tutorsLoading ? (
          <p>Loading tutors...</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tutors.map((tutor) => (
                <tr key={tutor.id}>
                  <td className="p-2 border">{tutor.name}</td>
                  <td className="p-2 border">{tutor.email}</td>
                  <td className="p-2 border flex gap-2">
                    <button
                      onClick={() => handleTutorEdit(tutor)}
                      className="bg-yellow-500 px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleTutorDelete(tutor.id)}
                      className="bg-red-500 px-2 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

    </div>
  );
};

export default AdminDashboardPage;
