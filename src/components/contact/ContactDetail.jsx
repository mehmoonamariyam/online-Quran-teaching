import React from "react";
import { Mail, Phone, Users } from "lucide-react";
import FAQSection from "./FAQs";
import ReviewSection from "../ReviewBox";

const ContactDetail = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-16 md:py-20 bg-gradient-to-r from-pink-50 to-white">

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-900 mb-4">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-pink-900 max-w-full md:max-w-2xl mx-auto">
          We’re here to help you with enrollment, support, or any query you have.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-full md:max-w-5xl mx-auto">
        {/* WhatsApp */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-900">
          <div className="flex items-center gap-3 mb-3">
            <Phone size={24} className="text-pink-900" />
            <h3 className="text-xl font-bold text-pink-900">WhatsApp</h3>
          </div>
          <p className="text-pink-800 text-base">Message us anytime for quick responses.</p>
          <p className="text-pink-900 font-semibold mt-3 text-lg">+92 XXX XXXXXXX</p>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-900">
          <div className="flex items-center gap-3 mb-3">
            <Mail size={24} className="text-pink-900" />
            <h3 className="text-xl font-bold text-pink-900">Email</h3>
          </div>
          <p className="text-pink-800 text-base">We reply within 24 hours.</p>
          <p className="text-pink-900 font-semibold mt-3 text-lg">support@yourwebsite.com</p>
        </div>

        {/* Community */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-900">
          <div className="flex items-center gap-3 mb-3">
            <Users size={24} className="text-pink-900" />
            <h3 className="text-xl font-bold text-pink-900">WhatsApp Community</h3>
          </div>
          <p className="text-pink-800 text-base">Join to get all course updates.</p>
        </div>
      </div>

      {/* JOIN COMMUNITY */}
      <div className="max-w-full md:max-w-1xl mx-auto mt-16 px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-3xl text-pink-900 mb-4 font-extrabold">
          Join Our WhatsApp Community
        </h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-700 mb-4 text-justify">
          Join our official <span className="text-pink-700 font-medium">WhatsApp community</span> and be part of a 
          <span className="text-pink-700 font-medium"> vibrant, supportive learning network</span>. By joining, 
          you’ll get <span className="text-pink-700 font-medium">instant updates</span> about upcoming batches, 
          <span className="text-pink-700 font-medium"> detailed course schedules</span>, and all learning materials 
          directly in your hands. Stay informed about <span className="text-pink-700 font-medium">special announcements</span>, 
          new workshops, and <span className="text-pink-700 font-medium">exclusive events </span> 
          designed to enhance your Quran learning experience. Connect with <span className="text-pink-700 font-medium">like-minded learners</span>, 
          share your progress, ask questions, and receive helpful tips from experienced tutors. This community is not just about updates—it’s a 
          <span className="text-pink-700 font-medium"> place where you can stay motivated, inspired, and fully engaged</span> in your learning journey. 
          Don’t miss out on any opportunity to grow and learn; <span className="text-pink-700 font-medium">join us today</span> and make the most of your Quranic education.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="YOUR_COMMUNITY_LINK"
            className="bg-pink-900 text-white py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-pink-800 transition"
          >
            Join Community
          </a>
        </div>
      </div>

      {/* JOIN AS TEACHER */}
      <div className="max-w-full md:max-w-1xl mx-auto mt-16 px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-3xl text-pink-900 mb-4 font-extrabold">Join Us as a Teacher</h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-700 mb-1 text-justify">
          If you're a passionate and qualified <span className="text-pink-700 font-medium">female Quran teacher</span>, 
          <span className="text-pink-700 font-medium"> Tajweed instructor</span>, or <span className="text-pink-700 font-medium">Islamic Studies teacher</span>, 
          we would love to have you on our team. Joining us means being part of a <span className="text-pink-700 font-medium">supportive, professional, and flexible teaching environment </span> 
          where you can share your knowledge, inspire students, and help them build a deep and meaningful connection with the Quran. 
          We value <span className="text-pink-700 font-medium">dedication, patience, and a love for teaching</span>, and we aim to provide a platform 
          where teachers can grow professionally while making a <span className="text-pink-700 font-medium">positive difference in students’ lives</span>. 
          You can easily get in touch with us to apply or ask questions through <span className="text-pink-700 font-medium">email or WhatsApp</span>, 
          and our team will guide you through the process. Join our teaching community and become part of a network that encourages <span className="text-pink-700 font-medium">learning, sharing, and continuous growth</span>. 
          This is your chance to contribute, inspire, and be recognized for your expertise while helping students flourish in their Quranic journey.
        </p>
      </div>

      {/* PRIVACY POLICY */}
      <div className="max-w-full md:max-w-1xl mx-auto mt-16 px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-3xl text-pink-900 mb-4 font-extrabold">Privacy Policy</h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-700 mb-4 text-justify">
          We respect your <span className="text-pink-700 font-medium">privacy</span> and are committed to protecting all personal information you share with us. 
          Any details you provide, including your <span className="text-pink-700 font-medium">name, contact information, and learning preferences</span>, 
          are securely stored and never shared with third parties without your consent. By using our services, you agree to adhere to our 
          <span className="text-pink-700 font-medium"> guidelines, class rules, and communication policies</span>, which are designed to create a 
          <span className="text-pink-700 font-medium"> safe and respectful learning environment</span> for all students and teachers. 
          Should you have any questions, concerns, or requests regarding your data or our privacy practices, our 
          <span className="text-pink-700 font-medium"> support team</span> is always available to assist you promptly and efficiently.
        </p>
      </div>

      {/* TERMS & CONDITIONS */}
      <div className="max-w-full md:max-w-1xl mx-auto mt-16 px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-3xl text-pink-900 mb-4 font-extrabold">Terms & Conditions</h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-700 mb-4 text-justify">
          By using our services, you agree to follow our <span className="text-pink-700 font-medium">terms and conditions</span>, 
          which are designed to ensure a <span className="text-pink-700 font-medium">safe, fair, and respectful learning environment </span> 
          for everyone. This includes adhering to class rules, maintaining respectful communication with teachers and fellow students, 
          and using all materials and resources responsibly. Any violation of these terms may result in temporary or permanent suspension 
          from our courses or community. Our goal is to provide a <span className="text-pink-700 font-medium">positive and productive learning experience </span> 
          for all participants, and we appreciate your cooperation in following these guidelines. For any questions or clarifications regarding 
          our terms, please reach out to our <span className="text-pink-700 font-medium">support team</span> at any time.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-full md:max-w-4xl mx-auto mt-20 px-2 sm:px-0">
        <FAQSection />
      </div>

      {/* REVIEW SECTION */}
      <div className="max-w-full md:max-w-4xl mx-auto mt-20 px-2 sm:px-0">
        <ReviewSection />
      </div>

    </section>
  );
};

export default ContactDetail;
