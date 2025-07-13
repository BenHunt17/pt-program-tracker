import type { InputProps } from "./LabeledInput";
import LabelledInput from "./LabeledInput";

interface CheckboxInputProps extends InputProps {
  value: boolean | undefined;
  setValue: (value: boolean) => void;
}

export default function CheckboxInput({
  value,
  setValue,
  label,
  isRequired,
  error,
}: CheckboxInputProps) {
  return (
    <LabelledInput label={label} isRequired={isRequired} error={error}>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
        className="h-5 w-5 cursor-pointer"
      />
    </LabelledInput>
  );
}
