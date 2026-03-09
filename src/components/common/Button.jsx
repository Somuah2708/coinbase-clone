/**
 * Button - A reusable button component with multiple variants.
 * Supports: primary (blue), dark (black), outline, and ghost styles.
 */
import { Link } from "react-router-dom";

const variants = {
  primary: "bg-[#0052FF] text-white hover:bg-[#003ECB] hover:shadow-lg hover:shadow-[#0052FF]/25",
  dark: "bg-[#0a0b0d] text-white hover:bg-[#2a2b2d] hover:shadow-lg",
  outline: "bg-transparent text-[#0a0b0d] border border-[#d1d5db] hover:bg-gray-50",
  ghost: "bg-transparent text-[#0a0b0d] hover:text-[#0052FF]",
};

const sizes = {
  sm: "px-6 py-3 text-[14px]",
  md: "px-10 py-5 text-[16px]",
  lg: "px-14 py-6 text-[18px]",
};

const Button = ({
  children,
  variant = "primary",
  size = "lg",
  rounded = true,
  arrow = false,
  to,
  href,
  className = "",
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap ${
    rounded ? "rounded-full" : "rounded-lg"
  } ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </>
  );

  // Render as Link for internal navigation
  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  // Render as anchor for external links
  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  // Render as button by default
  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
