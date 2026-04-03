import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EMICalculator = () => {
  const cardRef = useRef(null);

  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(interestRate);
    const N = parseFloat(years);

    if (!P || !R || !N || P <= 0 || R <= 0 || N <= 0) {
      return "";
    }

    const monthlyRate = R / 12 / 100;
    const numberOfMonths = N * 12;

    const emi =
      (P * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    return emi ? emi.toFixed(2) : "";
  };

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="py-20 bg-[#F0F0F0]">
      <div
        ref={cardRef}
        className="max-w-xl mx-auto bg-white border border-[#F0F0F0] rounded-xl shadow-md p-6 md:p-8 will-change-transform"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#2A3361]">
          EMI Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="principal"
              className="block text-sm font-medium text-[#2A3361]"
            >
              Loan Amount (₹)
            </label>
            <input
              id="principal"
              type="number"
              value={principal}
              placeholder="Amount"
              onChange={(e) => setPrincipal(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A3361]"
            />
          </div>

          <div>
            <label
              htmlFor="rate"
              className="block text-sm font-medium text-[#2A3361]"
            >
              Annual Interest Rate (%)
            </label>
            <input
              id="rate"
              type="number"
              value={interestRate}
              placeholder="Rate"
              onChange={(e) => setInterestRate(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A3361]"
            />
          </div>

          <div>
            <label
              htmlFor="years"
              className="block text-sm font-medium text-[#2A3361]"
            >
              Loan Tenure (Years)
            </label>
            <input
              id="years"
              type="number"
              value={years}
              placeholder="Years"
              onChange={(e) => setYears(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A3361]"
            />
          </div>

          {calculateEMI() && (
            <div className="text-center mt-6">
              <p className="text-lg font-medium text-[#2A3361]">
                Your Monthly EMI:{" "}
                <span className="text-green-600 font-bold">
                  ₹{calculateEMI()}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
