'use client';

import Image from "next/image";
import { RefreshCw, AlertTriangle, Mail } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white dark:bg-background flex items-center justify-center px-4">
          <div className="max-w-lg w-full text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse"></div>
                </div>
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
              Er ging iets mis
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We hebben een onverwachte fout gedetecteerd. Ons team is automatisch 
              geïnformeerd en werkt aan een oplossing.
            </p>

            {/* Error Message - English */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Something went wrong
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We&apos;ve detected an unexpected error. Our team has been automatically 
                notified and is working on a solution.
              </p>
            </div>

            {/* Error Details */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Error Details (Development Mode)
                </h3>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-auto">
                  {error.message}
                </pre>
                {error.digest && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() => reset()}
                className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Probeer opnieuw / Try again
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Terug naar home / Back to home
              </button>
            </div>

            {/* Contact Support */}
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                  Hulp nodig? / Need help?
                </h3>
              </div>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                Als het probleem aanhoudt, neem dan contact met ons op.<br/>
                If the issue persists, please contact our support team.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:support@ipulse.one"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  support@ipulse.one
                </a>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Vermeld error ID: {error.digest || 'Unknown'} | Tijd: {new Date().toISOString()}
                </p>
              </div>
            </div>

            {/* Status Page Link */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
              Controleer onze{' '}
              <a 
                href="https://status.pulseguard.pro" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                status pagina
              </a>
              {' '}voor systeeminformatie / Check our status page for system information
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}