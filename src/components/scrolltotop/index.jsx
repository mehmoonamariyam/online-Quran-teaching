import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Using react-icons

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-pink-900 text-white p-3 rounded-full shadow-lg hover:bg-pink-800 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
