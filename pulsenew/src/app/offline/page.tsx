import Image from "next/image";
import Link from "next/link";
import { Wifi, WifiOff, RefreshCw } from "lucide-react";

export default function Offline() {
  return (
    <div className="min-h-screen bg-white dark:bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Offline Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <WifiOff className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">!</span>
            </div>
          </div>
        </div>

        {/* PulseGuard Logo */}
        <div className="mb-6">
          <Image
            src="/assets/pulseguard-logo.svg"
            alt="PulseGuard"
            width={120}
            height={40}
            className="mx-auto"
          />
        </div>

        {/* Offline Message */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Je bent offline
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Het lijkt erop dat je internetverbinding is verbroken. 
          Controleer je verbinding en probeer het opnieuw.
        </p>

        {/* English version */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            You&apos;re offline
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            It looks like your internet connection was interrupted. 
            Please check your connection and try again.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Probeer opnieuw / Try again
          </button>

          <Link
            href="/"
            className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Naar homepagina / Go to homepage
          </Link>
        </div>

        {/* Network Status */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Wifi className="w-4 h-4" />
            <span id="network-status">Controleren van verbinding...</span>
          </div>
        </div>

        {/* Cached Content Notice */}
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
          Sommige pagina&apos;s zijn mogelijk beschikbaar in de cache.<br/>
          Some pages might be available from cache.
        </p>
      </div>

      {/* Network Status Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function updateNetworkStatus() {
            const status = document.getElementById('network-status');
            if (navigator.onLine) {
              status.textContent = 'Verbonden / Connected';
              status.parentElement.className = status.parentElement.className.replace('text-gray-600 dark:text-gray-400', 'text-green-600 dark:text-green-400');
            } else {
              status.textContent = 'Offline / Offline';
              status.parentElement.className = status.parentElement.className.replace('text-green-600 dark:text-green-400', 'text-red-600 dark:text-red-400');
            }
          }
          
          window.addEventListener('online', updateNetworkStatus);
          window.addEventListener('offline', updateNetworkStatus);
          updateNetworkStatus();
        `
      }} />
    </div>
  );
}