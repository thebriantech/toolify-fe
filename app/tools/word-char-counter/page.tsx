import HeroSection from "@/components/ui/HeroSection";
import WordCharCounter from "@/components/tools/word-char-counter/WordCharCounter";

export const metadata = {
  title: "Word & Character Counter - Toolify",
  description: "An online tool to count words and characters in your text.",
};

export default function Page() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-10">
      <HeroSection
        name="Word & Character Counter"
        description="Easily count the number of words and characters in your text."
      />

      <WordCharCounter />
    </div>
  );
}