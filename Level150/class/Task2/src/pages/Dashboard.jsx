import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Nested ნავიგაცია */}
      <nav>
        <NavLink to="/dashboard/profile">პროფილი</NavLink>
        <NavLink to="/dashboard/settings">პარამეტრები</NavLink>
      </nav>

      {/* აქ ჩაიტვირთება nested გვერდები */}
      <Outlet />
    </div>
  );
};

export default Dashboard;