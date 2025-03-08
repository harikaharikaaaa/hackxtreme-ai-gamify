
import React from 'react';
import { LucideProps } from 'lucide-react';

// Properly defining custom icons to match Lucide's expected format
export const Zap: React.FC<LucideProps> = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Network: React.FC<LucideProps> = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="1" />
    <path d="M12 7a5 5 0 0 1 5 5" />
    <path d="M12 3a9 9 0 0 1 9 9" />
    <circle cx="5" cy="19" r="1" />
    <path d="M5 14a5 5 0 0 1 5 5" />
    <path d="M5 9c4.187 0 7.64 3.25 7.97 7.4" />
    <circle cx="19" cy="19" r="1" />
    <path d="M19 14a5 5 0 0 0-5 5" />
    <path d="M19 9c-4.187 0-7.64 3.25-7.97 7.4" />
  </svg>
);

export const Bug: React.FC<LucideProps> = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 2l1.5 1.5" />
    <path d="M14.5 3.5L16 2" />
    <path d="M19 8l-1.5 1.5" />
    <path d="M20.5 14.5L22 16" />
    <path d="M16 22l-1.5-1.5" />
    <path d="M8 22l1.5-1.5" />
    <path d="M3 16l1.5-1.5" />
    <path d="M4.5 8.5L3 7" />
    <circle cx="12" cy="12" r="7" />
  </svg>
);

export const Robot: React.FC<LucideProps> = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <rect x="8" y="2" width="8" height="9" rx="2" />
    <path d="M12 11v10" />
    <path d="M16 16h.01" />
    <path d="M8 16h.01" />
  </svg>
);
