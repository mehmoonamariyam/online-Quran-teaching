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

  const initialFormState = {
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
    order: "",
    details: [""],
  };

  const [courseForm, setCourseForm] = useState(initialFormState);
  const [editCourseId, setEditCourseId] = useState(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleDetailChange = (index, value) => {
    const updated = [...courseForm.details];
    updated[index] = value;
    setCourseForm({ ...courseForm, details: updated });
  };

  const addDetailField = () => {
    setCourseForm({ ...courseForm, details: [...courseForm.details, ""] });
  };

  const removeDetailField = (index) => {
    const updated = courseForm.details.filter((_, i) => i !== index);
    setCourseForm({ ...courseForm, details: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = { ...courseForm };

    if (editCourseId) {
      dispatch(updateCourse({ id: editCourseId, updatedData: dataToSend })).then(() => {
        setEditCourseId(null);
        setCourseForm(initialFormState);
        dispatch(fetchCourses());
      });
    } else {
      dispatch(addCourse(dataToSend)).then(() => {
        setCourseForm(initialFormState);
        dispatch(fetchCourses());
      });
    }
  };

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
      image: null,
      pngImage: null,
      order: course.order || "",
      details: course.details && course.details.length ? course.details : [""],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* FORM */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-950">
          {editCourseId ? "Edit Course" : "Add New Course"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* BASIC INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Title"
              value={courseForm.title}
              onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />

            <input
              placeholder="Ideal For"
              value={courseForm.idealfor}
              onChange={(e) => setCourseForm({ ...courseForm, idealfor: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Duration"
              value={courseForm.duration}
              onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Text On Image"
              value={courseForm.textOnImage}
              onChange={(e) => setCourseForm({ ...courseForm, textOnImage: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Price"
              value={courseForm.price}
              onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Link"
              value={courseForm.link}
              onChange={(e) => setCourseForm({ ...courseForm, link: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Classes per Week"
              value={courseForm.classesPerWeek}
              onChange={(e) => setCourseForm({ ...courseForm, classesPerWeek: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Class Duration"
              value={courseForm.classduration}
              onChange={(e) => setCourseForm({ ...courseForm, classduration: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Platform"
              value={courseForm.platform}
              onChange={(e) => setCourseForm({ ...courseForm, platform: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Language"
              value={courseForm.language}
              onChange={(e) => setCourseForm({ ...courseForm, language: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              placeholder="Assessment"
              value={courseForm.assessment}
              onChange={(e) => setCourseForm({ ...courseForm, assessment: e.target.value })}
              className="border p-2 rounded w-full"
            />

            <input
              type="number"
              placeholder="Order"
              value={courseForm.order}
              onChange={(e) => setCourseForm({ ...courseForm, order: e.target.value })}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description (HTML allowed)"
            value={courseForm.description}
            onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
            className="border p-2 rounded w-full"
            rows={4}
            required
          />

          {/* IMAGE UPLOAD */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Course Image</label>
              <input
                type="file"
                onChange={(e) => setCourseForm({ ...courseForm, image: e.target.files[0] })}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">PNG Image</label>
              <input
                type="file"
                onChange={(e) => setCourseForm({ ...courseForm, pngImage: e.target.files[0] })}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* DYNAMIC DETAILS */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-pink-900">Course Details</h4>
            <div className="space-y-2">
              {courseForm.details.map((detail, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    placeholder={`Detail ${idx + 1}`}
                    value={detail}
                    onChange={(e) => handleDetailChange(idx, e.target.value)}
                    className="border p-2 rounded flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeDetailField(idx)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addDetailField}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Add Detail
            </button>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-pink-950 text-white px-6 py-2 rounded mt-4 w-full hover:bg-pink-800"
          >
            {editCourseId ? "Update Course" : "Add Course"}
          </button>
        </form>
      </section>

      {/* COURSES LIST */}
      <section className="space-y-3 mt-6">
        {loading ? (
          <p>Loading courses...</p>
        ) : (
          courses.map((c) => (
            <div key={c._id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: c.description }} />
                  <div className="text-sm space-y-1 mt-2">
                    {c.idealfor && <p>Ideal For: {c.idealfor}</p>}
                    {c.duration && <p>Duration: {c.duration}</p>}
                    {c.price && <p>Price: {c.price}</p>}
                    {c.link && <p>Link: <a href={c.link} className="text-blue-600 underline">{c.link}</a></p>}
                    {c.classesPerWeek && <p>Classes/Week: {c.classesPerWeek}</p>}
                    {c.classduration && <p>Class Duration: {c.classduration}</p>}
                    {c.platform && <p>Platform: {c.platform}</p>}
                    {c.language && <p>Language: {c.language}</p>}
                    {c.assessment && <p>Assessment: {c.assessment}</p>}
                    {c.details && c.details.length > 0 && (
                      <ul className="list-disc ml-5">
                        {c.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button onClick={() => handleEdit(c)} className="bg-yellow-500 px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => dispatch(deleteCourse(c._id))} className="bg-red-500 px-3 py-1 rounded text-white">
                    Delete
                  </button>
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
