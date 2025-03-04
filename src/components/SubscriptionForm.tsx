
import { useState } from "react";
import { BellRing, CheckCircle } from "lucide-react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, you would send the email to your backend
    console.log("Subscription email:", email);
  };

  return (
    <section id="subscribe" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-ipo-neutral border border-slate-200/50 w-fit">
                <BellRing className="w-4 h-4 text-ipo-blue mr-2" />
                <span className="text-sm font-medium">Stay Updated</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Never Miss an <span className="text-gradient">IPO Opportunity</span>
              </h3>

              <p className="text-slate-600 mb-6">
                Subscribe to our newsletter to receive IPO alerts, market insights, and exclusive prediction reports directly to your inbox.
              </p>

              {submitted ? (
                <div className="flex items-center p-4 bg-green-50 rounded-lg text-green-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <p className="text-sm font-medium">
                    Thank you for subscribing! Check your inbox for confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-ipo-blue/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-ipo-blue to-ipo-indigo text-white font-medium rounded-lg hover:shadow-lg hover:shadow-ipo-blue/20 transition-shadow"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>

            <div className="hidden md:block relative bg-gradient-to-br from-ipo-blue to-ipo-indigo rounded-l-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]"></div>
              </div>
              <div className="relative h-full p-12 flex flex-col justify-center">
                <div className="mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-fit">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" />
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Subscribers Get:
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <div className="w-5 h-5 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>Early IPO notifications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>Exclusive market insights</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>Premium prediction reports</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>Post-listing performance analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
