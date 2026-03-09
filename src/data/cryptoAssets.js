/**
 * Mock data for cryptocurrency assets displayed across the site.
 * Prices are in GHS (Ghanaian Cedi) for locale relevance.
 */

import bitcoinLogo from "../assets/crypto/bitcoin.png";
import ethereumLogo from "../assets/crypto/ethereum.png";
import tetherLogo from "../assets/crypto/tether.png";
import bnbLogo from "../assets/crypto/bnb.png";
import xrpLogo from "../assets/crypto/xrp.png";
import usdcLogo from "../assets/crypto/usdc.png";

export const cryptoAssets = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: "GHS 713,549.78", priceUSD: "$96,432.10", change: "+1.73%", changePositive: true, logo: bitcoinLogo, marketCap: "$1.91T", volume: "$28.4B", description: "Bitcoin is the first and most well-known cryptocurrency, created in 2009 by the pseudonymous Satoshi Nakamoto. It operates on a decentralized peer-to-peer network using blockchain technology." },
  { id: 2, name: "Ethereum", symbol: "ETH", price: "GHS 20,976.78", priceUSD: "$3,456.20", change: "+1.30%", changePositive: true, logo: ethereumLogo, marketCap: "$415.8B", volume: "$15.2B", description: "Ethereum is a decentralized platform that enables smart contracts and decentralized applications (dApps) to be built and run without downtime, fraud, or interference." },
  { id: 3, name: "Tether", symbol: "USDT", price: "GHS 10.79", priceUSD: "$1.00", change: "0.00%", changePositive: true, logo: tetherLogo, marketCap: "$95.2B", volume: "$42.1B", description: "Tether (USDT) is a stablecoin pegged to the US Dollar, designed to maintain a 1:1 value ratio with USD." },
  { id: 4, name: "BNB", symbol: "BNB", price: "GHS 6,633.50", priceUSD: "$612.30", change: "+0.81%", changePositive: true, logo: bnbLogo, marketCap: "$89.4B", volume: "$1.8B", description: "BNB is the native cryptocurrency of the Binance ecosystem, used for trading fee discounts, transaction fees on BNB Chain, and more." },
  { id: 5, name: "XRP", symbol: "XRP", price: "GHS 14.48", priceUSD: "$2.34", change: "+1.16%", changePositive: true, logo: xrpLogo, marketCap: "$134.2B", volume: "$3.1B", description: "XRP is the native digital asset on the XRP Ledger, designed for fast, low-cost international payments and remittances." },
  { id: 6, name: "USDC", symbol: "USDC", price: "GHS 10.80", priceUSD: "$1.00", change: "--", changePositive: true, logo: usdcLogo, marketCap: "$32.1B", volume: "$5.6B", description: "USD Coin (USDC) is a fully backed stablecoin issued by Circle, pegged 1:1 to the US Dollar." },
];

export const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

export const learnArticles = [
  {
    id: 1,
    title: "USDC: The digital dollar for the global crypto economy",
    description: "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable.",
    category: "Crypto basics",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Can crypto really replace your bank account?",
    description: "If you're a big enough fan of crypto, you've probably heard the phrase \"be your own bank\" — the idea being that crypto can offer more control over your financial future.",
    category: "Tips & tutorials",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "When is the best time to invest in crypto?",
    description: "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty.",
    category: "Market updates",
    readTime: "4 min read",
  },
];

export const navLinks = [
  { name: "Cryptocurrencies", path: "/explore" },
  { name: "Individuals", path: "/" },
  { name: "Businesses", path: "/" },
  { name: "Institutions", path: "/" },
  { name: "Developers", path: "/" },
  { name: "Company", path: "/" },
];
