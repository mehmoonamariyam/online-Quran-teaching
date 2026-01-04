const DashboardHome = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold">Total Courses</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold">Teachers</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold">Students</h3>
          <p className="text-2xl mt-2">0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
