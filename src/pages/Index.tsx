import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { 
  HeroSection, 
  OpeningSection,
  WhyFamiliesChooseSection,
  JuniorCTOMethodologySection,
  GlobalReachSection,
  TechStackSection,
  RealResultsSection,
  TestimonialsSection,
  InvestmentSection,
  StrategyCallSection,
  CTASection 
} from '@/components/sections/HomeSections';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Rite Tutor",
  "alternateName": "RiteTutor",
  "description": "Premium one-to-one online coding education for students ages 6-15. Building logical thinkers through personalized mentorship with global reach.",
  "url": "https://www.ritetutor.com",
  "logo": "https://www.ritetutor.com/images/logo.png",
  "image": "https://www.ritetutor.com/images/hero-image.jpg",
  "email": "hello@ritetutor.com",
  "telephone": "+1-929-421-8055",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "United States"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Place", "name": "Global" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Online Coding Tutoring",
  "provider": { "@type": "EducationalOrganization", "name": "Rite Tutor" },
  "areaServed": { "@type": "Place", "name": "Worldwide" },
  "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://www.ritetutor.com", "serviceType": "Online Service" },
  "audience": { "@type": "EducationalAudience", "audienceType": "Students ages 6-15" }
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Online Coding Classes for Kids | One-to-One Mentorship | Rite Tutor</title>
        <meta name="description" content="Premium one-to-one online coding mentorship for kids ages 6-15. We build Junior CTOs with deep logical thinking—not syntax memorizers. Serving families across the US & worldwide. Book your free strategy call today." />
        <meta name="keywords" content="online coding classes for kids, one-to-one coding tutor, STEM education for kids, programming tutoring for children, coding mentorship" />
        <link rel="canonical" href="https://www.ritetutor.com/" />
        
        <meta property="og:title" content="Online Coding Classes for Kids | One-to-One Mentorship | Rite Tutor" />
        <meta property="og:description" content="Premium one-to-one online coding mentorship for kids ages 6-15. We build Junior CTOs with deep logical thinking—not syntax memorizers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ritetutor.com/" />
        
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <Layout>
        <HeroSection />
        <OpeningSection />
        <WhyFamiliesChooseSection />
        <JuniorCTOMethodologySection />
        <GlobalReachSection />
        <TechStackSection />
        <RealResultsSection />
        <TestimonialsSection />
        <InvestmentSection />
        <StrategyCallSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
