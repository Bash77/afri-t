
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HomeLayout from "@/components/HomeLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <HomeLayout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-md mx-auto text-center">
          <div className="text-afrit-orange font-bold text-7xl mb-6">404</div>
          <h1 className="text-3xl font-bold text-afrit-blue mb-3">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button size="lg" className="bg-afrit-blue hover:bg-afrit-blue/90" asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </HomeLayout>
  );
};

export default NotFound;
