"use client";

import Sidebar from "./sideBar/SideBar";
import Dashboard from "./main/Dashboard";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
  
      <Dashboard/>
    </div>
  );
}
