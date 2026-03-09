/**
 * Explore Page - Browse and discover cryptocurrencies.
 * Displays crypto assets in both grid and list views with tab filtering.
 */
import { useState } from "react";
import { cryptoAssets, tabs } from "../data/cryptoAssets";
import CryptoRow from "../components/crypto/CryptoRow";
import CryptoCard from "../components/crypto/CryptoCard";
import Button from "../components/common/Button";

const Explore = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState("list"); // "list" or "grid"

  return (
    <section className="pt-[140px] pb-32 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        {/* Page Header */}
        <div className="mb-16">
          <h1
            className="text-[48px] sm:text-[56px] lg:text-[72px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em]"
            style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}
          >
            Explore crypto assets
          </h1>
          <p className="mt-6 text-[20px] text-[#5b616e] leading-[1.5] max-w-[600px]">
            Browse hundreds of cryptocurrencies. Buy, sell, and learn about the most popular digital assets.
          </p>
        </div>

        {/* Toolbar: Tabs + View Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 border-b border-[#e8e8e8] pb-6">
          {/* Tabs */}
          <div className="flex gap-3">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-8 py-4 text-[16px] font-bold rounded-full transition-colors cursor-pointer ${
                  activeTab === i
                    ? "bg-[#0a0b0d] text-white"
                    : "text-[#5b616e] hover:bg-[#f5f5f5]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 border border-[#d1d5db] rounded-full p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-full cursor-pointer transition-colors ${viewMode === "list" ? "bg-[#0a0b0d] text-white" : "text-[#5b616e] hover:bg-gray-100"}`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-full cursor-pointer transition-colors ${viewMode === "grid" ? "bg-[#0a0b0d] text-white" : "text-[#5b616e] hover:bg-gray-100"}`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Asset Display */}
        {viewMode === "list" ? (
          <div className="divide-y divide-[#e8e8e8]">
            {cryptoAssets.map((asset, index) => (
              <CryptoRow key={asset.id} asset={asset} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoAssets.map((asset) => (
              <CryptoCard key={asset.id} asset={asset} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" arrow>
            View all assets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
