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
    </div>
  );
};

export default DashboardLayout;
