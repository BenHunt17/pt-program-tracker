import { Link, useLocation } from "react-router";
import { cn } from "../../common/functions/classnames";

interface SidebarItemProps {
  heading: string;
  route: string;
}

export default function SidebarItem({ heading, route }: SidebarItemProps) {
  const location = useLocation();

  const isSelected = location.pathname === route;

  return (
    <Link to={route} className="">
      <h3
        className={cn(
          "text-2xl p-4",
          isSelected
            ? "bg-sidebar-nav-selected text-on-primary font-bold"
            : "text-on-primary"
        )}
      >
        {heading}
      </h3>
    </Link>
  );
}
