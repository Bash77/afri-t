
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find a Runner",
    description: "Connect with trusted Turkish runners who speak your language and understand your needs."
  },
  {
    number: "02",
    title: "Source Products",
    description: "Runners help you source quality products from verified Turkish wholesalers."
  },
  {
    number: "03",
    title: "Manage Shipping",
    description: "Coordinate logistics, payment, and documentation for smooth transit."
  },
  {
    number: "04",
    title: "Track Delivery",
    description: "Monitor your cargo journey from Turkey to Africa in real-time."
  }
];

const benefits = [
  "Direct access to Turkish manufacturers",
  "Lower prices through bulk purchasing",
  "Verified runners and suppliers",
  "Transparent shipping and logistics",
  "Multi-language support",
  "Secure payment options"
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-afrit-orange/20 text-afrit-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
              How AfriT Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-afrit-blue mb-6">
              Simplified Trading Between Turkey & Africa
            </h2>
            <p className="text-gray-600 mb-10">
              Our platform bridges the gap between African entrepreneurs and Turkish wholesale markets,
              eliminating barriers of language, logistics, and trust.
            </p>
            
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="mr-6">
                    <div className="bg-afrit-blue/10 text-afrit-blue font-bold rounded-full h-12 w-12 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-afrit-blue to-afrit-turquoise rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose AfriT?</h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-afrit-yellow flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/20 pt-6 flex justify-between items-center">
              <div>
                <div className="text-sm opacity-80">Ready to get started?</div>
                <div className="font-semibold text-lg">Register in minutes</div>
              </div>
              <a href="/register" className="bg-white text-afrit-blue rounded-full p-3 hover:bg-afrit-yellow hover:text-afrit-blue transition-colors">
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
