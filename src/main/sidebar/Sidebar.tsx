import ClientOverview from "./ClientOverview";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="h-full w-fit bg-primary flex flex-col rounded-r-md ">
      <h2 className="text-on-primary text-4xl p-4 font-bold tracking-wide">
        Fitter Tomorrow
      </h2>
      <div className="flex flex-col gap-8 mt-8">
        <ClientOverview />
        <div>
          <SidebarItem heading="Home" route="/" />
          <SidebarItem heading="Program builder" route="/program-builder" />
          <SidebarItem heading="Client settings" route="/client-settings" />
        </div>
      </div>
    </aside>
  );
}
