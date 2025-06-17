import { Outlet } from "react-router";
import Sidebar from "./sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="bg-background flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}
