'use client';

import React from 'react';

export default function CopyrightStrip() {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 text-xs sm:text-sm text-gray-500">
          
          {/* Copyright */}
          <span>© 2026 Ideal Group Of Companies. All rights reserved.</span>
          
          {/* Separator - Hidden on mobile, shown on desktop */}
          <span className="hidden sm:inline mx-3 text-gray-300">•</span>
          
          {/* Privacy Policy */}
          <a 
            href="/privacy-policy" 
            className="hover:text-gray-700 transition-colors"
          >
            Privacy Policy
          </a>
          
          {/* Separator - Hidden on mobile, shown on desktop */}
          <span className="hidden sm:inline mx-3 text-gray-300">•</span>
          
          {/* Designed By */}
          <span className="flex items-center gap-1">
            Designed by{' '}
            <a 
              href="https://greensmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-700 transition-colors font-medium"
            >
              Greens Media
            </a>
          </span>
          
        </div>
      </div>
    </div>
  );
}
