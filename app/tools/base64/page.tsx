import HeroSection from "@/components/ui/HeroSection";
import Base64Tool from "@/components/tools/base-64/Base64";

export const metadata = {
  title: "Base64 Encoder/Decoder - Toolify",
  description: "A simple tool to encode and decode Base64 strings online.",
};

export default function Page() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-10">
        <HeroSection
            name="Base64 Encoder/Decoder"
            description="A simple tool to encode and decode Base64 strings online."
        />
        {/* Base64 Encoder/Decoder component will go here */}
        <Base64Tool />
    </div>
    );
}