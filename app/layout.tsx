import type { Metadata } from "next";
import "./globals.css";

import { ReactNode } from "react";



export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a book borrowing university library management solution.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="antialiased font-ibm-plex-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;