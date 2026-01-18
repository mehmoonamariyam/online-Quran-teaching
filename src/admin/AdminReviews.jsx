import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, deleteReview, approveReview } from "../store/slice/ReviewSlice";

const AdminReviews = () => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-10">Loading reviews...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold mb-4">All Reviews</h2>

      {!Array.isArray(reviews) || reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Review</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review, index) => (
              <tr key={review._id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{review.name}</td>
                <td className="border p-2">{review.review}</td>
                <td className="border p-2 text-center">⭐ {review.rating}</td>
                <td className="border p-2 text-center">
                  {review.approved ? (
                    <span className="text-green-600 font-semibold">Approved</span>
                  ) : (
                    <span className="text-orange-500 font-semibold">Pending</span>
                  )}
                </td>
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => dispatch(approveReview(review._id))}
                    className={`px-3 py-1 rounded text-white ${
                      review.approved ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {review.approved ? "Unapprove" : "Approve"}
                  </button>

                  <button
                    onClick={() => dispatch(deleteReview(review._id))}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminReviews;
