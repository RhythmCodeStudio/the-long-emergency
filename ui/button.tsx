// import clsx from 'clsx';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

// export function Button({ children, className, ...rest }: ButtonProps) {
//   return (
//     <button
//       {...rest}
//       className={clsx(
//         'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
//         className,
//       )}
//     >
//       {children}
//     </button>
//   );
// }



interface ButtonProps {
  icon?: React.ReactNode;
  label?: string;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  labelClassName?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  name?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
  ariaLabel?: string;
  // Add other props you might want to support
}

export default function Button({
  icon,
  label,
  title,
  onClick,
  className = "",
  labelClassName = "",
  autoFocus = false,
  disabled = false,
  form,
  name,
  value,
  type = "button",
  ariaLabel = ""
}: ButtonProps) {
  return (
    <button
      title={title}
      autoFocus={autoFocus}
      className={`cursor-pointer ${className} flex flex-col items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50`}
      disabled={disabled}
      form={form}
      name={name}
      onClick={onClick}
      type={type}
      value={value}
      aria-label={ariaLabel}
    >
      {icon}
      <span className={labelClassName}>{label}</span>
    </button>
  );
}