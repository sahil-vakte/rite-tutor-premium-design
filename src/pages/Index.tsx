import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { 
  HeroSection, 
  OpeningSection,
  WhyBloomingtonSection,
  JuniorCTOMethodologySection,
  NationwideSection,
  TechStackSection,
  RealResultsSection,
  StrategyCallSection,
  CTASection 
} from '@/components/sections/HomeSections';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Rite Tutor",
  "description": "Premium one-to-one online coding education for kids ages 6-15",
  "url": "https://www.ritetutor.com",
  "logo": "https://www.ritetutor.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bloomington",
    "addressRegion": "IN",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Bloomington, Indiana" },
    { "@type": "City", "name": "Bedford, Indiana" },
    { "@type": "City", "name": "Ellettsville, Indiana" },
    { "@type": "City", "name": "Nashville, Indiana" },
    { "@type": "City", "name": "Martinsville, Indiana" },
    { "@type": "Country", "name": "United States" }
  ],
  "serviceType": "Online Coding Education",
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student",
    "audienceType": "Children ages 6-15"
  }
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Online Coding Classes for Kids | Bloomington, IN & Nationwide | Rite Tutor</title>
        <meta name="description" content="Premium one-to-one online coding tutoring for kids ages 6-15. We don't just teach syntax—we build Junior CTOs with deep logical thinking. Serving Bloomington, Bedford, Ellettsville & students nationwide. Book your free strategy call today." />
        <meta name="keywords" content="online coding classes for kids, coding classes Bloomington IN, one-to-one coding tutor, STEM education for kids, programming tutoring for children" />
        <link rel="canonical" href="https://www.ritetutor.com/" />
        
        <meta property="og:title" content="Online Coding Classes for Kids | Bloomington, IN & Nationwide | Rite Tutor" />
        <meta property="og:description" content="Premium one-to-one online coding tutoring for kids ages 6-15. We don't just teach syntax—we build Junior CTOs with deep logical thinking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ritetutor.com/" />
        
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      </Helmet>
      
      <Layout>
        <HeroSection />
        <OpeningSection />
        <WhyBloomingtonSection />
        <JuniorCTOMethodologySection />
        <NationwideSection />
        <TechStackSection />
        <RealResultsSection />
        <StrategyCallSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
