
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IPOTable from "../components/IPOTable";
import CompanySearch from "../components/CompanySearch";
import SubscriptionForm from "../components/SubscriptionForm";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-ipo-neutral border border-slate-200/50">
                <span className="text-sm font-medium text-ipo-gray">Our Process</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Our <span className="text-gradient">Prediction Works</span>
              </h2>
              
              <p className="text-slate-600 max-w-2xl">
                Our proprietary algorithm analyzes multiple data points to provide accurate IPO performance predictions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 animate-on-scroll">
                <div className="w-12 h-12 rounded-lg bg-ipo-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-ipo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                <p className="text-slate-600">
                  We gather extensive data on company financials, industry trends, market conditions, and historical IPO performances.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-lg bg-ipo-indigo/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-ipo-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-slate-600">
                  Our machine learning models process this data to identify patterns and predictive indicators for IPO success.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
                <div className="w-12 h-12 rounded-lg bg-ipo-purple/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-ipo-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Prediction Generation</h3>
                <p className="text-slate-600">
                  We generate a comprehensive prediction report with listing day potential, short-term outlook, and long-term prospects.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <IPOTable />
        
        <CompanySearch />
        
        <section id="prediction" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-ipo-neutral border border-slate-200/50 w-fit">
                  <span className="text-sm font-medium text-ipo-gray">Make a Prediction</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Get Your Custom <span className="text-gradient">IPO Prediction</span>
                </h3>
                
                <p className="text-slate-600 mb-8">
                  Enter the IPO details below to receive a personalized prediction report based on our advanced analytics.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company-name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                        placeholder="Enter company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                        Industry/Sector
                      </label>
                      <select
                        id="sector"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                      >
                        <option value="">Select industry/sector</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="consumer">Consumer</option>
                        <option value="energy">Energy</option>
                        <option value="transportation">Transportation</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="issue-size" className="block text-sm font-medium text-gray-700 mb-1">
                        Issue Size (in Crores)
                      </label>
                      <input
                        type="number"
                        id="issue-size"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                        placeholder="Enter issue size"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">
                        Price Range
                      </label>
                      <input
                        type="text"
                        id="price-range"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                        placeholder="e.g., ₹500-550"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="issue-date" className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Issue Date
                      </label>
                      <input
                        type="date"
                        id="issue-date"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="listing-date" className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Listing Date
                      </label>
                      <input
                        type="date"
                        id="listing-date"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="additional-info"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                      placeholder="Any other relevant information about the company or IPO"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-ipo-blue to-ipo-indigo text-white font-medium rounded-lg hover:shadow-lg hover:shadow-ipo-blue/20 transition-shadow"
                  >
                    Generate Prediction
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <SubscriptionForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
