
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
  bio: string;
};

const runners: Runner[] = [
  {
    id: 1,
    name: "Mehmet Yilmaz",
    location: "Istanbul, Turkey",
    image: "https://images.unsplash.com/photo-1619380061814-58f03707f082?w=300&h=300&fit=crop",
    rating: 4.9,
    specialties: ["Clothing", "Electronics"],
    orders: 342,
    isVerified: true,
    bio: "Professional runner with 5+ years of experience sourcing quality products from Istanbul's best markets."
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    location: "Ankara, Turkey",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    rating: 4.7,
    specialties: ["Furniture", "Home Decor"],
    orders: 215,
    isVerified: true,
    bio: "Furniture specialist with direct connections to Turkey's top manufacturers."
  },
  {
    id: 3,
    name: "Ahmet Demir",
    location: "Izmir, Turkey",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop",
    rating: 4.8,
    specialties: ["Textiles", "Footwear"],
    orders: 178,
    isVerified: true,
    bio: "Textile expert focused on quality fabric sourcing and fashion items at wholesale prices."
  },
  {
    id: 4,
    name: "Zeynep Yıldız",
    location: "Bursa, Turkey",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    rating: 4.6,
    specialties: ["Cosmetics", "Accessories"],
    orders: 124,
    isVerified: false,
    bio: "Specializing in cosmetics and accessories from Turkey's emerging brands."
  },
  {
    id: 5,
    name: "Can Özdemir",
    location: "Istanbul, Turkey",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    rating: 4.5,
    specialties: ["Electronics", "Tech Gadgets"],
    orders: 98,
    isVerified: true,
    bio: "Tech specialist with access to the newest electronics at competitive wholesale prices."
  },
  {
    id: 6,
    name: "Elif Yilmaz",
    location: "Antalya, Turkey",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop",
    rating: 4.3,
    specialties: ["Jewelry", "Accessories"],
    orders: 76,
    isVerified: false,
    bio: "Jewelry expert specializing in traditional Turkish designs and modern accessories."
  }
];

const RunnersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            
            <p className="text-sm text-gray-700 mb-3">{runner.bio}</p>
            
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
  );
};

export default RunnersList;
