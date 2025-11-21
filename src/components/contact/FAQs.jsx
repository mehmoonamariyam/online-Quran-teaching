import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ---------------------------------------------------
   SINGLE FILE: FAQAccordion + FAQSection
---------------------------------------------------- */

// Accordion Component
const FAQAccordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-pink-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-xl font-semibold text-pink-900"
      >
        {question}
        <ChevronDown
          size={22}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <p className="mt-3 text-lg text-pink-800">{answer}</p>
      )}
    </div>
  );
};

// FAQ Section Component (this will be imported)
const FAQSection = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-extrabold text-pink-900 text-center mb-10">
        Frequently Asked Questions
      </h2>

      <FAQAccordion
        question="How can I enroll in a course?"
        answer="You can enroll by messaging us on WhatsApp or filling out the form on the Courses page."
      />

      <FAQAccordion
        question="Do you offer trial classes?"
        answer="Yes, we offer a free demo class before registration."
      />

      <FAQAccordion
        question="What are the class timings?"
        answer="Timings are flexible according to your availability."
      />

      <FAQAccordion
        question="How do I change my class timing?"
        answer="Just message your tutor or our WhatsApp support."
      />
    </div>
  );
};

export default FAQSection;
