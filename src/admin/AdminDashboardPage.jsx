// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   addCourse,
//   deleteCourse,
//   fetchCourses,
//   updateCourse,
// } from "../store/slice/courseSlice";
// import {
//   addTutor,
//   deleteTutor,
//   getTutors,
//   updateTutor,
// } from "../store/slice/TutorSlice";

// const AdminDashboardPage = () => {
//   const dispatch = useDispatch();

//   // ===== Courses state =====
//   const { courses, loading: coursesLoading } = useSelector(
//     (state) => state.courses
//   );

//   const [courseForm, setCourseForm] = useState({
//     title: "",
//     description: "",
//     idealfor: "",
//     duration: "",
//     textOnImage: "",
//     price: "",
//     link: "",
//     classesPerWeek: "",
//     classduration: "",
//     platform: "",
//     language: "",
//     assessment: "",
//     image: null,
//     pngImage: null,
//   });

//   const [editCourseId, setEditCourseId] = useState(null);

//   // ===== Tutors state =====
//   const { tutors, loading: tutorsLoading } = useSelector(
//     (state) => state.tutors
//   );

//   const [tutorForm, setTutorForm] = useState({ name: "", email: "" });
//   const [editTutorId, setEditTutorId] = useState(null);

//   // ===== Load data =====
//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(getTutors());
//   }, [dispatch]);

//   // ===== COURSE SUBMIT (FIXED) =====
//   const handleCourseSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     Object.entries(courseForm).forEach(([key, value]) => {
//       if (
//         value !== "" &&
//         value !== null &&
//         key !== "image" &&
//         key !== "pngImage"
//       ) {
//         formData.append(key, value);
//       }
//     });

//     if (courseForm.image instanceof File) {
//       formData.append("image", courseForm.image);
//     }

//     if (courseForm.pngImage instanceof File) {
//       formData.append("pngImage", courseForm.pngImage);
//     }

//     if (editCourseId) {
//       dispatch(updateCourse({ id: editCourseId, updatedData: formData }));
//       setEditCourseId(null);
//     } else {
//       dispatch(addCourse(formData));
//     }

//     setCourseForm({
//       title: "",
//       description: "",
//       idealfor: "",
//       duration: "",
//       textOnImage: "",
//       price: "",
//       link: "",
//       classesPerWeek: "",
//       classduration: "",
//       platform: "",
//       language: "",
//       assessment: "",
//       image: null,
//       pngImage: null,
//     });
//   };

//   // ===== COURSE EDIT =====
//   const handleCourseEdit = (course) => {
//     setEditCourseId(course._id);
//     setCourseForm({
//       title: course.title || "",
//       description: course.description || "",
//       idealfor: course.idealfor || "",
//       duration: course.duration || "",
//       textOnImage: course.textOnImage || "",
//       price: course.price || "",
//       link: course.link || "",
//       classesPerWeek: course.classesPerWeek || "",
//       classduration: course.classduration || "",
//       platform: course.platform || "",
//       language: course.language || "",
//       assessment: course.assessment || "",
//       image: null, // ❗ file dobara upload optional
//       pngImage: null,
//     });
//   };

//   const handleCourseDelete = (id) => {
//     if (window.confirm("Are you sure to delete this course?")) {
//       dispatch(deleteCourse(id));
//     }
//   };

//   // ===== TUTOR HANDLERS =====
//   const handleTutorSubmit = (e) => {
//     e.preventDefault();
//     if (editTutorId) {
//       dispatch(updateTutor({ id: editTutorId, data: tutorForm }));
//       setEditTutorId(null);
//     } else {
//       dispatch(addTutor(tutorForm));
//     }
//     setTutorForm({ name: "", email: "" });
//   };

//   const handleTutorEdit = (tutor) => {
//     setTutorForm({ name: tutor.name, email: tutor.email });
//     setEditTutorId(tutor.id);
//   };

//   const handleTutorDelete = (id) => {
//     if (window.confirm("Are you sure to delete this tutor?")) {
//       dispatch(deleteTutor(id));
//     }
//   };

//   return (
//     <div className="p-6 space-y-12">
//       {/* ===== COURSES FORM ===== */}
//       <section className="bg-white p-6 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4">Add / Edit Course</h2>

//         <form onSubmit={handleCourseSubmit} className="flex flex-wrap gap-4">
//           <input
//             type="text"
//             placeholder="Course Title"
//             value={courseForm.title}
//             onChange={(e) =>
//               setCourseForm({ ...courseForm, title: e.target.value })
//             }
//             required
//             className="border p-2 rounded flex-1 min-w-[200px]"
//           />

//           <input
//             type="text"
//             placeholder="Course Description"
//             value={courseForm.description}
//             onChange={(e) =>
//               setCourseForm({ ...courseForm, description: e.target.value })
//             }
//             required
//             className="border p-2 rounded flex-1 min-w-[200px]"
//           />

//           <input
//             type="text"
//             placeholder="Ideal For"
//             value={courseForm.idealfor}
//             onChange={(e) =>
//               setCourseForm({ ...courseForm, idealfor: e.target.value })
//             }
//             className="border p-2 rounded flex-1 min-w-[150px]"
//           />

//           <input
//             type="file"
//             onChange={(e) =>
//               setCourseForm({ ...courseForm, image: e.target.files[0] })
//             }
//             className="border p-2 rounded min-w-[180px]"
//           />

//           <input
//             type="file"
//             onChange={(e) =>
//               setCourseForm({ ...courseForm, pngImage: e.target.files[0] })
//             }
//             className="border p-2 rounded min-w-[180px]"
//           />

//           <button
//             type="submit"
//             className="bg-pink-900 text-white px-6 py-2 rounded"
//           >
//             {editCourseId ? "Update Course" : "Add Course"}
//           </button>
//         </form>
//       </section>

//       {/* ===== COURSES LIST ===== */}
//       <section className="space-y-4">
//         {coursesLoading ? (
//           <p>Loading courses...</p>
//         ) : (
//           courses.map((course) => (
//             <div
//               key={course._id}
//               className="border rounded p-4 shadow"
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-lg">{course.title}</h3>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleCourseEdit(course)}
//                     className="bg-yellow-500 px-2 py-1 rounded"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleCourseDelete(course._id)}
//                     className="bg-red-500 px-2 py-1 rounded text-white"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>

//               <p className="mt-2 text-gray-700">
//                 <b>Course Description:</b> {course.description}
//               </p>

//               {course.idealfor && (
//                 <p className="mt-1 text-gray-700">
//                   <b>Ideal For:</b> {course.idealfor}
//                 </p>
//               )}
//             </div>
//           ))
//         )}
//       </section>

//       {/* ===== TUTORS ===== */}
//       {/* (Tutor section unchanged – already correct) */}
//     </div>
//   );
// };

// export default AdminDashboardPage;
