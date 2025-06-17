interface LabelledInputProps extends InputProps {
  children: React.ReactNode;
}

export default function LabelledInput({
  children,
  label,
  isRequired,
  error,
}: LabelledInputProps) {
  return (
    <div className="w-full relative">
      <p className="text-on-background">
        {label} {isRequired && "*"}
      </p>
      {children}
      <p className="absolute text-error text-xs">{error}</p>
    </div>
  );
}

export interface InputProps {
  label: string;
  isRequired?: boolean;
  error?: string;
}
