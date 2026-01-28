import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnrollments, resetEnrollmentsState } from "../store/slice/FormSlices/enroll";

const AdminEnrollments = () => {
  const dispatch = useDispatch();
  const { enrollments, fetchLoading, fetchError } = useSelector((state) => state.enroll);

  useEffect(() => {
    dispatch(fetchEnrollments());

    // Cleanup on unmount
    return () => {
      dispatch(resetEnrollmentsState());
    };
  }, [dispatch]);

  if (fetchLoading) {
    return <p className="text-center mt-10 text-gray-600">Loading enrollments...</p>;
  }

  if (fetchError) {
    return <p className="text-center mt-10 text-red-600">{fetchError}</p>;
  }

  return (
    <div className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold mb-4">All Enrollments</h2>

      {enrollments.length === 0 ? (
        <p className="text-center text-gray-500">No enrollments found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Notes</th>
              <th className="border p-2">Submitted At</th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map((enroll, index) => (
              <tr key={enroll._id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{enroll.firstName} {enroll.lastName}</td>
                <td className="border p-2">{enroll.email}</td>
                <td className="border p-2">{enroll.countryCode} {enroll.phone}</td>
                <td className="border p-2 text-center">{enroll.age}</td>
                <td className="border p-2 text-center">{enroll.gender}</td>
                <td className="border p-2">{enroll.course}</td>
                <td className="border p-2">{enroll.notes || "-"}</td>
                <td className="border p-2 text-center">{new Date(enroll.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminEnrollments;
