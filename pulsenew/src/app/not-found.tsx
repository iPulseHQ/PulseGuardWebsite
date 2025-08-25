import Image from "next/image";
import Link from "next/link";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-4">
            <span className="text-8xl font-bold text-gray-300 dark:text-gray-700">4</span>
            <div className="relative">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-orange-500" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-orange-500 animate-pulse"></div>
            </div>
            <span className="text-8xl font-bold text-gray-300 dark:text-gray-700">4</span>
          </div>
        </div>

        {/* PulseGuard Logo */}
        <div className="mb-6">
          <Image
            src="/assets/pulseguard-logo.svg"
            alt="PulseGuard"
            width={140}
            height={46}
            className="mx-auto"
          />
        </div>

        {/* Error Message - Dutch */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Pagina niet gevonden
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          De pagina die je zoekt bestaat niet of is verplaatst. 
          Misschien is er een typfout in de URL?
        </p>

        {/* Error Message - English */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            There might be a typo in the URL.
          </p>
        </div>

        {/* Suggested Actions */}
        <div className="space-y-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Home className="w-4 h-4" />
            Terug naar home / Back to home
          </Link>

          <div className="flex gap-3 justify-center">
            <Link
              href="/features"
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Popular Services */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Populaire services / Popular services
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <Link
              href="/guard"
              className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/pulseguard-logo.svg"
                    alt="PulseGuard"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">PulseGuard</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Website monitoring</div>
                </div>
              </div>
            </Link>
            
            <Link
              href="/files"
              className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/files-icon.svg"
                    alt="PulseFiles"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">PulseFiles</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">File monitoring</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Error ID for support */}
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
          Error ID: 404-{Date.now().toString(36)} | Hulp nodig? help@pulseguard.nl
        </p>
      </div>
    </div>
  );
}