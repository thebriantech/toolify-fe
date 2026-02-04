import ToolGrid from "@/components/home/ToolGrid";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="py-10">
      <HeroSection name="Developer Utilities" description="Open source toolkit helps developers handle common tasks quickly and securely right in the browser."/>
      <ToolGrid />
    </div>
  );
}