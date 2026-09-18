import type { ReactNode } from "react";
import "./globals.css";

/**
 * Pass-through root layout. `<html>` / `<body>` live in `[locale]/layout.tsx`
 * so `lang` can follow the active locale without a cookie or client flash.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
