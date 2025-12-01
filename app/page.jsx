import Hero from "@/components/sections/Hero";
import QuickServices from "@/components/sections/QuickServices";
import Advantages from "@/components/sections/Advantages";
import Locations from "@/components/sections/Locations";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickServices />
      <Advantages />
      <Locations />
      <ContactForm />
    </main>
  );
}

// export default function Home() {
//   return (
//     <>
//       <Hero />
//     </>
//   );
// }
