import { cn } from "../functions/classnames";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function PrimaryButton({
  children,
  onClick,
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "h-fit bg-accent p-2 rounded-xl shadow-sm",
        disabled
          ? "opacity-50"
          : "cursor-pointer hover:bg-accent-hover active:bg-accent-active"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="text-on-accent text-lg">{children}</p>
    </button>
  );
}
