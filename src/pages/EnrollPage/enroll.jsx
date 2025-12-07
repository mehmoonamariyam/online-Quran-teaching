import React from 'react';
import EnrollmentForm from '../../components/Forms/Enroll/enroll';

const EnrollPage = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundColor: "#F5FAE1",
        backgroundImage: "url('/images/designnn.jpg')",
      }}
    >
      {/* Only one card */}
      <div className="bg-white/90 p-6 sm:p-8 rounded-lg shadow-lg max-w-xl w-full">
        <EnrollmentForm />
      </div>
    </div>
  );
};

export default EnrollPage;
