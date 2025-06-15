import type { InputProps } from "./LabeledInput";
import LabelledInput from "./LabeledInput";

interface textInputProps extends InputProps {
  value: string | undefined;
  setValue: (value: string) => void;
  multiline?: boolean;
  numberInput?: boolean;
}

export default function textInput({
  value,
  setValue,
  label,
  isRequired,
  multiline,
  numberInput,
  error,
}: textInputProps) {
  return (
    <LabelledInput label={label} isRequired={isRequired} error={error}>
      {multiline ? (
        <textarea
          className="w-full max-h-40 border-primary border-2 border-solid p-1 rounded-md"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          className="w-full border-primary border-2 border-solid p-1 rounded-md"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={numberInput ? "number" : "none"}
        />
      )}
    </LabelledInput>
  );
}
