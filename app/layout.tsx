import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "./globals.css";
import { SITE } from "@/lib/site";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Premium Printing, Branding & Book Publishing in Enugu`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "printing company Enugu",
    "book printing Nigeria",
    "book publishing Enugu",
    "branding agency Nigeria",
    "graphic design Enugu",
    "commercial printing Nigeria",
    "event branding Enugu",
    "Justprints",
    "PlusFrica",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: SITE.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F6F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers>
          <div className="grain-overlay" aria-hidden="true" />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
