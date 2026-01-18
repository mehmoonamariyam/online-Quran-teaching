import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTutor, getTutors, updateTutor, deleteTutor } from "../store/slice/TutorSlice";

const AdminTeachers = () => {
  const dispatch = useDispatch();
  const { tutors, loading, error } = useSelector((state) => state.tutors);

  const [form, setForm] = useState({ name: "", shortInfo: "", details: "" });
  const [editTutorId, setEditTutorId] = useState(null);

  // Load all tutors on mount
  useEffect(() => {
    dispatch(getTutors());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTutorId) {
      // Update existing tutor
      dispatch(updateTutor({ id: editTutorId, data: form }));
      setEditTutorId(null);
    } else {
      // Add new tutor
      dispatch(addTutor(form));
    }

    setForm({ name: "", shortInfo: "", details: "" });
  };

  const handleEdit = (tutor) => {
    setForm({
      name: tutor.name || "",
      shortInfo: tutor.shortInfo || "",
      details: tutor.details || "",
    });
    setEditTutorId(tutor._id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tutor?")) {
      dispatch(deleteTutor(id));
    }
  };

  return (
    <div className="space-y-6">
      {/* ===== FORM ===== */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-bold text-xl">Teachers</h2>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          placeholder="Short Info"
          value={form.shortInfo}
          onChange={(e) => setForm({ ...form, shortInfo: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          placeholder="Details"
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          className="border p-2 w-full rounded"
          rows={4}
          required
        />

        <button
          type="submit"
          className={`px-4 py-2 rounded text-white ${
            editTutorId ? "bg-yellow-500" : "bg-pink-900"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : editTutorId ? "Update Tutor" : "Add Tutor"}
        </button>

        {error && <p className="text-red-500 mt-1">{error}</p>}
      </form>

      {/* ===== TUTORS LIST ===== */}
      <section className="space-y-4">
        {loading && !tutors.length ? (
          <p>Loading tutors...</p>
        ) : (
          tutors.map((t) => (
            <div key={t._id} className="bg-white p-4 rounded shadow flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-gray-700"><b>Short Info:</b> {t.shortInfo}</p>
                <p className="text-gray-700"><b>Details:</b> {t.details}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(t)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default AdminTeachers;
