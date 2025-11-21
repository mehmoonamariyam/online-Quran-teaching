import { useState, useEffect } from "react";

const CoursesManager = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: "", duration: "" });

  const API_URL = "http://localhost:8080/courses";

  // ============================
  //  FETCH ALL COURSES (GET)
  // ============================
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  // ============================
  //     ADD COURSE (POST)
  // ============================
  const addCourse = async (e) => {
    e.preventDefault();
    if (!form.title || !form.duration) return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const newCourse = await res.json();
      setCourses([...courses, newCourse]); // add returned course
      setForm({ title: "", duration: "" });
    } catch (err) {
      console.error(err);
    }
  };

  // ============================
  //     DELETE COURSE (DELETE)
  // ============================
  const deleteCourse = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setCourses(courses.filter((course) => course.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-8">
      <h2 className="text-2xl font-bold text-pink-900 mb-6">Manage Courses</h2>

      {/* ADD COURSE FORM */}
      <form className="grid md:grid-cols-3 gap-4 mb-6" onSubmit={addCourse}>
        <input
          type="text"
          placeholder="Course Title"
          className="border border-pink-300 rounded-lg p-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Duration (e.g. 3 Months)"
          className="border border-pink-300 rounded-lg p-2"
          value={form.duration}
          onChange={(e) =>
            setForm({ ...form, duration: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-pink-900 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
        >
          Add Course
        </button>
      </form>

      {/* COURSE LIST */}
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex justify-between items-center bg-pink-50 p-4 rounded-lg"
          >
            <div>
              <p className="font-semibold text-pink-900">{course.title}</p>
              <p className="text-sm text-gray-600">{course.duration}</p>
            </div>

            <button
              onClick={() => deleteCourse(course.id)}
              className="text-red-500 font-semibold hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesManager;
