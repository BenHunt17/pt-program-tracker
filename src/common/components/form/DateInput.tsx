import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/datePicker.css";
import type { InputProps } from "./LabeledInput";
import LabelledInput from "./LabeledInput";

interface DateInputProps extends InputProps {
  value: Date | undefined;
  setValue: (value: Date | undefined) => void;
  maxDate?: Date;
}

export default function DateInput({
  value,
  setValue,
  label,
  isRequired,
  maxDate,
  error,
}: DateInputProps) {
  return (
    <LabelledInput label={label} isRequired={isRequired} error={error}>
      <DatePicker
        wrapperClassName="w-full"
        className="w-full border-primary border-2 border-solid p-1 rounded-md"
        selected={value}
        onChange={(value) => setValue(value ?? undefined)}
        showYearDropdown
        dropdownMode="select"
        maxDate={maxDate}
      />
    </LabelledInput>
  );
}
