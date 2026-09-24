// ui/form-date-input.tsx
interface FormDateInputProps {
  label: string;
  name: string;
  value: string; // yyyy-mm-dd
  required: boolean;
  errorMessage: string;
  idPrefix?: string;
  min?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormDateInput({
  label,
  name,
  value,
  required,
  errorMessage,
  idPrefix = "",
  min,
  handleChange,
}: FormDateInputProps) {
  const uniqueInputId = idPrefix ? `${idPrefix}-${name}` : name;
  return (
    <div className="flex flex-col justify-start w-full">
      <label className="m-2 text-left" htmlFor={uniqueInputId}>
        {label}
        {required && (
          <>
            <span>*</span>
            <span className="text-xs"> (required)</span>
          </>
        )}
      </label>
      <input
        type="date"
        id={uniqueInputId}
        name={name}
        value={value}
        min={min}
        required={required}
        onChange={handleChange}
        className="shadow-md shadow-white border-2 border-border-default w-full text-whitesmoke rounded-3xl tracking-wide caret-blue-500 bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/masks-no-text.png')] bg-no-repeat bg-cover bg-center px-6 pb-1 pt-2 flex items-center [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer"
      />
      <p
        className="text-red-200 text-xs mt-1 ml-2 min-h-5 transition-opacity duration-300"
        style={{ visibility: errorMessage ? "visible" : "hidden", opacity: errorMessage ? 1 : 0 }}>
        {errorMessage || " "}
      </p>
    </div>
  );
}