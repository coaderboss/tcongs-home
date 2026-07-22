import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tcongs Infotech | Smart Digital Solutions",
  description: "We Help Brands Grow With Web, Apps & Marketing Solutions Across The Globe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-dark text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}