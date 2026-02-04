import TextDiffContainer from "@/components/tools/diff-checker/TextDiffContainer";
import HeroSection from "@/components/ui/HeroSection";

export const metadata = {
    title: "Text Diff Checker - Toolify",
    description: "A free tool for comparing the differences between two texts."
};

export default function page() {
    return (
        <div className="container mx-auto py-10 px-4">
            <HeroSection name="Text Diff Checker" description="Compare the differences between the two texts." />
            <TextDiffContainer />
        </div>
    )
}