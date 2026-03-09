import learnUsdc from "../assets/images/learn-usdc.png";
import learnBank from "../assets/images/learn-bank.png";
import learnBitcoin from "../assets/images/learn-bitcoin.png";

const LearnCrypto = () => {
  const articles = [
    {
      title: "USDC: The digital dollar for the global crypto economy",
      description: "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable.",
      image: learnUsdc,
    },
    {
      title: "Can crypto really replace your bank account?",
      description: "If you're a big enough fan of crypto, you've probably heard the phrase \"be your own bank\" — the idea being that crypto can offer more control over your financial future.",
      image: learnBank,
    },
    {
      title: "When is the best time to invest in crypto?",
      description: "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty.",
      image: learnBitcoin,
    },
  ];

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-32 w-full">
        {/* Header - two column */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-32 mb-20">
          <h2 className="text-[56px] sm:text-[64px] lg:text-[72px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em] lg:max-w-[600px]" style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}>
            New to crypto? Learn some crypto basics
          </h2>
          <div className="lg:max-w-[500px] lg:pt-4">
            <p className="text-[20px] text-[#5b616e] leading-[1.6] mb-8">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-14 py-6 bg-[#0a0b0d] text-white text-[18px] font-bold rounded-full hover:bg-[#2a2b2d] transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              Read More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {articles.map((article, index) => (
            <a
              key={index}
              href="#"
              className="group block bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-[22px] font-bold text-[#0a0b0d] mb-4 group-hover:text-[#0052FF] transition-colors leading-[1.3]">
                  {article.title}
                </h3>
                <p className="text-[16px] text-[#5b616e] leading-[1.6]">
                  {article.description}
                </p>
                <div className="mt-6 flex items-center gap-1 text-[#0052FF] text-[16px] font-bold">
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnCrypto;
