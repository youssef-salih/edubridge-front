import { useField } from "formik";
import { cn } from "../utils/cn";
import PropTypes from "prop-types";

const InputField = ({
  label,
  disabled = false,
  type = "text",
  options,
  icon,
  placeholder,
  classNameInput,
  className,
  ...props
}) => {
  const [field, meta] = useField(props.name);

  const inputClasses = cn(
    "px-3 py-1 w-full border rounded-md focus:outline-none placeholder:text-sm text-sm",
    icon && "pl-8", // ← Add padding when icon exists
    meta.touched && meta.error ? "border-red-500" : "border-gray-300",
    disabled && "bg-gray-200 cursor-not-allowed",
    classNameInput
  );

  let inputElement;

  if (type === "textarea") {
    inputElement = (
      <textarea
        {...field}
        {...props}
        id={props.name}
        disabled={disabled}
        placeholder={placeholder || props.name}
        className={inputClasses}
        rows={10}
      />
    );
  } else if (type === "select") {
    inputElement = (
      <select
        {...field}
        {...props}
        id={props.name}
        className={inputClasses}
        disabled={disabled}
      >
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  } else {
    inputElement = (
      <input
        {...field}
        {...props}
        disabled={disabled}
        placeholder={placeholder || props.name}
        id={props.name}
        type={type}
        className={inputClasses}
      />
    );
  }

  return (
    <div className={cn("flex flex-col mb-4", className)}>
      <label
        htmlFor={props.name}
        className="mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      {/* Wrapper to position icon */}
      <div className="relative bg-white rounded-lg">
        {icon && (
          <span className="absolute inset-y-0 flex items-center text-gray-400 pointer-events-none left-3">
            {icon}
          </span>
        )}

        {inputElement}
      </div>

      {meta.touched && meta.error && (
        <span className="mt-1 text-sm text-red-500">{meta.error}</span>
      )}
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["text", "email", "password", "textarea", "select"]),
  icon: PropTypes.node,
  className: PropTypes.string,
  classNameInput: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
};
