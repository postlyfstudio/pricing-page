import React, { useState } from 'react';
import { CheckCircle2, Gift, Clock, ArrowRight, Zap, Store, Briefcase, PlusCircle, Phone } from 'lucide-react';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('business');

  const businessPlans = [
    {
      name: "Launch Website",
      subtitle: "Best for small businesses starting online",
      originalPrice: "14,999",
      price: "9,999",
      popular: false,
      features: [
        "Up to 5 Pages Website",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "WhatsApp Chat Integration",
        "Basic SEO Setup"
      ],
      bonuses: [
        "Hosting",
        "Domain (.com / .in)",
        "SSL Certificate",
        "1 Professional Email"
      ],
      delivery: "2–3 Days"
    },
    {
      name: "Business Growth",
      subtitle: "Professional branding and lead generation.",
      originalPrice: "24,999",
      price: "15,999",
      popular: true,
      badge: "Most Popular",
      features: [
        "Up to 8 Pages Website",
        "Premium Responsive Design",
        "Blog Setup",
        "Google Analytics Setup",
        "Google Search Console Setup",
        "Testimonials Section"
      ],
      bonuses: [
        "Hosting",
        "Domain",
        "SSL Certificate",
        "Basic SEO Setup",
        "2 Professional Emails"
      ],
      delivery: "5–7 Days"
    },
    {
      name: "Premium Business",
      subtitle: "Best for brands serious about scaling online.",
      originalPrice: "39,999",
      price: "24,999",
      popular: false,
      badge: "Best Value",
      features: [
        "Up to 15 Pages Website",
        "Custom UI/UX Design",
        "Conversion Focused Layout",
        "Lead Capture System",
        "Speed Optimization",
        "Security Setup",
        "Advanced On-Page SEO"
      ],
      bonuses: [
        "Hosting",
        "Domain",
        "SSL Certificate",
        "Professional Email Setup"
      ],
      delivery: "8–10 Days"
    }
  ];

  const ecommercePlans = [
    {
      name: "Starter Online Store",
      subtitle: "WordPress / Shopify. Best for launching first store.",
      originalPrice: "22,999",
      price: "14,999",
      popular: false,
      features: [
        "Mobile Responsive Store Design",
        "Up to 10 Products Setup",
        "Secure Checkout System",
        "Payment Gateway Integration",
        "Shipping Setup",
        "Basic Coupon System",
        "Email Notifications",
        "Contact Page",
        "Admin Dashboard"
      ],
      bonuses: [
        "Hosting",
        "Domain (.com / .in)",
        "SSL Certificate",
        "Basic SEO Setup",
        "1 Professional Email"
      ],
      delivery: "5–7 Days"
    },
    {
      name: "Custom Online Store",
      subtitle: "Powerful custom e-commerce website.",
      originalPrice: "39,999",
      price: "24,999",
      popular: true,
      badge: "Most Recommended",
      features: [
        "Custom Responsive Website Design",
        "Up to 15 Products Setup",
        "Secure Checkout System",
        "Payment Gateway Integration",
        "Shipping Setup",
        "Order Management Dashboard",
        "Coupon / Discount System",
        "Email Notifications",
        "Contact Page",
        "Full Admin Panel Access"
      ],
      bonuses: [
        "Hosting",
        "Domain (.com / .in)",
        "SSL Certificate",
        "Basic SEO Setup",
        "Professional Email Setup"
      ],
      delivery: "10–12 Days"
    }
  ];

  const addOns = [
    { name: "Extra Page", price: "₹1,000" },
    { name: "Extra Section", price: "₹500" },
    // { name: "Extra Product Upload", price: "₹50 / Product" },
    { name: "Additional Email", price: "₹500" },
    { name: "Advanced SEO Setup", price: "₹5,000" },
    { name: "Speed Optimization", price: "₹2,000" },
    { name: "Extra Revision", price: "₹1,000" },
    { name: "Monthly Maintenance", price: "₹2,000 / Month" },
  ];

  const PricingCard = ({ plan }) => (
    <div className={`relative flex flex-col bg-white rounded-2xl shadow-xl border-2 transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'border-blue-600' : 'border-gray-100'}`}>
      {plan.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
          {plan.badge}
        </div>
      )}
      
      <div className="p-8 pb-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-500 text-sm h-10 mb-6">{plan.subtitle}</p>
        
        <div className="mb-6 flex items-baseline">
          <span className="text-gray-400 line-through text-lg mr-2">₹{plan.originalPrice}</span>
          <span className="text-4xl font-extrabold text-gray-900">₹{plan.price}</span>
        </div>

        <button className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
          Get Started <ArrowRight className="ml-2 w-4 h-4" />
        </button>

        <div className="mt-8 space-y-4">
          <p className="font-semibold text-gray-900 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-500" /> Included Features
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-600 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
          <p className="font-semibold text-gray-900 flex items-center text-sm">
            <Gift className="w-4 h-4 mr-2 text-purple-500" /> Free Bonuses (1st Year)
          </p>
          <ul className="space-y-2">
            {plan.bonuses.map((bonus, idx) => (
              <li key={idx} className="flex items-center text-gray-600 text-sm">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 shrink-0"></span>
                {bonus}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-b-xl border-t border-gray-100 flex items-center justify-center text-gray-500 text-sm font-medium">
        <Clock className="w-4 h-4 mr-2" /> Delivery: {plan.delivery}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Website Development Pricing
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            onClick={() => setActiveTab('business')}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === 'business' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Briefcase className="w-4 h-4 mr-2" /> Business Websites
          </button>
          <button
            onClick={() => setActiveTab('ecommerce')}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === 'ecommerce' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Store className="w-4 h-4 mr-2" /> E-Commerce Stores
          </button>
          <button
            onClick={() => setActiveTab('addons')}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === 'addons' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <PlusCircle className="w-4 h-4 mr-2" /> Optional Add-Ons
          </button>
        </div>

        {/* Pricing Content */}
        {activeTab === 'business' && (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {businessPlans.map((plan, idx) => (
              <PricingCard key={idx} plan={plan} />
            ))}
          </div>
        )}

        {activeTab === 'ecommerce' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ecommercePlans.map((plan, idx) => (
                <PricingCard key={idx} plan={plan} />
              ))}
            </div>
            
            {/* Enterprise Banner */}
            <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Store className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Advanced / Enterprise E-Commerce</h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl">
                  For businesses needing complex custom solutions built from the ground up to scale infinitely.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Multi-vendor marketplaces</div>
                  <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Subscription commerce</div>
                  <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> Custom dashboards</div>
                  <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" /> ERP / CRM integrations</div>
                </div>
                <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> Contact for Custom Quotation
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'addons' && (
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 bg-gray-50 border-b border-gray-100 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Optional Add-Ons</h2>
                <p className="text-gray-500 mt-2">Customize your package with these specialized services.</p>
              </div>
              <ul className="divide-y divide-gray-100">
                {addOns.map((addon, idx) => (
                  <li key={idx} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span className="text-gray-700 font-medium">{addon.name}</span>
                    <span className="font-bold text-gray-900 bg-blue-50 px-4 py-1.5 rounded-lg text-sm">
                      {addon.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PricingPage;
