import advancedTradeImg from "../assets/images/advanced-trade.png";

const AdvancedTrade = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left - Advanced Trade Image */}
          <div className="flex-[1.2] w-full">
            <img
              src={advancedTradeImg}
              alt="Coinbase Advanced Trade interface showing candlestick charts and order books"
              className="w-full h-auto object-contain rounded-3xl shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.3)] transition-shadow duration-500"
            />
          </div>

          {/* Right - Text */}
          <div className="flex-1 max-w-[600px]">
            <h2 className="text-[56px] sm:text-[72px] lg:text-[80px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em]" style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}>
              Powerful tools, designed for the advanced trader.
            </h2>
            <p className="mt-8 text-[22px] text-[#5b616e] leading-[1.5]">
              Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-12 px-14 py-6 bg-[#0a0b0d] text-white text-[18px] font-bold rounded-full hover:bg-[#2a2b2d] transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              Start trading
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTrade;
