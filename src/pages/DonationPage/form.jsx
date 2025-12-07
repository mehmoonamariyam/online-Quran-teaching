import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCourse } from "../../store/slice/courseSlice";

const CourseAddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    pngImage: "",
    image: "",
    idealfor: "",
    classesPerWeek: "",
    classduration: "",
    platform: "",
    language: "",
    assessment: "",
    details: []
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleAddDetail = () => {
    setFormData({
      ...formData,
      details: [...formData.details, ""],
    });
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...formData.details];
    newDetails[index] = value;
    setFormData({ ...formData, details: newDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse(formData));
    navigate("/courses"); // redirect
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg mt-6 shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-900">Add New Course</h2>

      <form onSubmit={handleSubmit}>

        <input 
          type="text"
          name="title"
          placeholder="Course Title"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Course Description (HTML supported)"
          className="w-full border p-2 mb-3"
          rows="4"
          onChange={handleChange}
        />

        <input 
          type="text"
          name="duration"
          placeholder="Duration (e.g. 8 weeks)"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input 
          type="text"
          name="price"
          placeholder="Price"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input 
          type="text"
          name="pngImage"
          placeholder="PNG Image URL"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input 
          type="text"
          name="image"
          placeholder="Main Image URL"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="idealfor"
          placeholder="Ideal For (HTML supported)"
          className="w-full border p-2 mb-3"
          rows="3"
          onChange={handleChange}
        />

        <h3 className="text-lg font-semibold mt-4">Course Details</h3>
        {formData.details.map((item, i) => (
          <input
            key={i}
            type="text"
            value={item}
            className="w-full border p-2 mb-2"
            placeholder={`Detail ${i + 1}`}
            onChange={(e) => handleDetailChange(i, e.target.value)}
          />
        ))}

        <button
          type="button"
          onClick={handleAddDetail}
          className="bg-green-600 text-white px-3 py-2 mt-2 rounded"
        >
          + Add Detail
        </button>

        <button
          type="submit"
          className="bg-pink-900 hover:bg-pink-800 text-white w-full mt-5 py-3 rounded-lg"
        >
          Add Course
        </button>

      </form>
    </div>
  );
};

export default CourseAddForm;
