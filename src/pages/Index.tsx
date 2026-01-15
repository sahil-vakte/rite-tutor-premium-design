import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { 
  HeroSection, 
  ProblemSection, 
  DifferenceSection, 
  OutcomesSection, 
  TrustSection, 
  CTASection 
} from '@/components/sections/HomeSections';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Rite Tutor",
  "url": "https://www.ritetutor.com",
  "description": "One-to-one online coding and logical thinking tutoring for children aged 6-15.",
  "areaServed": [
    { "@type": "City", "name": "Bloomington", "addressRegion": "IN" },
    { "@type": "City", "name": "Ellettsville", "addressRegion": "IN" },
    { "@type": "City", "name": "Bedford", "addressRegion": "IN" },
    { "@type": "City", "name": "Martinsville", "addressRegion": "IN" }
  ],
  "knowsAbout": ["Coding for Kids", "Computer Science", "Logical Thinking", "STEM Education"]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Online Coding Classes for Kids Bloomington, IN | 1-on-1 Logic & STEM</title>
        <meta name="description" content="Rite Tutor offers premium one-to-one online coding tutoring for kids in Bloomington, Ellettsville, and Bedford. We build logical thinkers and Junior CTOs." />
        <meta name="keywords" content="coding classes for kids Bloomington IN, online coding tutor, one-to-one tutoring" />
        <link rel="canonical" href="https://www.ritetutor.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Online Coding Classes for Kids Bloomington, IN | 1-on-1 Logic & STEM" />
        <meta property="og:description" content="Rite Tutor offers premium one-to-one online coding tutoring for kids in Bloomington, Ellettsville, and Bedford. We build logical thinkers and Junior CTOs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ritetutor.com/" />
        
        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      </Helmet>
      
      <Layout>
        <HeroSection />
        <ProblemSection />
        <DifferenceSection />
        <OutcomesSection />
        <TrustSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
