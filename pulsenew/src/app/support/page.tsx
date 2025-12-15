"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { HelpCircle, MessageSquare, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Support() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/20">
          <span className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Support Center
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          {t('support')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          {t('supportDesc') || 'Get help and support for all iPulse products. Find documentation, guides, and contact information.'}
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://ipulse.notion.site/2ca4306c6bc6816aa871d3413fdac5ad?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 font-medium"
          >
            <FileText className="w-5 h-5" />
            View Documentation
          </a>
          <a
            href="mailto:info@ipulse.one"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 font-medium"
          >
            <MessageSquare className="w-5 h-5" />
            Contact Support
          </a>
        </div>
      </section>

      {/* Support Options */}
      <section className="relative max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Documentation */}
          <div className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-500 border border-gray-200 dark:border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete guides, tutorials, and API documentation for all iPulse products.
              </p>
              <a
                href="https://ipulse.notion.site/2ca4306c6bc6816aa871d3413fdac5ad?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                View Documentation →
              </a>
            </div>
          </div>

          {/* Contact Support */}
          <div className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-500 border border-gray-200 dark:border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Need help? Our support team is here to assist you with any questions or issues.
              </p>
              <a
                href="mailto:info@ipulse.one"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
              >
                Email Support →
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-500 border border-gray-200 dark:border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">FAQ</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Find answers to frequently asked questions about our products and services.
              </p>
              <Link
                href="/support#faq"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
              >
                View FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Documentation */}
      <section className="relative max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Documentation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access our comprehensive documentation directly below. Find guides, tutorials, and detailed information about all iPulse products.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://ipulse.notion.site/ebd//2ca4306c6bc6816aa871d3413fdac5ad"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
              className="w-full min-h-[600px]"
              title="iPulse Support Documentation"
            />
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="relative max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}