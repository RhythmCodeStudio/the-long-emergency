interface FormInputProps {
  inputType: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  required: boolean;
  autoComplete: string;
  errorMessage: string;
  idPrefix?: string;
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
          className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-3xl tracking-wide h-80 resize-none caret-blue-500 bg-[linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)),url('/images/masks-no-text.png')] bg-no-repeat bg-cover bg-center"
        />
      ) : (
        <input
          className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-3xl tracking-wide h-10 caret-blue-500 bg-[linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)),url('/images/masks-no-text.png')] bg-no-repeat bg-cover bg-center"
          type={type}
          id={uniqueInputId}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          autoComplete={autoComplete}
          onChange={(e) => handleChange(e, setStateVariable)}
        />
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
