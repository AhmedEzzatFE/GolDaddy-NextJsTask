import { CustomInputProps, InputProps, TextareaProps } from "@/interfaces";

const index: React.FC<CustomInputProps> = ({
  className = "m-3 rounded-lg bg-slate-600 text-white h-10 placeholder:p-2 p-4",
  placeholder,
  name,
  value,
  type,
  ...rest
}) => {
  if (type === "text") {
    // Render input component
    return (
      <input
        {...(rest as InputProps)} // Explicitly cast to InputProps
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    );
  } else if (type === "textarea") {
    // Render textarea component
    return (
      <textarea
        {...(rest as TextareaProps)} // Explicitly cast to TextareaProps
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    );
  }

  // Handle other types or provide a default
  return null;
};
export default index;
