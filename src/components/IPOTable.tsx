
import { useState } from "react";
import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";

// Mock data
const upcomingIPOs = [
  {
    id: 1,
    name: "TechVision AI",
    sector: "Technology",
    priceRange: "₹900-950",
    dateRange: "June 15-18, 2023",
    expectedListing: "June 22, 2023",
    gmp: "+35%",
    prediction: "Strong",
    predictionColor: "text-green-600",
  },
  {
    id: 2,
    name: "GreenEco Energy",
    sector: "Renewable Energy",
    priceRange: "₹550-600",
    dateRange: "June 20-23, 2023",
    expectedListing: "June 27, 2023",
    gmp: "+28%",
    prediction: "Moderate",
    predictionColor: "text-yellow-600",
  },
  {
    id: 3,
    name: "MediTech Solutions",
    sector: "Healthcare",
    priceRange: "₹1200-1250",
    dateRange: "June 25-28, 2023",
    expectedListing: "July 3, 2023",
    gmp: "+42%",
    prediction: "Strong",
    predictionColor: "text-green-600",
  },
  {
    id: 4,
    name: "Urban Mobility",
    sector: "Transportation",
    priceRange: "₹450-500",
    dateRange: "July 5-8, 2023",
    expectedListing: "July 14, 2023",
    gmp: "+15%",
    prediction: "Moderate",
    predictionColor: "text-yellow-600",
  },
  {
    id: 5,
    name: "FinSecure Banking",
    sector: "Finance",
    priceRange: "₹800-850",
    dateRange: "July 10-13, 2023",
    expectedListing: "July 19, 2023",
    gmp: "+22%",
    prediction: "Strong",
    predictionColor: "text-green-600",
  },
];

const IPOTable = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <section id="upcoming" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-ipo-neutral border border-slate-200/50">
            <span className="text-sm font-medium text-ipo-gray">IPO Calendar</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming <span className="text-gradient">IPO Listings</span>
          </h2>
          
          <p className="text-slate-600 max-w-2xl">
            Stay ahead with our curated list of upcoming IPOs. Each listing includes our proprietary prediction score based on market analysis.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-slate-100">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "upcoming"
                  ? "bg-white shadow-sm text-ipo-blue"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming IPOs
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "listed"
                  ? "bg-white shadow-sm text-ipo-blue"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => setActiveTab("listed")}
            >
              Recently Listed
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Company</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Sector</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Price Range</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Issue Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Listing Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">GMP</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Prediction</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-slate-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingIPOs.map((ipo) => (
                <tr key={ipo.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 text-sm font-medium text-slate-900">{ipo.name}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{ipo.sector}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{ipo.priceRange}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{ipo.dateRange}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{ipo.expectedListing}</td>
                  <td className="px-4 py-4 text-sm font-medium text-green-600 flex items-center">
                    {ipo.gmp}
                    <TrendingUp className="ml-1 w-4 h-4" />
                  </td>
                  <td className={`px-4 py-4 text-sm font-medium ${ipo.predictionColor}`}>
                    {ipo.prediction}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="inline-flex items-center justify-center p-1.5 text-xs font-medium bg-ipo-blue/10 text-ipo-blue rounded-md hover:bg-ipo-blue/20 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default IPOTable;
