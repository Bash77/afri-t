
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shirt, Smartphone, Watch, Home, BookOpen, Utensils, Briefcase, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Clothing & Textiles",
    icon: Shirt,
    description: "Fashion, fabrics, and apparel",
    color: "bg-blue-100 text-blue-700",
    link: "/category/clothing"
  },
  {
    name: "Electronics",
    icon: Smartphone,
    description: "Gadgets, devices, and accessories",
    color: "bg-orange-100 text-orange-700",
    link: "/category/electronics"
  },
  {
    name: "Fashion Accessories",
    icon: Watch,
    description: "Bags, jewelry, and accessories",
    color: "bg-pink-100 text-pink-700",
    link: "/category/accessories"
  },
  {
    name: "Home & Decor",
    icon: Home,
    description: "Furniture, decor, and housewares",
    color: "bg-green-100 text-green-700",
    link: "/category/home"
  },
  {
    name: "Books & Stationery",
    icon: BookOpen,
    description: "Books, office, and school supplies",
    color: "bg-purple-100 text-purple-700",
    link: "/category/books"
  },
  {
    name: "Kitchenware",
    icon: Utensils,
    description: "Cooking tools and kitchen essentials",
    color: "bg-red-100 text-red-700",
    link: "/category/kitchenware"
  },
  {
    name: "Business & Industrial",
    icon: Briefcase,
    description: "Commercial equipment and supplies",
    color: "bg-gray-100 text-gray-700",
    link: "/category/business"
  }
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-afrit-blue mb-3">Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a wide range of Turkish wholesale products for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="card-hover overflow-hidden">
              <CardContent className="p-6">
                <div className={`${category.color} rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{category.description}</p>
                <Button variant="outline" className="w-full flex justify-between" asChild>
                  <Link to={category.link}>
                    <span>Browse</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-afrit-blue hover:bg-afrit-blue/90" asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
