
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import HomeLayout from "@/components/HomeLayout";
import WholesalersList from "@/components/WholesalersList";

const Wholesalers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <HomeLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-afrit-blue mb-2">Turkish Wholesalers</h1>
          <p className="text-gray-600">Connect directly with trusted Turkish suppliers for your business needs</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search wholesalers..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="textiles">Textiles</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="crafts">Crafts</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="istanbul">Istanbul</SelectItem>
                <SelectItem value="ankara">Ankara</SelectItem>
                <SelectItem value="izmir">Izmir</SelectItem>
                <SelectItem value="bursa">Bursa</SelectItem>
                <SelectItem value="antalya">Antalya</SelectItem>
              </SelectContent>
            </Select>
            <Button>Filter</Button>
          </div>
        </div>

        <WholesalersList />
      </div>
    </HomeLayout>
  );
};

export default Wholesalers;
