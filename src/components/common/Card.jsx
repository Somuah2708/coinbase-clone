/**
 * Card - A reusable card component for content display.
 * Supports image, title, description, and optional link.
 */
import { Link } from "react-router-dom";

const Card = ({ image, title, description, linkText, linkTo, className = "" }) => {
  return (
    <Link
      to={linkTo || "#"}
      className={`group block bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      {/* Card Image */}
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      {/* Card Content */}
      <div className="p-8">
        <h3 className="text-[22px] font-bold text-[#0a0b0d] mb-4 group-hover:text-[#0052FF] transition-colors leading-[1.3]">
          {title}
        </h3>
        {description && (
          <p className="text-[16px] text-[#5b616e] leading-[1.6]">{description}</p>
        )}
        {linkText && (
          <div className="mt-6 flex items-center gap-1 text-[#0052FF] text-[16px] font-bold">
            {linkText}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
