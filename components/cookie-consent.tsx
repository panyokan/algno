'use client';

import { useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';
import Link from 'next/link';

const COOKIE_NAME = 'cookie_consent';
const COOKIE_DURATION_DAYS = 365;

function getCookie(name: string): boolean {
  return document.cookie.split('; ').some(cookie => cookie.startsWith(`${name}=true`));
}

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

interface CookieConsentProps {
  onAccept?: () => void;
}

export default function CookieConsent({ onAccept }: CookieConsentProps): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      setVisible(true);
    } else {
      onAccept?.();
    }
  }, [onAccept]);

  const handleAccept = (): void => {
    setCookie(COOKIE_NAME, 'true', COOKIE_DURATION_DAYS);
    setVisible(false);
    onAccept?.();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-slate-400 max-w-2xl">
          We use cookies to improve your browsing experience and analyse site traffic. By continuing to use this site, you consent to our use of cookies in accordance with our{' '}
          <Link href="/cookie-policy" className="text-slate-300 underline underline-offset-2 hover:text-white transition-colors">
            Cookie Policy
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
        >
          Accept &amp; Continue
        </button>
      </div>
    </div>
  );
}
