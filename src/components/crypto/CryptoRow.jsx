/**
 * CryptoRow - Displays a single cryptocurrency in a list row format.
 * Used in the Explore page and the dark crypto card on the homepage.
 */
import { Link } from "react-router-dom";

const CryptoRow = ({ asset, dark = false, index }) => {
  return (
    <Link
      to={`/asset/${asset.symbol.toLowerCase()}`}
      className={`flex items-center justify-between py-6 border-b last:border-0 transition-colors ${
        dark
          ? "border-[#1e1f25] hover:bg-[#1a1b20]"
          : "border-[#e8e8e8] hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-5">
        {/* Optional rank number */}
        {index !== undefined && !dark && (
          <span className={`text-[16px] font-medium w-8 ${dark ? "text-[#8a919e]" : "text-[#8a919e]"}`}>
            {index + 1}
          </span>
        )}
        <img
          src={asset.logo}
          alt={asset.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <span className={`text-[20px] font-bold ${dark ? "text-white" : "text-[#0a0b0d]"}`}>
            {asset.name}
          </span>
          <span className={`ml-3 text-[16px] ${dark ? "text-[#8a919e]" : "text-[#5b616e]"}`}>
            {asset.symbol}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-[20px] font-bold ${dark ? "text-white" : "text-[#0a0b0d]"}`}>
          {asset.price}
        </p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className={`text-[16px] ${asset.changePositive ? "text-[#16a34a]" : "text-[#df5f67]"}`}>
            {asset.changePositive ? "↗" : "↙"} {asset.change}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CryptoRow;
