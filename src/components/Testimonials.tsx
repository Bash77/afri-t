
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  country: string;
  image: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adeola Johnson",
    role: "Fashion Retailer",
    country: "Nigeria",
    image: "https://source.unsplash.com/random/300x300?face=5",
    quote: "AfriT transformed my business by connecting me with reliable Turkish textile suppliers. The platform simplified everything from product selection to shipping.",
    rating: 5
  },
  {
    id: 2,
    name: "Samuel Osei",
    role: "Electronics Importer",
    country: "Ghana",
    image: "https://source.unsplash.com/random/300x300?face=6",
    quote: "Finding trusted runners in Turkey was always a challenge until I discovered AfriT. Now my supply chain is more efficient and profitable than ever before.",
    rating: 5
  },
  {
    id: 3,
    name: "Aisha Mohamed",
    role: "Home Goods Distributor",
    country: "Kenya",
    image: "https://source.unsplash.com/random/300x300?face=7",
    quote: "The tracking system gives me peace of mind knowing exactly where my cargo is at all times. My customers appreciate the transparency and reliability.",
    rating: 4
  },
  {
    id: 4,
    name: "Emmanuel Nkosi",
    role: "Retail Chain Owner",
    country: "South Africa",
    image: "https://source.unsplash.com/random/300x300?face=8",
    quote: "AfriT's platform eliminated the language barriers and helped me establish direct relationships with manufacturers in Istanbul. Game changer!",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const testimonialsPerPage = 2;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const nextTestimonials = () => {
    setActivePage((prev) => (prev + 1) % pageCount);
  };
  
  const prevTestimonials = () => {
    setActivePage((prev) => (prev - 1 + pageCount) % pageCount);
  };
  
  const displayedTestimonials = testimonials.slice(
    activePage * testimonialsPerPage, 
    (activePage + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-afrit-blue">Success Stories</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Hear from entrepreneurs who've transformed their businesses with AfriT
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.country}</p>
                    </div>
                  </div>
                  <div className="bg-afrit-blue/10 rounded-full p-2">
                    <Quote className="h-5 w-5 text-afrit-blue" />
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonials}
              disabled={activePage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {[...Array(pageCount)].map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full ${i === activePage ? 'w-6 bg-afrit-blue' : 'w-2 bg-afrit-blue/30'}`}
                  onClick={() => setActivePage(i)}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonials}
              disabled={activePage === pageCount - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
