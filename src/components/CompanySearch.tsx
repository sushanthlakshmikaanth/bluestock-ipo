import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { searchCompanies, type Company } from "@/services/companyApi";
import { toast } from "@/components/ui/use-toast";

const CompanySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    
    if (window.searchTimeout) {
      clearTimeout(window.searchTimeout);
    }
    
    window.searchTimeout = setTimeout(() => {
      setDebouncedQuery(e.target.value);
    }, 300);
  };

  const { data: companies, isLoading, isError } = useQuery({
    queryKey: ['companies', debouncedQuery],
    queryFn: () => searchCompanies(debouncedQuery),
    enabled: debouncedQuery.length > 0,
  });

  const handleCompanyClick = (company: Company) => {
    toast({
      title: `${company.name} (${company.ticker})`,
      description: `Current price: $${company.price}`,
    });
  };

  return (
    <section id="search" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-ipo-neutral border border-slate-200/50">
            <span className="text-sm font-medium text-ipo-gray">Stock Search</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find <span className="text-gradient">Investment Opportunities</span>
          </h2>
          
          <p className="text-slate-600 max-w-2xl">
            Search for companies and stocks to analyze current market trends and opportunities
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by company name or ticker symbol..."
              className="pl-10 py-6 text-lg"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Button 
              className="absolute right-1 top-1/2 transform -translate-y-1/2"
              onClick={() => setDebouncedQuery(searchQuery)}
            >
              Search
            </Button>
          </div>
        </div>
        
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-ipo-blue border-r-transparent"></div>
            <p className="mt-2 text-slate-600">Searching companies...</p>
          </div>
        )}
        
        {isError && (
          <div className="text-center py-8 text-red-500">
            <p>Error searching companies. Please try again.</p>
          </div>
        )}
        
        {!isLoading && companies && companies.length === 0 && debouncedQuery && (
          <div className="text-center py-8 text-slate-600">
            <p>No companies found matching "{debouncedQuery}"</p>
          </div>
        )}
        
        {!isLoading && companies && companies.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Ticker</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Sector</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Opening Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Closing Date</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Price</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {companies.map((company) => (
                    <tr 
                      key={company.id} 
                      className="hover:bg-slate-50 cursor-pointer transition-colors"
                      onClick={() => handleCompanyClick(company)}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{company.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{company.ticker}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{company.sector}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{company.openDate}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{company.closeDate}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 text-right">${company.price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-right">
                        <div className={`inline-flex items-center ${company.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {company.change >= 0 ? (
                            <TrendingUp className="w-4 h-4 mr-1" />
                          ) : (
                            <TrendingDown className="w-4 h-4 mr-1" />
                          )}
                          {company.change > 0 ? '+' : ''}{company.change.toFixed(2)}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanySearch;
