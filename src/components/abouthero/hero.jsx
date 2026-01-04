import React from "react";

const HeroAbout = () => {
  return (
     <>
<section className="relative bg-linear-to-r py-20 px-6 md:px-16">
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
    {/* Left: Text */}
  <div className="md:w-1/2 text-center md:text-left">
  <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-6">
         About Naba Al Jannah
  </h1>
  <p className="text-lg md:text-xl text-pink-900 mb-4 max-w-xl">
    Discover the beauty of Islam through engaging courses and dedicated
          tutors who nurture the heart, mind, and soul. Learn Tajweed, Tafseer,
          Tehfeez, Salah, Duas, and the inspiring lives of the Sahabiyaat.</p>

</div>


    {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
           <img
           src="/images/about.jpg"
            alt="About"
            className="w-11/12 max-w-xs md:max-w-sm rounded-3xl shadow-2xl border-4 border-pink-900 bg-white"
            />

    </div>
  </div>
</section>
    </>
  );
};

export default HeroAbout;
