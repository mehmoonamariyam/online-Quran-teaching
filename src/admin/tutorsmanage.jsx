import { useState } from "react";

const TutorsManager = () => {
  const [tutors, setTutors] = useState([
    { id: 1, name: "Ustad Ahmed", expertise: "Tajweed" },
    { id: 2, name: "Miss Fatima", expertise: "Hifz" },
  ]);

  const [form, setForm] = useState({ name: "", expertise: "" });

  const addTutor = (e) => {
    e.preventDefault();
    if (!form.name || !form.expertise) return;

    setTutors([
      ...tutors,
      { id: Date.now(), name: form.name, expertise: form.expertise },
    ]);

    setForm({ name: "", expertise: "" });
  };

  const deleteTutor = (id) => {
    setTutors(tutors.filter((tutor) => tutor.id !== id));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-8">

      <h2 className="text-2xl font-bold text-pink-900 mb-4">
        Manage Tutors
      </h2>

      {/* ADD TUTOR FORM */}
      <form onSubmit={addTutor} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Tutor Name"
          className="w-full border border-pink-300 rounded-lg p-2 focus:ring focus:ring-pink-200"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Expertise (e.g. Tajweed, Arabic)"
          className="w-full border border-pink-300 rounded-lg p-2 focus:ring focus:ring-pink-200"
          value={form.expertise}
          onChange={(e) => setForm({ ...form, expertise: e.target.value })}
        />

        <button
          type="submit"
          className="bg-pink-900 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Add Tutor
        </button>
      </form>

      {/* TUTORS LIST */}
      <div className="space-y-3">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="flex justify-between items-center bg-pink-50 p-3 rounded-lg"
          >
            <div>
              <p className="font-semibold text-pink-900">{tutor.name}</p>
              <p className="text-sm text-gray-600">{tutor.expertise}</p>
            </div>

            <button
              onClick={() => deleteTutor(tutor.id)}
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

export default TutorsManager;
