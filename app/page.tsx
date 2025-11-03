import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import NavigationBar from "@/components/layouts/NavigationBar";


export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <Footer />
    </main>
  )
}
