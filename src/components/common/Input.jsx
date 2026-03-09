/**
 * Input - A reusable form input component with consistent styling.
 * Supports placeholder, type, and optional icon.
 */
const Input = ({ type = "text", placeholder, value, onChange, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-8 py-6 bg-white border border-[#d1d5db] rounded-lg text-[18px] text-[#0a0b0d] placeholder:text-[#8a919e] focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent transition-colors ${className}`}
      {...props}
    />
  );
};

export default Input;
