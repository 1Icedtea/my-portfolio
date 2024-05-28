import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
