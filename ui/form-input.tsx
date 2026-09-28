interface FormInputProps {
  inputType: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  required: boolean;
  autoComplete?: string;
  errorMessage?: string;
  idPrefix?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>,
  ) => void;
  setStateVariable: React.Dispatch<React.SetStateAction<any>>;
}

export default function FormInput({
  inputType,
  label,
  name,
  type,
  placeholder,
  value,
  required,
  autoComplete,
  errorMessage,
  idPrefix = "",
  handleChange,
  setStateVariable,
  disabled,
  rightIcon,
}: FormInputProps) {
  const uniqueInputId = idPrefix ? `${idPrefix}-${name}` : name;
  return (
    <div className="flex flex-col justify-start w-full">
      <label className="m-2 text-left text-base" htmlFor={uniqueInputId}>
        {label}
        {required && (
          <>
            <span>*</span>
            <span className="text-xs"> (required)</span>
          </>
        )}
      </label>
      {inputType === "textarea" ? (
        <textarea
          autoComplete="off"
          maxLength={1000}
          onChange={(e) => handleChange(e, setStateVariable)}
          value={value}
          required
          name={name}
          placeholder={placeholder}
          id={uniqueInputId}
          disabled={disabled}
          className="shadow-md shadow-white border-2 border-slate-400 p-2 w-full text-whitesmoke placeholder-white/40 rounded-3xl tracking-wide h-80 resize-none caret-blue-500 bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/masks-no-text.png')] bg-no-repeat bg-cover bg-center p-6"
        />
      ) : (
        <div className="relative">
          <input
            className="shadow-md shadow-white border-2 border-slate-400 w-full text-whitesmoke placeholder-white/40 rounded-3xl tracking-wide  caret-blue-500 bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/masks-no-text.png')] bg-no-repeat bg-cover bg-center px-6 pb-1 pt-2 flex items-center"
            type={type}
            id={uniqueInputId}
            name={name}
            placeholder={placeholder}
            value={value}
            required={required}
            autoComplete={autoComplete}
            onChange={(e) => handleChange(e, setStateVariable)}
            disabled={disabled}
          />
          {rightIcon && (
            <div className="absolute right-6 top-[65%] -translate-y-1/2">
              {rightIcon}
            </div>
          )}
        </div>
      )}
      <p
        className="text-red-200 text-xs mt-1 ml-2 min-h-5 transition-opacity duration-300"
        style={{
          visibility: errorMessage ? "visible" : "hidden",
          opacity: errorMessage ? 1 : 0,
        }}>
        {errorMessage || " "}
      </p>
    </div>
  );
}
