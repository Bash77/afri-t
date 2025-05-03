
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Ship, Clock, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block bg-afrit-orange/90 px-4 py-1 rounded-full text-sm font-medium">
              Connecting Africa & Turkey
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Your Bridge to Turkish Wholesale Products
            </h1>
            <p className="text-lg opacity-90 max-w-lg">
              Find trusted runners, reliable wholesalers, and streamlined logistics for importing products from Turkey to Africa.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-white text-afrit-blue hover:bg-white/90">
                <Link to="/register" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/how-it-works" className="flex items-center gap-2">
                  How It Works
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-white/20">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">10K+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-white/20">
                  <Ship className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">500+ Runners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-white/20">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Secure Payments</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-afrit-yellow to-afrit-orange rounded-3xl blur-sm opacity-75"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-semibold text-lg text-afrit-blue">Order #TK-29581</h3>
                    <p className="text-sm text-gray-600">Istanbul → Lagos</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-medium">In Transit</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-afrit-blue/10 rounded-full flex items-center justify-center text-afrit-blue">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Estimated Delivery</h4>
                      <p className="text-sm text-gray-500">May 15, 2025</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-afrit-blue h-1 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  
                  <div className="grid grid-cols-3 text-xs text-center">
                    <div>
                      <div className="h-2 w-2 bg-afrit-blue rounded-full mx-auto mb-1"></div>
                      <p className="font-medium">Picked Up</p>
                      <p className="text-gray-500">May 2</p>
                    </div>
                    <div>
                      <div className="h-2 w-2 bg-afrit-blue rounded-full mx-auto mb-1"></div>
                      <p className="font-medium">In Transit</p>
                      <p className="text-gray-500">May 8</p>
                    </div>
                    <div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full mx-auto mb-1"></div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-gray-500">May 15</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-afrit-blue hover:bg-afrit-blue/90">Track Details</Button>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-16 -translate-y-1/2 animate-float">
              <div className="absolute -inset-1 bg-gradient-to-br from-afrit-yellow/30 to-afrit-orange/30 rounded-3xl blur-md"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 bg-afrit-orange/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-afrit-orange" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium">New Shipment</h4>
                    <p className="text-xs text-gray-500">Just arrived</p>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-afrit-orange hover:bg-afrit-orange/90">
                  View Items
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
