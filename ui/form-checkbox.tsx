import { ChangeEvent } from "react";

interface FormCheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  errorMessage?: string;
  idPrefix?: string;
  className?: string;
  labelClassName?: string;
}

export default function FormCheckbox({
  label,
  name,
  checked,
  onChange,
  required = false,
  errorMessage = "",
  idPrefix = "",
  className = "",
  labelClassName = "",
}: FormCheckboxProps) {
  const uniqueInputId = idPrefix ? `${idPrefix}-${name}` : name;

  return (
    <div className={`flex flex-col justify-start w-full ${className}`}>
      <label
        htmlFor={uniqueInputId}
        className={`m-2 text-left text-base flex items-start gap-2 ${labelClassName}`}
      >
        <input
          id={uniqueInputId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required={required}
          className="mt-1 h-4 w-4 accent-blue-500 cursor-pointer"
        />
        <span>
          {label}
          {required && (
            <>
              <span>*</span>
              <span className="text-xs"> (required)</span>
            </>
          )}
        </span>
      </label>

      <p
        className="text-red-200 text-xs mt-1 ml-2 min-h-5 transition-opacity duration-300"
        style={{
          visibility: errorMessage ? "visible" : "hidden",
          opacity: errorMessage ? 1 : 0,
        }}
      >
        {errorMessage || " "}
      </p>
    </div>
  );
}