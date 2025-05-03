
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, User, Menu, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-afrit-blue to-afrit-turquoise rounded-full p-1">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-afrit-blue">AfriT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-sm font-medium hover:text-afrit-orange transition-colors">
              Products
            </Link>
            <Link to="/runners" className="text-sm font-medium hover:text-afrit-orange transition-colors">
              Runners
            </Link>
            <Link to="/wholesalers" className="text-sm font-medium hover:text-afrit-orange transition-colors">
              Wholesalers
            </Link>
            <Link to="/track-orders" className="text-sm font-medium hover:text-afrit-orange transition-colors">
              Track Orders
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 rounded-md text-sm bg-muted focus:outline-none focus:ring-1 focus:ring-primary w-40 lg:w-60"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">EN</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Türkçe</DropdownMenuItem>
                <DropdownMenuItem>Swahili</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/orders">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link to="/login">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
            
            <Button className="bg-afrit-orange hover:bg-afrit-orange/90" size="sm" asChild>
              <Link to="/register">
                Register
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/products" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/runners" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Runners
              </Link>
              <Link 
                to="/wholesalers" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wholesalers
              </Link>
              <Link 
                to="/track-orders" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Track Orders
              </Link>
              
              <div className="pt-2 px-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="pl-9 pr-4 py-2 w-full rounded-md text-sm bg-muted focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="pt-2 flex flex-col space-y-2 px-4">
                <Button variant="outline" className="justify-center gap-2 w-full" asChild>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </Button>
                <Button className="bg-afrit-orange hover:bg-afrit-orange/90 w-full" asChild>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
