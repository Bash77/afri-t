
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Package } from "lucide-react";

type Wholesaler = {
  id: number;
  name: string;
  logo: string;
  location: string;
  rating: number;
  categories: string[];
  productCount: number;
  established: number;
  isVerified: boolean;
  description: string;
};

const wholesalers: Wholesaler[] = [
  {
    id: 1,
    name: "Istanbul Textile Group",
    logo: "https://images.unsplash.com/photo-1581075143443-333d174799da?w=300&h=300&fit=crop",
    location: "Istanbul, Turkey",
    rating: 4.8,
    categories: ["Clothing", "Textiles", "Fashion"],
    productCount: 1250,
    established: 1998,
    isVerified: true,
    description: "Leading textile wholesale supplier with a wide range of fabrics and finished clothing products."
  },
  {
    id: 2,
    name: "Anatolia Crafts",
    logo: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&h=300&fit=crop",
    location: "Ankara, Turkey",
    rating: 4.9,
    categories: ["Home Decor", "Carpets", "Handicrafts"],
    productCount: 850,
    established: 1985,
    isVerified: true,
    description: "Authentic Turkish handicrafts, carpets, and home decor items from all regions of Turkey."
  },
  {
    id: 3,
    name: "TechWorld Istanbul",
    logo: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=300&h=300&fit=crop",
    location: "Istanbul, Turkey",
    rating: 4.6,
    categories: ["Electronics", "Gadgets", "Tech"],
    productCount: 980,
    established: 2005,
    isVerified: true,
    description: "Wholesale electronics distributor offering competitive prices on the latest tech products."
  },
  {
    id: 4,
    name: "Istanbul Leather Co.",
    logo: "https://images.unsplash.com/photo-1565201955566-de0c7e5bfd5a?w=300&h=300&fit=crop",
    location: "Istanbul, Turkey",
    rating: 4.5,
    categories: ["Leather Goods", "Accessories", "Fashion"],
    productCount: 640,
    established: 1992,
    isVerified: true,
    description: "Premium leather products manufacturer specializing in bags, wallets, and accessories."
  },
  {
    id: 5,
    name: "Ottoman Kitchen Supplies",
    logo: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=300&h=300&fit=crop",
    location: "Bursa, Turkey",
    rating: 4.7,
    categories: ["Kitchenware", "Home", "Ceramics"],
    productCount: 720,
    established: 2001,
    isVerified: false,
    description: "Traditional and modern kitchen supplies, cookware, and ceramic products for restaurants and retailers."
  },
  {
    id: 6,
    name: "Bosphorus Furniture",
    logo: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&h=300&fit=crop",
    location: "Izmir, Turkey",
    rating: 4.4,
    categories: ["Furniture", "Home", "Interior"],
    productCount: 320,
    established: 2008,
    isVerified: false,
    description: "Modern and traditional Turkish furniture designs for homes, offices, and commercial spaces."
  }
];

const WholesalersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {wholesalers.map((wholesaler) => (
        <Card key={wholesaler.id} className="border border-gray-200">
          <CardHeader className="p-4 flex flex-row items-center gap-4">
            <div className="w-16 h-16 relative overflow-hidden rounded-lg">
              <img
                src={wholesaler.logo}
                alt={wholesaler.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{wholesaler.name}</h3>
                {wholesaler.isVerified && (
                  <Badge className="bg-green-600">Verified</Badge>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{wholesaler.location}</span>
                <span className="mx-2">•</span>
                <span>Est. {wholesaler.established}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-gray-700 mb-3">{wholesaler.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {wholesaler.categories.map((category, idx) => (
                <Badge key={idx} variant="outline" className="bg-afrit-blue/5 text-afrit-blue border-afrit-blue/20">
                  {category}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Package className="h-4 w-4 text-afrit-orange mr-1" />
                <span className="text-sm">{wholesaler.productCount} products</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="text-sm">{wholesaler.rating} rating</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1 bg-afrit-blue hover:bg-afrit-blue/90">
                View Products
              </Button>
              <Button variant="outline" className="flex-1 border-afrit-orange text-afrit-orange hover:bg-afrit-orange/10">
                Contact
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WholesalersList;
