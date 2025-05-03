
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, MapPin, Package, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import HomeLayout from "@/components/HomeLayout";
import RunnersList from "@/components/RunnersList";
import ProductsList from "@/components/ProductsList";
import WholesalersList from "@/components/WholesalersList";
import OrderTracking from "@/components/OrderTracking";

const Runners = () => {
  const [activeTab, setActiveTab] = useState("runners");

  return (
    <HomeLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-afrit-blue mb-2">Explore AfriT Marketplace</h1>
          <p className="text-gray-600">Connect with trusted Turkish suppliers and runners to source quality products for your business</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search runners, products, or wholesalers..." 
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="textiles">Textiles</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="istanbul">Istanbul</SelectItem>
                <SelectItem value="ankara">Ankara</SelectItem>
                <SelectItem value="izmir">Izmir</SelectItem>
                <SelectItem value="bursa">Bursa</SelectItem>
              </SelectContent>
            </Select>
            <Button>Filter</Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="runners">Runners</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="wholesalers">Wholesalers</TabsTrigger>
            <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
          </TabsList>
          <TabsContent value="runners">
            <RunnersList />
          </TabsContent>
          <TabsContent value="products">
            <ProductsList />
          </TabsContent>
          <TabsContent value="wholesalers">
            <WholesalersList />
          </TabsContent>
          <TabsContent value="tracking">
            <OrderTracking />
          </TabsContent>
        </Tabs>
      </div>
    </HomeLayout>
  );
};

export default Runners;
