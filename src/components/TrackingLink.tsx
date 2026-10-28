"use client";

import { trackPhoneClick, trackSmsClick } from "@/lib/gtag";

interface Props {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function SmsLink({ href, className, style, children }: Props) {
  return (
    <a href={href} className={className} style={style} onClick={trackSmsClick}>
      {children}
    </a>
  );
}

export function PhoneLink({ href, className, style, children }: Props) {
  return (
    <a href={href} className={className} style={style} onClick={trackPhoneClick}>
      {children}
    </a>
  );
}
