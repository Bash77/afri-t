
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Package, Truck, MapPin, Clock } from "lucide-react";

type TrackingStatus = "pending" | "processing" | "shipped" | "in_transit" | "delivered";

type TrackingOrder = {
  id: string;
  orderNumber: string;
  productName: string;
  date: string;
  status: TrackingStatus;
  origin: string;
  destination: string;
  runner: string;
  lastUpdate: string;
};

const orders: TrackingOrder[] = [
  {
    id: "1",
    orderNumber: "TRK-7856421",
    productName: "Turkish Cotton T-Shirts (100 units)",
    date: "2023-04-12",
    status: "delivered",
    origin: "Istanbul, Turkey",
    destination: "Lagos, Nigeria",
    runner: "Mehmet Yilmaz",
    lastUpdate: "2023-04-25"
  },
  {
    id: "2",
    orderNumber: "TRK-7891432",
    productName: "Leather Wallets (50 units)",
    date: "2023-05-03",
    status: "in_transit",
    origin: "Istanbul, Turkey",
    destination: "Nairobi, Kenya",
    runner: "Ayşe Kaya",
    lastUpdate: "2023-05-10"
  },
  {
    id: "3",
    orderNumber: "TRK-7923145",
    productName: "Turkish Coffee Sets (25 units)",
    date: "2023-05-15",
    status: "shipped",
    origin: "Bursa, Turkey",
    destination: "Addis Ababa, Ethiopia",
    runner: "Ahmet Demir",
    lastUpdate: "2023-05-18"
  },
  {
    id: "4",
    orderNumber: "TRK-8012375",
    productName: "Wireless Earbuds (40 units)",
    date: "2023-05-20",
    status: "processing",
    origin: "Istanbul, Turkey",
    destination: "Accra, Ghana",
    runner: "Can Özdemir",
    lastUpdate: "2023-05-21"
  },
  {
    id: "5",
    orderNumber: "TRK-8045219",
    productName: "Women's Scarves (100 units)",
    date: "2023-05-22",
    status: "pending",
    origin: "Ankara, Turkey",
    destination: "Johannesburg, South Africa",
    runner: "Zeynep Yıldız",
    lastUpdate: "2023-05-22"
  }
];

const getStatusBadge = (status: TrackingStatus) => {
  switch (status) {
    case "pending":
      return <Badge className="bg-gray-500">Pending</Badge>;
    case "processing":
      return <Badge className="bg-yellow-500">Processing</Badge>;
    case "shipped":
      return <Badge className="bg-blue-500">Shipped</Badge>;
    case "in_transit":
      return <Badge className="bg-purple-500">In Transit</Badge>;
    case "delivered":
      return <Badge className="bg-green-600">Delivered</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const statusStep = (status: TrackingStatus): number => {
  switch (status) {
    case "pending": return 0;
    case "processing": return 1;
    case "shipped": return 2;
    case "in_transit": return 3;
    case "delivered": return 4;
    default: return 0;
  }
};

interface TrackingTimelineProps {
  status: TrackingStatus;
}

const TrackingTimeline = ({ status }: TrackingTimelineProps) => {
  const step = statusStep(status);
  
  return (
    <div className="flex items-center w-full max-w-md mx-auto my-8">
      {["pending", "processing", "shipped", "in_transit", "delivered"].map((s, i) => (
        <div key={s} className="flex-1 relative">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${i <= step ? "bg-afrit-blue" : "bg-gray-200"}
            ${i < step ? "text-white" : "text-gray-500"}
          `}>
            {i === 0 && <Package className="h-4 w-4" />}
            {i === 1 && <Clock className="h-4 w-4" />}
            {i === 2 && <Package className="h-4 w-4" />}
            {i === 3 && <Truck className="h-4 w-4" />}
            {i === 4 && <MapPin className="h-4 w-4" />}
          </div>
          {i < 4 && (
            <div className={`h-1 absolute top-4 left-8 right-0 
              ${i < step ? "bg-afrit-blue" : "bg-gray-200"}`} 
            />
          )}
          <div className="text-xs text-center mt-2">
            {s === "pending" && "Order Placed"}
            {s === "processing" && "Processing"}
            {s === "shipped" && "Shipped"}
            {s === "in_transit" && "In Transit"}
            {s === "delivered" && "Delivered"}
          </div>
        </div>
      ))}
    </div>
  );
};

const OrderTracking = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<TrackingOrder | null>(null);

  const handleSearch = () => {
    const found = orders.find(order => 
      order.orderNumber.toLowerCase() === searchQuery.toLowerCase()
    );
    setSelectedOrder(found || null);
  };

  return (
    <div>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-afrit-blue mb-4">Track Your Order</h2>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Enter your order number" 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            className="bg-afrit-blue hover:bg-afrit-blue/90"
            onClick={handleSearch}
          >
            Track
          </Button>
        </div>
        
        {selectedOrder && (
          <div className="mt-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{selectedOrder.productName}</h3>
                  <p className="text-sm text-gray-600">Order #{selectedOrder.orderNumber}</p>
                </div>
                {getStatusBadge(selectedOrder.status)}
              </div>
              
              <TrackingTimeline status={selectedOrder.status} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="text-sm">
                  <div className="text-gray-600 mb-1">From</div>
                  <div className="font-medium">{selectedOrder.origin}</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600 mb-1">To</div>
                  <div className="font-medium">{selectedOrder.destination}</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600 mb-1">Order Date</div>
                  <div className="font-medium">{selectedOrder.date}</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600 mb-1">Last Update</div>
                  <div className="font-medium">{selectedOrder.lastUpdate}</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600 mb-1">Runner</div>
                  <div className="font-medium">{selectedOrder.runner}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <h2 className="text-xl font-bold text-afrit-blue mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order #</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Runner</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.orderNumber}</TableCell>
                <TableCell>{order.productName}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.runner}</TableCell>
                <TableCell>{order.destination}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTracking;
