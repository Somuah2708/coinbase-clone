/**
 * AssetDetail Page - Detailed view of a single cryptocurrency.
 * Shows price, description, market data, and a mock price chart.
 */
import { useParams, Link } from "react-router-dom";
import { cryptoAssets } from "../data/cryptoAssets";
import Button from "../components/common/Button";

const AssetDetail = () => {
  const { symbol } = useParams();
  const asset = cryptoAssets.find((a) => a.symbol.toLowerCase() === symbol);

  // 404 fallback if asset not found
  if (!asset) {
    return (
      <section className="pt-[140px] pb-32 bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 text-center">
          <h1 className="text-[48px] font-bold text-[#0a0b0d] mb-6">Asset not found</h1>
          <p className="text-[20px] text-[#5b616e] mb-10">The cryptocurrency you're looking for doesn't exist in our database.</p>
          <Button to="/explore" variant="primary" arrow>
            Explore assets
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-[140px] pb-32 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[14px] text-[#5b616e] mb-10">
          <Link to="/explore" className="hover:text-[#0052FF] transition-colors">Explore</Link>
          <span>/</span>
          <span className="text-[#0a0b0d] font-semibold">{asset.name}</span>
        </div>

        {/* Asset Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-32">
          {/* Left - Asset Info */}
          <div className="flex-1">
            <div className="flex items-center gap-5 mb-8">
              <img src={asset.logo} alt={asset.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h1 className="text-[40px] sm:text-[48px] font-bold text-[#0a0b0d] leading-[1.1]">
                  {asset.name}
                  <span className="ml-3 text-[24px] font-normal text-[#8a919e]">{asset.symbol}</span>
                </h1>
              </div>
            </div>

            {/* Price */}
            <div className="mb-10">
              <p className="text-[56px] sm:text-[64px] font-bold text-[#0a0b0d] leading-[1.1]">{asset.priceUSD}</p>
              <p className={`text-[22px] mt-2 font-semibold ${asset.changePositive ? "text-[#16a34a]" : "text-[#df5f67]"}`}>
                {asset.changePositive ? "↗" : "↙"} {asset.change} today
              </p>
            </div>

            {/* Mock Price Chart */}
            <div className="bg-[#f9fafb] rounded-3xl p-8 mb-10 border border-[#e8e8e8]">
              <div className="flex items-center gap-4 mb-6">
                {["1H", "1D", "1W", "1M", "1Y", "All"].map((period, i) => (
                  <button
                    key={period}
                    className={`px-5 py-2 text-[14px] font-bold rounded-full cursor-pointer transition-colors ${
                      i === 1 ? "bg-[#0052FF] text-white" : "text-[#5b616e] hover:bg-gray-200"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
              {/* Simple SVG chart placeholder */}
              <svg viewBox="0 0 800 200" className="w-full h-[200px]">
                <polyline
                  fill="none"
                  stroke="#0052FF"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  points="0,160 50,140 100,145 150,120 200,130 250,110 300,100 350,95 400,105 450,80 500,70 550,85 600,60 650,55 700,40 750,50 800,30"
                />
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0052FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0052FF" stopOpacity="0" />
                </linearGradient>
                <polygon
                  fill="url(#chartGradient)"
                  points="0,160 50,140 100,145 150,120 200,130 250,110 300,100 350,95 400,105 450,80 500,70 550,85 600,60 650,55 700,40 750,50 800,30 800,200 0,200"
                />
              </svg>
            </div>

            {/* Buy/Sell Buttons */}
            <div className="flex gap-4">
              <Button variant="primary" size="lg" className="flex-1">
                Buy {asset.symbol}
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Sell {asset.symbol}
              </Button>
            </div>
          </div>

          {/* Right - About & Market Stats */}
          <div className="flex-1 max-w-[500px]">
            {/* About */}
            <div className="mb-12">
              <h2 className="text-[28px] font-bold text-[#0a0b0d] mb-4">About {asset.name}</h2>
              <p className="text-[18px] text-[#5b616e] leading-[1.7]">{asset.description}</p>
            </div>

            {/* Market Stats */}
            <div className="bg-[#f9fafb] rounded-3xl p-8 border border-[#e8e8e8]">
              <h3 className="text-[22px] font-bold text-[#0a0b0d] mb-6">Market stats</h3>
              <div className="space-y-5">
                {[
                  { label: "Market cap", value: asset.marketCap },
                  { label: "Volume (24h)", value: asset.volume },
                  { label: "Price", value: asset.priceUSD },
                  { label: "Price change (24h)", value: asset.change },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-3 border-b border-[#e8e8e8] last:border-0">
                    <span className="text-[16px] text-[#5b616e]">{stat.label}</span>
                    <span className="text-[16px] font-bold text-[#0a0b0d]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDetail;
