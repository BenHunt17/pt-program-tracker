interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className="h-fit bg-accent p-2 rounded-xl shadow-sm cursor-pointer hover:bg-accent-hover active:bg-accent-active"
      onClick={onClick}
    >
      <p className="text-on-accent text-lg">{children}</p>
    </button>
  );
}
