import React from "react";

const qarzeCases = [
  { icon: "🏠", title: "Widows & Single Mothers" },
  { icon: "🎓", title: "Students" },
  { icon: "💊", title: "Medical Assistance" },
  { icon: "💼", title: "Small Business Support" },
  { icon: "🧕", title: "Marriage Support" },
  { icon: "🏫", title: "Orphans & Needy Children" },
  { icon: "🕊️", title: "Emergency Relief Cases" },
  { icon: "🕌", title: "Religious Learners" },
  { icon: "🧺", title: "Basic Needs Assistance" },
];

const QarzeHasana = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-pink-50">
 <div className="text-center mb-12 px-4 md:px-0">
 <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-4 relative inline-block">
  Qarze Hasana Initiative
 
</h2>


  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
    📖 <span className="font-semibold text-pink-900">“Who is it that will lend Allah a goodly loan so He may multiply it for him many times over?”</span> - <span className="italic text-pink-700">Surah Al-Baqarah (2:245)</span>
  </p>

  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
    Helping Others, <span className="text-pink-900 font-semibold">Uplifting Lives</span> , A Loan Without Burden.
  </p>

  <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ">
    Our <span className="text-pink-900 font-semibold">Qarze Hasana program</span> supports individuals & families in need through <span className="text-pink-700 font-medium">interest-free financial assistance</span>, following the Quranic principle of lending for the sake of ALLAH. Every contribution becomes a <span className="text-pink-900 font-semibold">means of Sadaqah Jariyah</span> and a step towards a compassionate, faith-driven community.
  </p>
</div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {qarzeCases.map((caseItem, index) => (
          <div
            key={index}
            className="bg-pink-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition border-3 border-pink-800"
          >
            <div className="text-4xl mb-3">{caseItem.icon}</div>
            <h3 className="text-lg font-semibold text-pink-900">{caseItem.title}</h3>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto mb-8 mt-20 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-4 relative inline-block">
    Donate via Mobile Wallets
    <span className="block w-24 h-1 bg-linear-to-r from-pink-500 to-pink-900 rounded-full mt-2 mx-auto"></span>
  </h2>

  <div className="flex flex-col sm:flex-row justify-center gap-6">
    {/* Easypaisa Card */}
    <div className="flex items-center gap-4 bg-pink-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition border-4 border-pink-900">
      <img
        src="/images/easypaisa.png" // optional logo
        alt="Easypaisa"
        className="w-10 h-10"
      />
      <div className="text-left">
        <p className="text-pink-900 font-bold text-lg">Easypaisa</p>
        <p className="text-gray-700 text-md font-semibold">0311-3487849</p>
      </div>
    </div>

    {/* JazzCash Card */}
    <div className="flex items-center gap-4 bg-pink-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition border-4 border-pink-900">
      <img
        src="/images/jazzcash.png" // optional logo
        alt="JazzCash"
        className="w-10 h-10"
      />
      <div className="text-left">
        <p className="text-pink-900 font-bold text-lg">JazzCash</p>
        <p className="text-gray-700 text-md font-semibold">0333-1347461</p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default QarzeHasana;
