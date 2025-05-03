
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Package, User, Store, Shield } from "lucide-react";

type UserRole = "buyer" | "runner" | "wholesaler";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>("buyer");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    phoneNumber: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic would go here
    console.log({ ...formData, role: selectedRole });
  };

  // Role-specific icon mapping
  const roleIcons = {
    buyer: <User className="h-5 w-5" />,
    runner: <Package className="h-5 w-5" />,
    wholesaler: <Store className="h-5 w-5" />,
  };

  return (
    <div className="min-h-screen flex justify-center py-12 bg-[#fff5f5]">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2 p-3 rounded-full bg-red-100">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Create Account</h1>
          <p className="text-gray-500">Join the AfriT marketplace to connect with Turkish suppliers</p>
        </div>

        <Tabs 
          value={selectedRole} 
          onValueChange={(value) => setSelectedRole(value as UserRole)}
          className="mb-6"
        >
          <TabsList className="grid grid-cols-3 bg-gray-100">
            <TabsTrigger value="buyer" className="data-[state=active]:bg-white data-[state=active]:text-red-600">
              <User className="mr-2 h-4 w-4" />
              Buyer
            </TabsTrigger>
            <TabsTrigger value="runner" className="data-[state=active]:bg-white data-[state=active]:text-red-600">
              <Package className="mr-2 h-4 w-4" />
              Runner
            </TabsTrigger>
            <TabsTrigger value="wholesaler" className="data-[state=active]:bg-white data-[state=active]:text-red-600">
              <Store className="mr-2 h-4 w-4" />
              Wholesaler
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="flex items-center gap-3 mb-2">
                {roleIcons[selectedRole]}
                <h3 className="font-medium text-gray-800">
                  {selectedRole === "buyer" && "Register as a Buyer"}
                  {selectedRole === "runner" && "Register as a Runner"}
                  {selectedRole === "wholesaler" && "Register as a Wholesaler"}
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                {selectedRole === "buyer" && "Access Turkish products and connect with trusted runners to source quality items for your business."}
                {selectedRole === "runner" && "Help African businesses source products from Turkey, and earn commissions on successful orders."}
                {selectedRole === "wholesaler" && "Showcase your products to African buyers and expand your business internationally."}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {(selectedRole === "runner" || selectedRole === "wholesaler") && (
                <div className="mb-4">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-5"
              >
                Create Account
              </Button>
            </form>
          </div>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/login" className="text-red-600 font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
