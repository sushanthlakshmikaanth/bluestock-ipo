
// Dummy company data
const dummyCompanies = [
  { id: 1, name: "Apple Inc.", ticker: "AAPL", sector: "Technology", price: 187.32, change: 1.45, openDate: "2022-01-03", closeDate: "2022-12-30" },
  { id: 2, name: "Microsoft Corporation", ticker: "MSFT", sector: "Technology", price: 337.26, change: 2.33, openDate: "2022-01-04", closeDate: "2022-12-30" },
  { id: 3, name: "Amazon.com Inc.", ticker: "AMZN", sector: "Consumer Cyclical", price: 174.05, change: -0.78, openDate: "2022-01-03", closeDate: "2022-12-30" },
  { id: 4, name: "Alphabet Inc.", ticker: "GOOGL", sector: "Communication Services", price: 148.62, change: 1.12, openDate: "2022-01-03", closeDate: "2022-12-30" },
  { id: 5, name: "Tesla Inc.", ticker: "TSLA", sector: "Automotive", price: 218.89, change: -1.65, openDate: "2022-01-03", closeDate: "2022-12-30" },
  { id: 6, name: "Meta Platforms Inc.", ticker: "META", sector: "Technology", price: 473.32, change: 3.45, openDate: "2022-01-03", closeDate: "2022-12-30" },
  { id: 7, name: "NVIDIA Corporation", ticker: "NVDA", sector: "Technology", price: 820.18, change: 4.56, openDate: "2022-01-04", closeDate: "2022-12-30" },
  { id: 8, name: "JPMorgan Chase & Co.", ticker: "JPM", sector: "Financial Services", price: 193.27, change: 0.89, openDate: "2022-01-03", closeDate: "2022-12-30" },
  { id: 9, name: "Johnson & Johnson", ticker: "JNJ", sector: "Healthcare", price: 148.86, change: -0.34, openDate: "2022-01-05", closeDate: "2022-12-30" },
  { id: 10, name: "Walmart Inc.", ticker: "WMT", sector: "Consumer Defensive", price: 60.21, change: 0.67, openDate: "2022-01-03", closeDate: "2022-12-30" },
];

export interface Company {
  id: number;
  name: string;
  ticker: string;
  sector: string;
  price: number;
  change: number;
  openDate: string;
  closeDate: string;
}

// Simulated API search function with artificial delay
export const searchCompanies = async (query: string): Promise<Company[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (!query) return [];
  
  // Case-insensitive search on name and ticker
  const normalizedQuery = query.toLowerCase();
  return dummyCompanies.filter(
    company => 
      company.name.toLowerCase().includes(normalizedQuery) || 
      company.ticker.toLowerCase().includes(normalizedQuery)
  );
};

