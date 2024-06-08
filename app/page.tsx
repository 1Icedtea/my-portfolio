import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
