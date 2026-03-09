/**
 * Learn Page - Educational content about crypto.
 * Displays articles, guides, and resources for learning about cryptocurrency.
 */
import { learnArticles } from "../data/cryptoAssets";
import Card from "../components/common/Card";
import learnUsdc from "../assets/images/learn-usdc.png";
import learnBank from "../assets/images/learn-bank.png";
import learnBitcoin from "../assets/images/learn-bitcoin.png";

// Map images to articles
const articleImages = [learnUsdc, learnBank, learnBitcoin];

const categories = ["All", "Crypto basics", "Tips & tutorials", "Market updates"];

const Learn = () => {
  return (
    <section className="pt-[140px] pb-32 bg-[#f5f5f5] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        {/* Page Header */}
        <div className="mb-16">
          <h1
            className="text-[48px] sm:text-[56px] lg:text-[72px] font-normal text-[#0a0b0d] leading-[1.05] tracking-[-0.03em]"
            style={{ fontFamily: "'Coinbase Display', Georgia, 'Times New Roman', serif" }}
          >
            Learn about crypto
          </h1>
          <p className="mt-6 text-[20px] text-[#5b616e] leading-[1.5] max-w-[600px]">
            Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-8 py-4 text-[16px] font-bold rounded-full transition-colors cursor-pointer ${
                i === 0
                  ? "bg-[#0a0b0d] text-white"
                  : "text-[#5b616e] bg-white border border-[#d1d5db] hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-3xl overflow-hidden mb-12 hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:flex-1 aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img src={learnUsdc} alt="Featured article" className="w-full h-full object-cover" />
            </div>
            <div className="lg:flex-1 p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-2 text-[12px] font-bold text-[#0052FF] bg-[#E8F0FE] rounded-full uppercase tracking-wider mb-6 w-fit">
                Featured
              </span>
              <h2 className="text-[32px] font-bold text-[#0a0b0d] leading-[1.2] mb-4">
                {learnArticles[0].title}
              </h2>
              <p className="text-[18px] text-[#5b616e] leading-[1.6] mb-6">
                {learnArticles[0].description}
              </p>
              <div className="flex items-center gap-4 text-[14px] text-[#8a919e]">
                <span>{learnArticles[0].category}</span>
                <span>•</span>
                <span>{learnArticles[0].readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learnArticles.map((article, index) => (
            <Card
              key={article.id}
              image={articleImages[index]}
              title={article.title}
              description={article.description}
              linkText="Learn more"
              linkTo="/learn"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learn;
