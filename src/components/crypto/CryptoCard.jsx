/**
 * CryptoCard - Compact crypto display card with logo, price, and change.
 * Used in the Explore page grid view.
 */
import { Link } from "react-router-dom";

const CryptoCard = ({ asset }) => {
  return (
    <Link
      to={`/asset/${asset.symbol.toLowerCase()}`}
      className="group block bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8e8e8]"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={asset.logo} alt={asset.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h3 className="text-[18px] font-bold text-[#0a0b0d] group-hover:text-[#0052FF] transition-colors">
            {asset.name}
          </h3>
          <span className="text-[14px] text-[#8a919e]">{asset.symbol}</span>
        </div>
      </div>
      <p className="text-[20px] font-bold text-[#0a0b0d]">{asset.price}</p>
      <p className={`text-[15px] mt-1 ${asset.changePositive ? "text-[#16a34a]" : "text-[#df5f67]"}`}>
        {asset.changePositive ? "↗" : "↙"} {asset.change}
      </p>
    </Link>
  );
};

export default CryptoCard;
