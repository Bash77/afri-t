
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

type Runner = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  specialties: string[];
  orders: number;
  isVerified: boolean;
};

const runners: Runner[] = [
  {
    id: 1,
    name: "Mehmet Yilmaz",
    location: "Istanbul, Turkey",
    image: "https://source.unsplash.com/random/300x300?face=1",
    rating: 4.9,
    specialties: ["Clothing", "Electronics"],
    orders: 342,
    isVerified: true
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    location: "Ankara, Turkey",
    image: "https://source.unsplash.com/random/300x300?face=2",
    rating: 4.7,
    specialties: ["Furniture", "Home Decor"],
    orders: 215,
    isVerified: true
  },
  {
    id: 3,
    name: "Ahmet Demir",
    location: "Izmir, Turkey",
    image: "https://source.unsplash.com/random/300x300?face=3",
    rating: 4.8,
    specialties: ["Textiles", "Footwear"],
    orders: 178,
    isVerified: true
  },
  {
    id: 4,
    name: "Zeynep Yıldız",
    location: "Bursa, Turkey",
    image: "https://source.unsplash.com/random/300x300?face=4",
    rating: 4.6,
    specialties: ["Cosmetics", "Accessories"],
    orders: 124,
    isVerified: false
  }
];

const FeaturedRunners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-afrit-blue">Featured Runners</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Connect with trusted Turkish locals who help source products and manage shipping logistics.
            </p>
          </div>
          <Button className="mt-4 sm:mt-0 bg-afrit-blue hover:bg-afrit-blue/90" asChild>
            <Link to="/runners">View All Runners</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {runners.map((runner) => (
            <Card key={runner.id} className="card-hover border border-gray-200">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={runner.image} 
                    alt={runner.name} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <h3 className="text-white font-semibold">{runner.name}</h3>
                      <div className="flex items-center bg-white/90 rounded-full px-2 py-0.5">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-xs font-medium">{runner.rating}</span>
                      </div>
                    </div>
                  </div>
                  {runner.isVerified && (
                    <Badge className="absolute top-3 right-3 bg-green-600">Verified</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{runner.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {runner.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="bg-afrit-blue/5 text-afrit-blue border-afrit-blue/20">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm mt-4">
                  <div className="flex items-center">
                    <Package className="h-4 w-4 text-afrit-orange mr-1" />
                    <span>{runner.orders} orders</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span>Active</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-afrit-orange hover:bg-afrit-orange/90" asChild>
                  <Link to={`/runners/${runner.id}`}>Contact Runner</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRunners;
