import { useDispatch, useSelector } from "react-redux";
// import { updateCourse, fetchSingleCourse } from "../redux/courseSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCourse, updateCourse } from "../../store/slice/courseSlice";

const AdminEditCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentCourse } = useSelector((state) => state.courses);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    price: ""
  });

  useEffect(() => {
    dispatch(fetchSingleCourse(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentCourse) {
      setFormData(currentCourse);
    }
  }, [currentCourse]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCourse({ id, updatedData: formData }));
    alert("Course Updated Successfully");
  };

  return (
    <div className="p-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Course</h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Course Title" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <input name="instructor" value={formData.instructor} onChange={handleChange} placeholder="Instructor" />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default AdminEditCourse;
