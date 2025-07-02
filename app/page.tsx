import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SubAbout } from "@/components/Sub-about";
import serviceData from "@/data/services.json"

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-950">

      <Hero />
      <About />
      <SubAbout />
      <Services items={serviceData} />

    </main>
  )
}