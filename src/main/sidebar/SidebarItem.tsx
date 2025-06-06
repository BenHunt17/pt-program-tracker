interface SidebarItemProps {
  heading: string;
}

export default function SidebarItem({ heading }: SidebarItemProps) {
  return <h3 className="text-2xl text-gray-100 p-4">{heading}</h3>;
}
