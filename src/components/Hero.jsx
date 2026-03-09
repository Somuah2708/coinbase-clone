import heroPhone from "../assets/images/hero-phone.png";

const Hero = () => {
  return (
    <section className="pt-[100px] bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-100px)] gap-16 lg:gap-24">
          {/* Left - Phone Mockup Image */}
          <div className="flex-1 flex flex-col justify-center lg:justify-start py-12 lg:py-0 lg:pr-16 xl:pr-24">
            <div className="relative w-full max-w-[720px]">
              {/* Blue gradient glow behind the phone */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-gradient-to-r from-[#0052FF]/20 via-[#0052FF]/40 to-[#0052FF]/60 blur-[80px] rounded-full pointer-events-none" />
              <img
                src={heroPhone}
                alt="Coinbase app showing portfolio and trading features"
                className="relative z-10 w-full h-auto object-contain rounded-3xl shadow-lg"
              />
            </div>
            <p className="mt-6 text-[15px] text-[#8a919e]">
              Stocks and prediction markets not available in your jurisdiction.
            </p>
          </div>

          {/* Right - Text Content */}
          <div className="flex-1 pb-12 lg:pb-0">
            <h1 className="text-[56px] sm:text-[72px] lg:text-[96px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em]" style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}>
              The future of finance is here.
            </h1>
            <p className="mt-8 text-[22px] text-[#5b616e] leading-[1.5] max-w-[600px]">
              Trade crypto and more on a platform you can trust.
            </p>
            <div className="mt-12 flex items-center gap-5 max-w-[600px]">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-[1.5] px-8 py-6 bg-white border border-[#d1d5db] rounded-lg text-[18px] text-[#0a0b0d] placeholder:text-[#8a919e] focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
              />
              <button className="flex-1 px-14 py-6 bg-[#0052FF] text-white font-bold text-[18px] rounded-full hover:bg-[#003ECB] transition-all duration-200 cursor-pointer whitespace-nowrap hover:shadow-lg hover:shadow-[#0052FF]/25 active:scale-[0.98]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
