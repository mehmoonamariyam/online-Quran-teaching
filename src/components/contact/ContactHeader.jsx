import React from "react";

const ContactHeader = () => {
  return (
    <>
<section className="relative bg-linear-to-r py-20 px-6 md:px-16">
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
    {/* Left: Text */}
  <div className="md:w-1/2 text-center md:text-left">
  <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-6">
    Get in Touch<br/> We’re Here to Help
  </h1>

  <p className="text-lg md:text-xl text-pink-900 mb-4 max-w-xl">
    Have questions, need guidance, or want to enroll? Our team is always ready to assist you with anything you need.
  </p>

  <p className="text-lg md:text-xl text-pink-900 max-w-xl">
    Reach out to us anytime — we’re committed to providing you with quick, friendly, and helpful support.
  </p>
</div>


    {/* Right: Image */}
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <img
        src="/images/cardd.png"  // replace with your image path
        alt="Donation Illustration"
        className="w-full max-w-sm md:max-w-md rounded-3xl shadow-2xl border-4 border-pink-900 bg-white"
      />
    </div>
  </div>
</section>
    </>
  );
};

export default ContactHeader;
