interface HeroSectionProps {
    name: string;
    description: string;
}

export default function HeroSection({ name, description }: HeroSectionProps) {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4">{name}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{description}</p>
        </div>
    )
}