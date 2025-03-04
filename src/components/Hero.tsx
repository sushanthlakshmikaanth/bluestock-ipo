
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-16 right-[10%] w-72 h-72 bg-ipo-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-[10%] w-80 h-80 bg-ipo-indigo/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-sm animate-fade-in">
            <span className="inline-block w-2 h-2 mr-2 bg-ipo-blue rounded-full animate-pulse-soft"></span>
            <span className="text-sm font-medium">The Future of Investing</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-down">
            <span className="text-gradient">Advanced Analytics</span> For Smart Investors
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Our AI-powered platform analyzes historical data, market trends, and company financials to help you make informed investment decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-zoom-in">
            <a
              href="#prediction"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-ipo-blue to-ipo-indigo text-white font-medium hover:shadow-lg hover:shadow-ipo-blue/20 transition-shadow duration-300"
            >
              Get Started
            </a>
            <a
              href="#upcoming"
              className="px-6 py-3 rounded-md border border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors font-medium inline-flex items-center justify-center group"
            >
              View Opportunities 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">95%</div>
              <p className="text-sm text-slate-500">Prediction Accuracy</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
              <p className="text-sm text-slate-500">Markets Analyzed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">25K+</div>
              <p className="text-sm text-slate-500">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">32%</div>
              <p className="text-sm text-slate-500">Avg. Return Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
