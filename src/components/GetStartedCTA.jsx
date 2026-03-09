import cryptoCircleImg from "../assets/images/crypto-circle.png";

const GetStartedCTA = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left - Text + Input */}
          <div className="flex-1 max-w-[600px] shrink-0">
            <h2 className="text-[56px] sm:text-[72px] lg:text-[80px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em]" style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}>
              Take control of your money
            </h2>
            <p className="mt-6 text-[22px] text-[#5b616e] leading-[1.5]">
              Start your portfolio today and discover crypto
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-8 py-6 border border-[#d1d5db] rounded-lg text-[18px] text-[#0a0b0d] placeholder-[#8a919e] outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent transition-colors"
              />
              <button className="px-16 py-6 bg-[#0a0b0d] text-white text-[18px] font-bold rounded-full hover:bg-[#2a2b2d] transition-all duration-200 whitespace-nowrap cursor-pointer hover:shadow-lg active:scale-[0.98]">
                Sign up
              </button>
            </div>
          </div>

          {/* Right - Crypto circle image */}
          <div className="flex-[1.2] w-full">
            <img
              src={cryptoCircleImg}
              alt="Cryptocurrency coins arranged in a circle"
              className="w-full max-w-[720px] h-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-32 max-w-[1000px] mx-auto pt-8 border-t border-[#e8e8e8]">
          <p className="text-[14px] text-[#8a919e] leading-[1.6] text-center">
            DEX trading is offered by Coinbase Bermuda Technologies Ltd. Products and features may not be available in all regions. Information is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
