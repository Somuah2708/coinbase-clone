import coinbaseOneImg from "../assets/images/coinbase-one.png";

const CoinbaseOne = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left - Text */}
          <div className="flex-1 max-w-[600px] shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center mb-10">
              <span className="px-8 py-3 text-[14px] font-bold tracking-[0.15em] text-[#0a0b0d] border border-[#d1d5db] rounded-full uppercase">
                Coinbase One
              </span>
            </div>

            <h2 className="text-[56px] sm:text-[72px] lg:text-[80px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em]" style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}>
              Zero trading fees, more rewards.
            </h2>
            <p className="mt-8 text-[22px] text-[#5b616e] leading-[1.5]">
              Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-12 px-14 py-6 bg-[#0a0b0d] text-white text-[18px] font-bold rounded-full hover:bg-[#2a2b2d] transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              Claim free trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          {/* Right - Phone mockup image */}
          <div className="flex-[1.2] w-full flex justify-center">
            <img
              src={coinbaseOneImg}
              alt="Coinbase One - Zero trading fees"
              className="w-full max-w-[640px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinbaseOne;
