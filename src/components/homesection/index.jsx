import React from 'react'

const HomeSection = () => {
  return (
    <>
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16">
        
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-900">
            Learn the Quran with{" "}
            <span style={{ color: "#C48E84" }}>Certified Asatizah</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-pink-900">
            Start your spiritual journey from the comfort of your home with{" "}
            <span className='text-[#c48e84] font-bold'>
              Naba Al Jannah
            </span>{" "}
            Online Quran Academy.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div
            className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg flex items-center justify-center"
            style={{
              border: "6px solid #831843",
              backgroundColor: "#EEE6CA",
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

export default HomeSection;
