import Hero from "@/components/sections/Hero";
import QuickServices from "@/components/sections/QuickServices";
import Advantages from "@/components/sections/Advantages";
import Services from "@/components/sections/Services";
import Locations from "@/components/sections/Locations";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickServices />
      <Advantages />
      <Services />
      <Locations />
      <ContactForm />
    </main>
  );
}
