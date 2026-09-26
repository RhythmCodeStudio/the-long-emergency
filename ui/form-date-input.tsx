import { useRef } from "react";
import { FiCalendar } from "react-icons/fi";

interface FormDateInputProps {
  label: string;
  name: string;
  value: string;
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
  const inputRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    inputRef.current?.showPicker?.();
  };

  return (
    <div className="flex w-full flex-col justify-start">
      <label className="m-2 text-left" htmlFor={uniqueInputId}>
        {label}
        {required && (
          <>
            <span>*</span>
            <span className="text-xs"> (required)</span>
          </>
        )}
      </label>

      <div className="relative w-full">
        <input
          ref={inputRef}
          type="date"
          id={uniqueInputId}
          name={name}
          value={value}
          min={min}
          required={required}
          onChange={handleChange}
          onClick={openDatePicker}
          className={`box-border w-full appearance-none rounded-3xl border-2 border-slate-400 bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/masks-no-text.png')] bg-cover bg-center pl-5 pb-1 pt-2 shadow-md shadow-white [&::-webkit-calendar-picker-indicator]:hidden ${
            value ? "text-whitesmoke" : "text-transparent"
          }`}
        />

        {!value && (
          <span className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-sm text-white">
            mm/dd/yyyy
          </span>
        )}

        <FiCalendar
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white"
        />
      </div>

      <p
        className="mt-1 ml-2 min-h-5 text-xs text-red-200 transition-opacity duration-300"
        style={{
          visibility: errorMessage ? "visible" : "hidden",
          opacity: errorMessage ? 1 : 0,
        }}>
        {errorMessage || " "}
      </p>
    </div>
  );
}