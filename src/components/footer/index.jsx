import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/designnn.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <footer className="relative text-[#5B2C36] py-10 px-8 md:px-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Top Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 border-b border-[#C48E84]/30 pb-8">
          {/* Logo + Description */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <img
              src="/images/logonaba.png"
              alt="Naba Al Jannah Logo"
              className="w-16 h-16"
            />
            <div>
              <h2 className="text-2xl font-bold text-pink-900">
                Naba Al Jannah
              </h2>
              <p className="text-sm mt-2 leading-relaxed max-w-xs text-[#7A5C61] mx-auto md:mx-0">
                <span className="font-semibold text-pink-900">
                  Naba Al Jannah
                </span>{" "}
                is your trusted online Quran academy, helping students of all
                ages learn with qualified tutors in a peaceful environment — from
                the comfort of home.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-pink-900 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[#7A5C61]">
              {["Home", "About", "Courses", "Tutors", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#C48E84] transition block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-pink-900 mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2 text-[#7A5C61]">
              <li>📞 +92 336 5925901</li>
              <li>✉️ info@nabaaljannah.com</li>
              <li>📍 Chakwal, Pakistan</li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/923365925901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-pink-900 text-white font-semibold py-2 px-5 mt-4 rounded-full shadow-md hover:bg-[#a26f67] transition"
            >
              <img
                src="/images/wtsplogo.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative text-center text-sm text-[#7A5C61] mt-6">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-pink-900">Naba Al Jannah</span>. All
          Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
