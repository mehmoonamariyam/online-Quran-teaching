import React from "react";

const HeroAbout = () => {
  return (
    <section className="relative bg-[#fce9e7] py-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-4">
          About Naba Al Jannah
        </h1>
        <p className="text-lg md:text-xl text-pink-800">
          Discover the beauty of Islam through engaging courses and dedicated
          tutors who nurture the heart, mind, and soul. Learn Tajweed, Tafseer,
          Tehfeez, Salah, Duas, and the inspiring lives of the Sahabiyaat.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="/images/about.jpg"
          alt="About Naba Al Jannah"
          className="rounded-3xl shadow-2xl border-4 border-[#C48E84] w-full"
        />
      </div>
    </section>
  );
};

export default HeroAbout;
