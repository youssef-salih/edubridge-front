import { useField } from "formik";
import { cn } from "../utils/cn";
import PropTypes from "prop-types";

const InputField = ({
  label,
  disabled = false,
  type = "text",
  options,
  ...props
}) => {
  const [field, meta] = useField(props.name);

  const inputClasses = cn(
    "px-3 py-2 border rounded-md focus:outline-none ",
    meta.touched && meta.error ? "border-red-500" : "border-gray-300",
    disabled && "bg-gray-200 cursor-not-allowed"
  );

  let inputElement;

  if (type === "textarea") {
    inputElement = (
      <textarea
        {...field}
        {...props}
        id={props.name}
        disabled={disabled}
        className={inputClasses}
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
        id={props.name}
        type={type}
        className={inputClasses}
      />
    );
  }

  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={props.name} className="mb-1 font-medium text-gray-700">
        {label}
      </label>

      {inputElement}

      {meta.touched && meta.error && (
        <span className="text-red-500 text-sm mt-1">{meta.error}</span>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
};
