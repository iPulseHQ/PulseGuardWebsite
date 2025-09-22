"use client";
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useTranslation } from '@/hooks/useTranslation';
import { useDomainDetection } from '@/hooks/useDomainDetection';

export default function DomainRedirectPopup() {
  const { t } = useTranslation();
  const { shouldShowPopup, markPopupAsSeen, redirectToNewSite } = useDomainDetection();

  if (!shouldShowPopup) {
    return null;
  }

  return (
    <Dialog open={shouldShowPopup} onOpenChange={() => markPopupAsSeen()}>
      <DialogContent 
        className="sm:max-w-[425px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
        showCloseButton={true}
      >
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <ExternalLink className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {t('domainRedirectTitle')}
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-2">
            {t('domainRedirectMessage')}
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={markPopupAsSeen}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            {t('domainRedirectCancel')}
          </button>
          <button
            onClick={redirectToNewSite}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2 justify-center"
          >
            {t('domainRedirectButton')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}