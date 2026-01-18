import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  deleteCourse,
  fetchCourses,
  updateCourse,
} from "../store/slice/courseSlice";

const AdminCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);

  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    idealfor: "",
    duration: "",
    textOnImage: "",
    price: "",
    link: "",
    classesPerWeek: "",
    classduration: "",
    platform: "",
    language: "",
    assessment: "",
    image: null,
    pngImage: null,
  });

  const [editCourseId, setEditCourseId] = useState(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  // ===== HANDLE SUBMIT =====
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = { ...courseForm };

    if (editCourseId) {
      dispatch(updateCourse({ id: editCourseId, updatedData: dataToSend })).then(() => {
        setEditCourseId(null);
        setCourseForm({
          title: "",
          description: "",
          idealfor: "",
          duration: "",
          textOnImage: "",
          price: "",
          link: "",
          classesPerWeek: "",
          classduration: "",
          platform: "",
          language: "",
          assessment: "",
          image: null,
          pngImage: null,
        });
        dispatch(fetchCourses());
      });
    } else {
      dispatch(addCourse(dataToSend)).then(() => {
        setCourseForm({
          title: "",
          description: "",
          idealfor: "",
          duration: "",
          textOnImage: "",
          price: "",
          link: "",
          classesPerWeek: "",
          classduration: "",
          platform: "",
          language: "",
          assessment: "",
          image: null,
          pngImage: null,
        });
        dispatch(fetchCourses());
      });
    }
  };

  // ===== HANDLE EDIT =====
  const handleEdit = (course) => {
    setEditCourseId(course._id);
    setCourseForm({
      title: course.title || "",
      description: course.description || "",
      idealfor: course.idealfor || "",
      duration: course.duration || "",
      textOnImage: course.textOnImage || "",
      price: course.price || "",
      link: course.link || "",
      classesPerWeek: course.classesPerWeek || "",
      classduration: course.classduration || "",
      platform: course.platform || "",
      language: course.language || "",
      assessment: course.assessment || "",
      image: null,    // keep old images if no new upload
      pngImage: null,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* FORM */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editCourseId ? "Edit Course" : "Add Course"}
        </h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
          <input
            placeholder="Title"
            value={courseForm.title}
            onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
            className="border p-2 rounded flex-1 min-w-[180px]"
            required
          />
          <input
            placeholder="Description"
            value={courseForm.description}
            onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
            className="border p-2 rounded flex-1 min-w-[180px]"
            required
          />
          <input
            placeholder="Ideal For"
            value={courseForm.idealfor}
            onChange={(e) => setCourseForm({ ...courseForm, idealfor: e.target.value })}
            className="border p-2 rounded flex-1 min-w-[150px]"
          />
          <input
            placeholder="Duration"
            value={courseForm.duration}
            onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
            className="border p-2 rounded min-w-[120px]"
          />
          <input
            placeholder="Price"
            value={courseForm.price}
            onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })}
            className="border p-2 rounded min-w-[100px]"
          />
          <input
            type="file"
            onChange={(e) => setCourseForm({ ...courseForm, image: e.target.files[0] })}
            className="border p-2 rounded flex-1 min-w-[150px]"
          />
          <input
            type="file"
            onChange={(e) => setCourseForm({ ...courseForm, pngImage: e.target.files[0] })}
            className="border p-2 rounded flex-1 min-w-[150px]"
          />
          <button type="submit" className="bg-pink-900 text-white px-6 py-2 rounded">
            {editCourseId ? "Update" : "Add"}
          </button>
        </form>
      </section>

      {/* COURSES LIST */}
      <section className="space-y-3">
        {loading ? (
          <p>Loading courses...</p>
        ) : (
          courses.map((c) => (
            <div key={c._id} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: c.description }} />
                  {c.idealfor && <p>Ideal For: {c.idealfor}</p>}
                  {c.duration && <p>Duration: {c.duration}</p>}
                  {c.price && <p>Price: {c.price}</p>}
                  {c.link && <p>Link: <a href={c.link} className="text-blue-600 underline">{c.link}</a></p>}
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  <button onClick={() => handleEdit(c)} className="bg-yellow-500 px-3 py-1 rounded">Edit</button>
                  <button onClick={() => dispatch(deleteCourse(c._id))} className="bg-red-500 px-3 py-1 rounded text-white">Delete</button>
                </div>
              </div>

              <div className="mt-2 flex gap-4">
                {c.image && <img src={c.image} alt={c.title} className="w-24 h-24 object-cover rounded" />}
                {c.pngImage && <img src={c.pngImage} alt={`${c.title} PNG`} className="w-24 h-24 object-cover rounded" />}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default AdminCourses;
