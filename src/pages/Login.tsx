
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Lock, Shield } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState<"user" | "admin">("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log({ email, password, userType, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f5]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="mb-2 p-3 rounded-full bg-red-100">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-6">Please sign in to continue</p>
        </div>

        <div className="flex bg-gray-100 rounded-lg mb-6 p-1">
          <button
            onClick={() => setUserType("user")}
            className={`flex-1 py-2.5 flex justify-center items-center gap-2 rounded-md transition ${
              userType === "user" 
                ? "bg-white text-red-600 font-medium shadow-sm" 
                : "text-gray-500"
            }`}
          >
            <User className="h-4 w-4" />
            User
          </button>
          <button
            onClick={() => setUserType("admin")}
            className={`flex-1 py-2.5 flex justify-center items-center gap-2 rounded-md transition ${
              userType === "admin" 
                ? "bg-white text-red-600 font-medium shadow-sm" 
                : "text-gray-500"
            }`}
          >
            <Shield className="h-4 w-4" />
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 py-5 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 py-5 border-gray-200"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="rememberMe" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white py-5"
          >
            Sign In
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/register" className="text-red-600 font-medium hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
