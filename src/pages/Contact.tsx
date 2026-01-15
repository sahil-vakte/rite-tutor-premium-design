import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Calendar } from 'lucide-react';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "Rite Tutor",
    "areaServed": ["Bloomington", "Ellettsville", "Bedford", "Martinsville", "Nashville"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "IN"
    }
  }
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Rite Tutor | Online Coding Classes Bloomington, IN</title>
        <meta name="description" content="Looking for a coding tutor in Bloomington? Book a free online consultation. We serve families in Monroe, Lawrence, and Morgan counties remotely." />
        <link rel="canonical" href="https://www.ritetutor.com/contact" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>
      
      <Layout>
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let's Start a Conversation About Your Child's <span className="text-primary">Future</span>
              </h1>
              <p className="text-xl text-muted-foreground">No sales scripts. No pressure. Just a genuine discussion.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-display font-bold mb-6">What to Expect</h2>
                <p className="text-muted-foreground mb-8">A Personalised Online Consultation. We will discuss your child's needs and how our online mentorship fits into your life.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3"><div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div><p>We Listen: To your child's interests.</p></div>
                  <div className="flex items-start gap-3"><div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div><p>We Assess: Where they fit on the pathway.</p></div>
                  <div className="flex items-start gap-3"><div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div><p>We Guide: Mapping out their first 3 months.</p></div>
                </div>
                <div className="space-y-4">
                  <a href="mailto:hello@ritetutor.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" /> hello@ritetutor.com
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" /> Serving Bloomington, IN & Indiana
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-card p-8 rounded-2xl shadow-premium border border-border">
                  <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="h-12" />
                    <Input type="email" placeholder="Your Email" className="h-12" />
                    <Input placeholder="Child's Age" className="h-12" />
                    <Input placeholder="Are you located in the Bloomington area?" className="h-12" />
                    <Textarea placeholder="Your Message" rows={4} />
                    <Button variant="hero" size="lg" className="w-full">Book Your Free Online Strategy Call</Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
