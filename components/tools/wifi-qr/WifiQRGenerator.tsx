"use client"

import { Check, Copy, Download, Wifi } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react"

type SecurityType = 'WPA' | 'WEP' | 'nopass'

export default function WifiQRGenerator() {
    const [ssid, setSsid] = useState('');
    const [password, setPassword] = useState('');
    const [securityType, setSecurity] = useState<SecurityType>('WPA');
    const [hidden, setHidden] = useState(false);
    const [copied, setCopied] = useState(false);

    // Generate Wifi QR code string format: WIFI:T:WPA;S:MySSID;P:MyPassword;H:false;;
    const generateWifiString = (): string => {
        if (!ssid) return '';

        // Escape special characters trong SSID và Password 
        const escapedSsid = ssid.replace(/[\\;:,]/g, '\\$&');
        const escapedPassword = password.replace(/[\\;:,]/g, '\\$&');

        return `WIFI:T:${securityType};S:${escapedSsid};P:${escapedPassword};H:${hidden};;`;
    }

    const wifiString = generateWifiString();

    const handleDownload = () => {
        const canvas = document.getElementById('wifi-qr-code') as HTMLCanvasElement;
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `Wifi-${ssid || 'qrcode'}.png`;
            link.href = url;
            link.click();
        }
    };

    const handleCopyString = async () => {
        if (wifiString) {
            await navigator.clipboard.writeText(wifiString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {/* LEFT PART - INPUT FORM */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <Wifi className="w-5 h-5" />
                            Wifi Information
                        </h2>

                        {/* SSID Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Network Name (SSID) *
                            </label>
                            <input
                                type="text"
                                value={ssid}
                                onChange={(e) => setSsid(e.target.value)}
                                placeholder="Enter Wifi network name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        {/* Security Type Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Security Type
                            </label>
                            <select
                                value={securityType}
                                onChange={(e) => setSecurity(e.target.value as SecurityType)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            >
                                <option value="WPA">WPA/WPA2/WPA3</option>
                                <option value="WEP">WEP</option>
                                <option value="nopass">No Password</option>
                            </select>
                        </div>

                        {/* Password Input - Hiện chỉ khi Security Type != No Password */}
                        {securityType !== 'nopass' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password *
                                </label>
                                <input
                                    type="text"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter WiFi password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div>
                        )}

                        {/* Hidden Network Checkbox */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="hidden"
                                checked={hidden}
                                onChange={(e) => setHidden(e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="hidden" className="text-sm font-medium text-gray-700">
                                Hidden Network
                            </label>
                        </div>

                        {/* Wifi String Display  */}
                        {wifiString && (
                            <div className="pt-4 border-t">
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Wifi String
                                    </label>
                                    <button
                                        onClick={handleCopyString}
                                        className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                                    >
                                        {copied ?
                                            (<>
                                                <Check className="w-4 h-4" />
                                                Copied!
                                            </>)
                                            :
                                            (<>
                                                <Copy className="w-4 h-4" />
                                                Copy
                                            </>
                                            )
                                        }
                                    </button>
                                </div>
                                <code className="block w-full px-3 py-2 text-xs bg-gray-50 rounded border break-all">
                                    {wifiString}
                                </code>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE - QR CODE PREVIEW */}
                <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        <h2 className="text-xl font-semibold mb-4">QR Code Preview</h2>
                        {wifiString ? (
                            <div className="space-y-4">
                                <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
                                    <QRCodeCanvas
                                        id="wifi-qr-code"
                                        value={wifiString}
                                        size={256}
                                        level="M"
                                        marginSize={4}
                                    />
                                </div>

                                {/* Button Download  */}
                                <button
                                    onClick={handleDownload}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                >
                                    <Download className="w-5 h-5" />
                                    Download QR Code
                                </button>

                                {/* Usage Instructions */}
                                <div className="text-sm text-gray-600 space-y-2 bg-blue-50 p-4 rounded-lg">
                                    <p className="font-medium text-blue-900">How to use:</p>
                                    <ol className="list-decimal list-inside space-y-1 text-blue-800">
                                        <li>Download or screenshot this QR code</li>
                                        <li>Share it with guests</li>
                                        <li>They scan it with their camera app</li>
                                        <li>Auto-connect to WiFi!</li>
                                    </ol>
                                </div>
                            </div>
                        )
                            :
                            (
                                // Empty State
                                <div className="flex flex-col items-center justify-center py-21 text-gray-400">
                                    <Wifi className="w-16 h-16 mb-4" />
                                    <p className="text-center">
                                        Enter WiFi information to generate QR code
                                    </p>
                                </div>
                            )}
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-amber-900 mb-2">Important Notes:</h3>
                <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
                    <li>Make sure your network name (SSID) and password are correct</li>
                    <li>Most modern smartphones (iOS 11+, Android 10+) support WiFi QR codes</li>
                    <li>All data is processed locally in your browser - nothing is sent to any server</li>
                    <li>For best results, use WPA/WPA2/WPA3 security</li>
                </ul>
            </div>
        </div>
    )
}
