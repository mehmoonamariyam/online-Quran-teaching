const CourseHeader = () => {
  return (
    <>
<section className="relative bg-linear-to-r py-20 px-6 md:px-16">
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
    {/* Left: Text */}
  <div className="md:w-1/2 text-center md:text-left">
  <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-6">
    Explore Our Quran Courses
  </h1>
  <p className="text-lg md:text-xl text-pink-900 mb-4 max-w-xl">
    Deepen your connection with the Quran through our wide range of structured courses — from <b>Tajweed</b> and <b>Tarteel</b> to <b>Tafseer</b>, <b>Hifz</b>, and more.
</p>
  <p className="text-lg md:text-xl text-pink-900 max-w-xl">
              Each course is designed to help students not only learn the Quran, but also understand, reflect, and live by its teachings with the guidance of experienced tutors.
            

  </p>
</div>


    {/* Right: Image */}
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <img
        src="/images/guide.png"  // replace with your image path
        alt="Donation Illustration"
        className="w-full max-w-sm md:max-w-md rounded-3xl shadow-2xl border-4 border-pink-900 bg-white"
      />
    </div>
  </div>
</section>
    </>
  );
};

export default CourseHeader;
