interface InlineTextInputProps {
  value: string | undefined;
  setValue: (value: string) => void;
  multiline?: boolean;
  numberInput?: boolean;
  error?: string;
}

export default function InlineTextInput({
  value,
  setValue,
  multiline,
  numberInput,
  error,
}: InlineTextInputProps) {
  return (
    <div>
      {multiline ? (
        <textarea
          className="w-full p-1 rounded-md bg-secondary border-1 focus:outline-0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          className="w-full p-1 rounded-md bg-secondary border-1 focus:outline-0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={numberInput ? "number" : "none"}
        />
      )}
      <p className="absolute text-error text-xs">{error}</p>
    </div>
  );
}
