import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="h-full w-fit bg-gray-500 flex flex-col gap-2 shadow-md">
      <SidebarItem heading="Home" />
      <SidebarItem heading="Program Builder" />
      <SidebarItem heading="Client Settings" />
    </aside>
  );
}
