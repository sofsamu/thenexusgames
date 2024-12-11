import GitButton from "@/components/buttons/GitButton";
import Footer from "@/components/Footer";
import Index from "@/components/Index";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="background">
      <NavBar />
      <Index />
      <Footer />
    </div>
  );
}
