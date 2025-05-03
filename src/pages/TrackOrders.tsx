
import { useState } from "react";
import HomeLayout from "@/components/HomeLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import OrderTracking from "@/components/OrderTracking";
import { Search } from "lucide-react";

const TrackOrders = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  
  const handleSearch = () => {
    if (trackingId) {
      setIsSearched(true);
    }
  };

  return (
    <HomeLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-afrit-blue mb-2">Track Your Orders</h1>
          <p className="text-gray-600">Enter your order or tracking number to check the status of your shipment</p>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-2">
            <h2 className="text-xl font-semibold">Order Tracking</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Input
                  placeholder="Enter order number or tracking ID"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button onClick={handleSearch}>
                Track Order
              </Button>
            </div>
          </CardContent>
        </Card>

        {isSearched && <OrderTracking />}
        
        {!isSearched && (
          <div className="text-center py-12">
            <div className="mb-4">
              <img 
                src="/placeholder.svg" 
                alt="Track your order" 
                className="w-32 h-32 mx-auto opacity-50"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Enter an order number to track</h3>
            <p className="text-gray-500">
              You'll be able to see the current status and journey of your shipment.
            </p>
          </div>
        )}
      </div>
    </HomeLayout>
  );
};

export default TrackOrders;
