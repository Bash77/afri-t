
import HomeLayout from "@/components/HomeLayout";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedRunners from "@/components/FeaturedRunners";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <HomeLayout>
      <Hero />
      <Categories />
      <FeaturedRunners />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </HomeLayout>
  );
};

export default Index;
