import { useState } from "react";
import bitcoinLogo from "../assets/crypto/bitcoin.png";
import ethereumLogo from "../assets/crypto/ethereum.png";
import tetherLogo from "../assets/crypto/tether.png";
import bnbLogo from "../assets/crypto/bnb.png";
import xrpLogo from "../assets/crypto/xrp.png";
import usdcLogo from "../assets/crypto/usdc.png";

const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

const cryptoAssets = [
  { name: "Bitcoin", symbol: "BTC", price: "GHS 713,549.78", change: "1.73%", logo: bitcoinLogo },
  { name: "Ethereum", symbol: "ETH", price: "GHS 20,976.78", change: "1.30%", logo: ethereumLogo },
  { name: "Tether", symbol: "USDT", price: "GHS 10.79", change: "0.00%", logo: tetherLogo },
  { name: "BNB", symbol: "BNB", price: "GHS 6,633.50", change: "0.81%", logo: bnbLogo },
  { name: "XRP", symbol: "XRP", price: "GHS 14.48", change: "1.16%", logo: xrpLogo },
  { name: "USDC", symbol: "USDC", price: "GHS 10.80", change: "--", logo: usdcLogo },
];

const ExploreCrypto = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-20 lg:gap-32">
          {/* Left - Text */}
          <div className="flex-1 lg:pt-24 shrink-0">
            <h2 className="text-[56px] sm:text-[72px] lg:text-[80px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em] max-w-[600px]" style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}>
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="mt-8 text-[22px] text-[#5b616e] leading-[1.5] max-w-[500px]">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-12 px-14 py-6 bg-[#0a0b0d] text-white text-[18px] font-bold rounded-full hover:bg-[#2a2b2d] transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              See more assets
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          {/* Right - Dark Card with Crypto List */}
          <div className="flex-[1.2] w-full mt-10 lg:mt-0">
            <div className="bg-[#0a0b0d] rounded-[32px] overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-500">
              {/* Tabs */}
              <div className="flex gap-3 px-8 pt-8 pb-6">
                {tabs.map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(i)}
                    className={`px-8 py-4 text-[16px] font-bold rounded-full transition-colors cursor-pointer ${
                      activeTab === i
                        ? "bg-[#2a2b2d] text-white"
                        : "text-[#8a919e] hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Asset List */}
              <div className="px-8 pb-8">
                {cryptoAssets.map((asset, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-6 border-b border-[#1e1f25] last:border-0"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={asset.logo}
                        alt={asset.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="text-[22px] font-bold text-white">{asset.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[20px] font-bold text-white">{asset.price}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[16px] text-[#df5f67]">↙ {asset.change}</span>
                      </div>
                    </div>
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

export default ExploreCrypto;
