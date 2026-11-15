import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedWork from "@/components/home/FeaturedWork";
import WhyJustprints from "@/components/home/WhyJustprints";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import ProcessTeaser from "@/components/home/ProcessTeaser";
import Testimonials from "@/components/home/Testimonials";
import CTABand from "@/components/home/CTABand";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.legalName,
  alternateName: "Justprints",
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/images/hero-books.jpg`,
  email: SITE.email,
  telephone: "+2348104433169",
  priceRange: "₦₦",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 Owerri Road, Asata",
    addressLocality: "Enugu",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "PlusFrica Group",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusiness} />
      <Hero />
      <Marquee />
      <FeaturedWork />
      <WhyJustprints />
      <ServicesSnapshot />
      <ProcessTeaser />
      <Testimonials />
      <CTABand />
    </>
  );
}
