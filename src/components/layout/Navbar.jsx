import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/cryptoAssets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkItems = navLinks;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e8e8] transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        <div className="flex items-center justify-between h-[100px]">
          {/* Logo - Blue filled circle with white C */}
          <Link to="/" className="shrink-0">
            <svg width="60" height="60" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="512" cy="512" r="512" fill="#0052FF"/>
              <path d="M512 692C412.589 692 332 611.411 332 512C332 412.589 412.589 332 512 332C601.468 332 676.186 396.03 690.609 480H870.09C854.581 297.265 700.79 152 512 152C313.26 152 152 313.26 152 512C152 710.74 313.26 872 512 872C700.79 872 854.581 726.735 870.09 544H690.609C676.186 627.97 601.468 692 512 692Z" fill="white"/>
            </svg>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden lg:flex items-center gap-12 ml-16">
            {linkItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="py-2 text-[18px] font-semibold text-[#0a0b0d] hover:text-[#0052FF] transition-colors whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0052FF] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Search icon */}
            <button className="w-[52px] h-[52px] flex items-center justify-center rounded-full border border-[#d1d5db] hover:bg-gray-50 transition-colors cursor-pointer">
              <svg width="22" height="22" fill="none" stroke="#5b616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            {/* Globe icon */}
            <button className="w-[52px] h-[52px] flex items-center justify-center rounded-full border border-[#d1d5db] hover:bg-gray-50 transition-colors cursor-pointer">
              <svg width="22" height="22" fill="none" stroke="#5b616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </button>
            {/* Sign in */}
            <Link to="/signin" className="px-10 py-5 text-[18px] font-bold text-[#0a0b0d] hover:text-[#0052FF] transition-colors">
              Sign in
            </Link>
            {/* Sign up */}
            <Link to="/signup" className="px-16 py-6 text-[18px] font-bold text-white bg-[#0052FF] rounded-full hover:bg-[#003ECB] transition-all duration-200 hover:shadow-lg hover:shadow-[#0052FF]/25 active:scale-[0.98]">
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="#0a0b0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="#0a0b0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e8e8] shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {linkItems.map((item) => (
              <Link key={item.name} to={item.path} className="block py-3 text-[15px] font-medium text-[#0a0b0d] hover:text-[#0052FF]">
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-[#e8e8e8] flex flex-col gap-3">
              <Link to="/signin" className="block text-center py-3 text-[14px] font-semibold text-[#0a0b0d] border border-[#d1d5db] rounded-full">Sign in</Link>
              <Link to="/signup" className="block text-center py-3 text-[14px] font-semibold text-white bg-[#0052FF] rounded-full">Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
