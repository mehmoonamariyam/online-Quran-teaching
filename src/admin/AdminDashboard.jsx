import AdminDashboardPage from "./AdminDashboardPage";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <AdminDashboardPage />  {/* CRUD page renders here */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
