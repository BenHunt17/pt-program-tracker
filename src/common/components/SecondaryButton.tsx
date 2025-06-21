import { cn } from "../functions/classnames";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function SecondaryButton({
  children,
  onClick,
  disabled,
}: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        "h-fit p-2 rounded-xl shadow-sm border-primary border-2",
        disabled ? "opacity-50" : "cursor-pointer"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="text-lg">{children}</p>
    </button>
  );
}
