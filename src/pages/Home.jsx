/**
 * Home Page - The main landing page of the Coinbase clone.
 * Assembles all homepage sections into a single scrollable page.
 */
import Hero from "../components/Hero";
import ExploreCrypto from "../components/ExploreCrypto";
import AdvancedTrade from "../components/AdvancedTrade";
import CoinbaseOne from "../components/CoinbaseOne";
import BaseApp from "../components/BaseApp";
import LearnCrypto from "../components/LearnCrypto";
import GetStartedCTA from "../components/GetStartedCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <ExploreCrypto />
      <AdvancedTrade />
      <CoinbaseOne />
      <BaseApp />
      <LearnCrypto />
      <GetStartedCTA />
    </>
  );
};

export default Home;
