
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Package } from "lucide-react";

type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  minOrder: number;
  rating: number;
  wholesalerId: number;
  wholesalerName: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Turkish Cotton T-Shirts (Bulk)",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",
    category: "Clothing",
    price: 4.50,
    minOrder: 50,
    rating: 4.8,
    wholesalerId: 1,
    wholesalerName: "Istanbul Textile Group",
    description: "Premium quality cotton t-shirts available in multiple colors and sizes."
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=300&h=300&fit=crop",
    category: "Electronics",
    price: 12.99,
    minOrder: 20,
    rating: 4.6,
    wholesalerId: 3,
    wholesalerName: "TechWorld Istanbul",
    description: "Bluetooth 5.0 wireless earbuds with charging case and noise cancellation."
  },
  {
    id: 3,
    name: "Turkish Carpet - Traditional Pattern",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=300&h=300&fit=crop",
    category: "Home Decor",
    price: 85.00,
    minOrder: 5,
    rating: 4.9,
    wholesalerId: 2,
    wholesalerName: "Anatolia Crafts",
    description: "Handmade traditional Turkish carpets with authentic patterns from Anatolia region."
  },
  {
    id: 4,
    name: "Leather Wallets Set",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop",
    category: "Accessories",
    price: 8.75,
    minOrder: 30,
    rating: 4.5,
    wholesalerId: 4,
    wholesalerName: "Istanbul Leather Co.",
    description: "Genuine leather wallets with multiple compartments, available in different colors."
  },
  {
    id: 5,
    name: "Turkish Coffee Set",
    image: "https://images.unsplash.com/photo-1626112274391-67b9d35c7707?w=300&h=300&fit=crop",
    category: "Kitchenware",
    price: 22.50,
    minOrder: 10,
    rating: 4.7,
    wholesalerId: 5,
    wholesalerName: "Ottoman Kitchen Supplies",
    description: "Traditional Turkish coffee set including copper pot, cups, and premium coffee."
  },
  {
    id: 6,
    name: "Women's Scarves - Assorted",
    image: "https://images.unsplash.com/photo-1617619424731-a07dd59a7b57?w=300&h=300&fit=crop",
    category: "Fashion",
    price: 6.25,
    minOrder: 40,
    rating: 4.4,
    wholesalerId: 1,
    wholesalerName: "Istanbul Textile Group",
    description: "Lightweight seasonal scarves in various patterns and materials."
  }
];

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="border border-gray-200 overflow-hidden">
          <CardHeader className="p-0">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-afrit-blue">{product.name}</h3>
              <Badge className="bg-afrit-blue">{product.category}</Badge>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            
            <div className="flex items-center justify-between mb-2">
              <div className="text-lg font-bold text-afrit-orange">
                ${product.price.toFixed(2)}
                <span className="text-xs text-gray-500 font-normal"> / unit</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Min. Order:</span> {product.minOrder} units
            </div>
            
            <div className="text-sm text-gray-600">
              <span className="font-medium">Supplier:</span> {product.wholesalerName}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full bg-afrit-blue hover:bg-afrit-blue/90">
              Request Quote
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
