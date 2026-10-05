import { Outlet } from "react-router";
import Sidebar from "../../features/Sidebar/Sidebar";
import Topbar from "../../features/Topbar/Topbar";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="page">
        <Topbar />
        <Outlet />
      </main>
      <div
        className="fixed size-full inset-0 z-[-99999]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(229, 231, 235, 0.3) 1px, transparent 1px), linear-gradient(rgba(229, 231, 235, 0.2) 1px, transparent 1px), radial-gradient(500px at 20% 80%, rgba(139, 92, 246, 0.2), transparent), radial-gradient(500px at 80% 20%, rgba(59, 130, 246, 0.2), transparent)",
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      ></div>
    </div>
  );
};

export default DashboardLayout;
