
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-afrit-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-afrit-turquoise to-white/30 rounded-full p-1">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">AfriT</span>
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              Connecting African entrepreneurs with Turkish suppliers and logistics solutions for seamless cross-continental trade.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-afrit-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-afrit-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-afrit-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/products" className="hover:text-afrit-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/runners" className="hover:text-afrit-orange transition-colors">
                  Find Runners
                </Link>
              </li>
              <li>
                <Link to="/wholesalers" className="hover:text-afrit-orange transition-colors">
                  Wholesalers
                </Link>
              </li>
              <li>
                <Link to="/track-orders" className="hover:text-afrit-orange transition-colors">
                  Track Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/shipping" className="hover:text-afrit-orange transition-colors">
                  Shipping Solutions
                </Link>
              </li>
              <li>
                <Link to="/customs" className="hover:text-afrit-orange transition-colors">
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="hover:text-afrit-orange transition-colors">
                  Advertise with Us
                </Link>
              </li>
              <li>
                <Link to="/premium" className="hover:text-afrit-orange transition-colors">
                  Premium Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-afrit-orange shrink-0" />
                <span>Istanbul Trade Center, Merter, Istanbul, Turkey</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-afrit-orange shrink-0" />
                <span>+90 (212) 555-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-afrit-orange shrink-0" />
                <span>contact@afrit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 AfriT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
