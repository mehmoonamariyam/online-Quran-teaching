import React from 'react'

const AboutUs = () => {
  return (
    <>
      <section className="relative py-20 px-8 md:px-16 bg-[#ffffff] overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    
      
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full opacity-20 blur-2xl"></div>
              <img
                src="/images/about.jpg"
                alt="About Naba Al Jannah"
                className="rounded-3xl shadow-2xl object-cover w-full h-full border-4 border-[#831843]"
              />
            </div>
          </div>
  <div className="w-full md:w-1/2 px-2 md:px-0 text-center md:text-left">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-900 mb-3 sm:mb-6 md:mb-8 relative inline-block">
    About Us
  </h2>

  <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-3 sm:mb-6 text-justify text-gray-700 break-words">
    <span className="font-semibold text-[#C48E84]">Naba Al Jannah</span> is an online Qur'an
    academy dedicated to spreading the light of Quranic knowledge. Our
    certified and experienced Asatizah guide students of all ages through
    personalized one-on-one sessions, making Qur'an learning easy,
    interactive, and spiritually uplifting from the comfort of your home.
  </p>

  <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-3 sm:mb-6 text-justify text-gray-800 break-words">
    Discover the beauty of Islam through engaging courses that nurture
    the heart, mind, and soul. From <span className="font-semibold text-pink-800">Tajweed</span>,{" "}
    <span className="font-semibold text-pink-800">Tafseer</span>,{" "}
    <span className="font-semibold text-pink-800">Tehfeez</span> to{" "}
    <span className="font-semibold text-pink-800">Salah</span>,{" "}
    <span className="font-semibold text-pink-800">Rabbana & Masnoon Duas</span>, and the inspiring
    lives of the <span className="font-semibold text-pink-800">Sahabiyaat</span>, our courses are
    designed to deepen your connection with <span className="font-semibold">ALLAH</span> and
    strengthen your understanding of the Qur'an and Sunnah.
  </p>
</div>


        </div>
      </section>
    </>
  );
};

export default AboutUs;
