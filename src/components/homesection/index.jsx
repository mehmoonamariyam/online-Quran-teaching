import React from 'react'

const HomeSection = () => {
  return (
    <>
    <section
  className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-8 md:px-16">
  <div className="md:w-1/2 text-center md:text-left relative z-10 py-16" style={{marginTop:"-50px"}}>
  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-900">
  Learn the Quran with{" "}
  <span style={{ color: "#C48E84" }}>Certified Tutors</span>
</h1>

<p
  className="text-lg md:text-xl mb-6 text-pink-900">
  Start your spiritual journey from the comfort of your home with{" "}
  <span className='text-[#c48e84] font-bold'>
    Naba Al Jannah
  </span>{" "}
  Online Quran Academy.
</p>

    <button
      className="font-semibold py-3 px-8 rounded-full shadow-lg transition bg-pink-900 text-white"
    >
      Join Now
    </button>
  </div>


  <div className="md:w-1/2 m-10 flex justify-center md:justify-end relative md:mt-0 z-10">
    <div
      className="w-64 mt-16 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg flex items-center justify-center"
      style={{
        border: "6px solid #831843",
        backgroundColor: "#EEE6CA",
        marginTop:"-20px"
      }}
    >
      <img
        src="/images/girl.jpg"
        alt="Online Quran Learning"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</section>
    </>
  )
}

export default HomeSection