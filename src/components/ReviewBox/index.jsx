import { useState, useEffect } from "react";

const ReviewSection = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE INFINITE LOOP
  useEffect(() => {
    if (reviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !review.trim() || rating === 0) {
      setError("Please fill all fields including rating.");
      return;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
      setError("Name must contain only alphabets.");
      return;
    }
    if (review.length > 500) {
      setError("Review cannot exceed 500 characters.");
      return;
    }

    setError("");
    const newReview = { id: Date.now(), name: name.trim(), review: review.trim(), rating };
    setReviews([...reviews, newReview]);
    setName("");
    setReview("");
    setRating(0);
  };

  const getPosition = (index) => {
    const len = reviews.length;
    let pos = index - current;
    if (pos < -Math.floor(len / 2)) pos += len;
    if (pos > Math.floor(len / 2)) pos -= len;
    return pos;
  };

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-3xl text-pink-900 font-extrabold mb-6 text-center">
        Student Reviews
      </h2>

      {error && <p className="text-red-600 font-semibold mb-4 text-center">{error}</p>}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-pink-50 shadow-md p-4 rounded-xl mb-10 max-w-xl mx-auto">
        <label className="block text-lg font-semibold text-pink-900 mb-1">Your Name</label>
        <input
          type="text"
          className="w-full p-2 border border-pink-300 rounded-lg mb-3"
          value={name}
          onChange={(e) => setName(e.target.value.replace(/[^A-Za-z ]+/g, ""))}
          maxLength={30}
        />

        <label className="block text-lg font-semibold text-pink-900 mb-1">
          Your Review
        </label>
        <textarea
          className="w-full p-2 border border-pink-300 rounded-lg mb-2"
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          maxLength={500}
        />
        <p className="text-sm text-gray-500 mb-3">{review.length}/500</p>

        <label className="block text-lg font-semibold text-pink-900 mb-1">Rating</label>
        <div className="flex gap-2 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-900 text-white py-2 rounded-lg text-lg font-semibold hover:bg-pink-800 transition"
        >
          Submit Review
        </button>
      </form>

      {/* CAROUSEL */}
      {reviews.length > 0 && (
        <div className="relative flex justify-center items-center overflow-hidden h-[440px] w-full px-4">
          {reviews.map((item, index) => {
            const pos = getPosition(index);
            const scale = pos === 0 ? 1.05 : 0.85;
            const opacity = pos === 0 ? 1 : 0.6;
            const zIndex = pos === 0 ? 10 : 1;

            // Use responsive width for cards
            const cardWidth = window.innerWidth < 640 ? 250 : 280; // 250px for mobile, 280 for desktop
            const translateX = pos * cardWidth;

            return (
              <div
                key={item.id}
                className="absolute bg-white shadow-lg border border-pink-200 rounded-xl p-4 flex flex-col justify-between transition-all duration-500"
                style={{
                  width: cardWidth,
                  height: "400px",
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <div>
                  <h4 className="text-xl font-bold text-pink-900 mb-1">{item.name}</h4>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-2xl ${item.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-pink-800 text-sm text-justify">{item.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
