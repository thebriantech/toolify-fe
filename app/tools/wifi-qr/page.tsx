import WifiQRGenerator from "@/components/tools/wifi-qr/WifiQRGenerator"
import HeroSection from "@/components/ui/HeroSection"

export const metadata = {
    title: "Wifi QR Code Generator",
    description: "Generate QR Code to share Wifi network without revealing the password."
}

export default function page() {
    return (
        <div>
            <HeroSection
                name="Wifi QR Code Generator"
                description="Generate QR Code to share Wifi network without revealing the password." />
            <WifiQRGenerator />
        </div>
    )
}