import Footer from "../components/Footer";
import Index from "../components/Index";
import NavBar from "../components/NavBar";


export default function Home() {
  return (
    <div className="background">
      <NavBar />
      <Index />
      <Footer />
    </div>
  );
}
