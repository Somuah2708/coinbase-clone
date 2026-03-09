/**
 * SignUp Page - User registration form.
 * Includes name, email, and password fields with Coinbase-style design.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock sign up — no real auth needed for the assignment
    alert(`Account created for: ${firstName} ${lastName} (${email})`);
  };

  return (
    <section className="pt-[100px] min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="w-full max-w-[520px] mx-auto px-6 py-12">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 sm:p-14">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <svg width="50" height="50" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="512" cy="512" r="512" fill="#0052FF"/>
              <path d="M512 692C412.589 692 332 611.411 332 512C332 412.589 412.589 332 512 332C601.468 332 676.186 396.03 690.609 480H870.09C854.581 297.265 700.79 152 512 152C313.26 152 152 313.26 152 512C152 710.74 313.26 872 512 872C700.79 872 854.581 726.735 870.09 544H690.609C676.186 627.97 601.468 692 512 692Z" fill="white"/>
            </svg>
          </div>

          <h1 className="text-[32px] font-bold text-[#0a0b0d] text-center mb-2">
            Create your account
          </h1>
          <p className="text-[16px] text-[#5b616e] text-center mb-10">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#0052FF] font-semibold hover:underline">
              Sign in
            </Link>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[14px] font-semibold text-[#0a0b0d] mb-2">
                  First name
                </label>
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-[14px] font-semibold text-[#0a0b0d] mb-2">
                  Last name
                </label>
                <Input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#0a0b0d] mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#0a0b0d] mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
              <p className="mt-2 text-[13px] text-[#8a919e]">
                Must be at least 8 characters with one uppercase and one number.
              </p>
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 mt-1 rounded border-[#d1d5db] accent-[#0052FF]" required />
              <span className="text-[14px] text-[#5b616e] leading-[1.5]">
                I certify that I am 18 years of age or older, and I agree to the{" "}
                <a href="#" className="text-[#0052FF] hover:underline">User Agreement</a> and{" "}
                <a href="#" className="text-[#0052FF] hover:underline">Privacy Policy</a>.
              </span>
            </label>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create free account
            </Button>
          </form>

          {/* Privacy */}
          <p className="mt-8 text-[12px] text-[#8a919e] text-center leading-[1.6]">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-[#0052FF] hover:underline">Privacy Policy</a> and{" "}
            <a href="#" className="text-[#0052FF] hover:underline">Terms of Service</a> apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
