'use client';

import { useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';
import { CheckCircle2 } from 'lucide-react';

const COOKIE_NAME = 'cookie_consent';
const COOKIE_DURATION_DAYS = 10;

function getCookie(name: string): boolean {
  return document.cookie.split('; ').some(cookie => cookie.startsWith(`${name}=true`));
}

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
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
      if (onAccept) onAccept();
    }
  }, [onAccept]);

  const handleAccept = (): void => {
    setCookie(COOKIE_NAME, 'true', COOKIE_DURATION_DAYS);
    setVisible(false);
    if (onAccept) onAccept();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="pointer-events-auto bg-gradient-to-r from-purple-800/95 to-cyan-800/95 border border-cyan-500/40 text-white px-6 py-3 rounded-2xl shadow-2xl flex flex-col items-center gap-4 max-w-2xl w-full mx-4 backdrop-blur-md">
        <div className="flex items-center gap-3 w-full">
          <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={32} />
          <span className="flex-1 text-base md:text-lg">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.{" "}
            {/* <a
              href="/privacy"
              className="underline text-cyan-300 hover:text-cyan-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a> */}
          </span>
        </div>
        <button
          onClick={handleAccept}
          className="w-50 mt-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all duration-150"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
