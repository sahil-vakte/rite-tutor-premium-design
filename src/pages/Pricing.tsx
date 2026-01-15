import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Users, Briefcase } from 'lucide-react';

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "One-to-One Online Coding Membership",
  "description": "Monthly private coding tuition for children in Bloomington and Indiana.",
  "brand": { "@type": "Brand", "name": "Rite Tutor" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "areaServed": { "@type": "City", "name": "Bloomington", "addressRegion": "IN" }
  }
};

const tiers = [
  {
    icon: Users,
    name: "The Explorer",
    sessions: "1 Session/Week",
    description: "Best for steady progress.",
    features: ["Weekly 1-on-1 session", "Progress tracking dashboard", "Monthly milestone call", "Email support"]
  },
  {
    icon: Clock,
    name: "The Builder",
    sessions: "2 Sessions/Week",
    description: "Best for accelerated learning.",
    popular: true,
    features: ["Twice-weekly 1-on-1 sessions", "Progress tracking dashboard", "Bi-weekly milestone calls", "Priority email support", "Project portfolio management"]
  },
  {
    icon: Briefcase,
    name: "The Junior CTO",
    sessions: "3 Sessions/Week",
    description: "Best for deep dives & heavy projects.",
    features: ["Three weekly 1-on-1 sessions", "Progress tracking dashboard", "Weekly check-ins", "Priority support", "Full portfolio management", "GitHub repository setup", "Certification upon completion"]
  }
];

const included = [
  "The Matchmaking",
  "The Preparation (Mentor reviews code beforehand)",
  "The Portfolio Management",
  "Monthly Progress Reports"
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Coding Tutoring Prices Bloomington | Online Membership Cost</title>
        <meta name="description" content="Transparent pricing for 1-on-1 online coding classes in Bloomington, IN. Save on commute times with our premium home-based learning membership." />
        <meta name="keywords" content="online coding classes cost, tutoring rates Bloomington, one-to-one tutoring membership" />
        <link rel="canonical" href="https://www.ritetutor.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(pricingSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Top-Tier Education,{' '}
                <span className="text-primary">Delivered to Your Bloomington Home</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Simple, Transparent Pricing for Premium Mentorship
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground mb-6">
                Rite Tutor operates on a monthly membership model. Logic isn't learned in a week; it is built through consistent mentorship.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-semibold mb-2">No Commute Costs</h3>
                  <p className="text-sm text-muted-foreground">Save time and gas money by avoiding the drive to physical centers in Bloomington or Indianapolis.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-semibold mb-2">Competitive Rates</h3>
                  <p className="text-sm text-muted-foreground">Premium one-to-one mentorship that rivals any local tutoring center.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-semibold mb-2">Flexible</h3>
                  <p className="text-sm text-muted-foreground">Pause or cancel with 30 days' notice.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Membership Tiers
              </h2>
              <p className="text-muted-foreground">Pricing confirmed during strategy call.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`relative bg-background rounded-2xl overflow-hidden shadow-lg border-2 ${
                    tier.popular ? 'border-primary' : 'border-border'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${tier.popular ? 'pt-14' : ''}`}>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <tier.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                    <p className="text-primary font-semibold mb-2">{tier.sessions}</p>
                    <p className="text-muted-foreground mb-6">{tier.description}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={tier.popular ? "hero" : "hero-outline"} 
                      className="w-full" 
                      asChild
                    >
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                What Your Investment Covers
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why No Buy Button */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why We Don't Have a "Buy Now" Button
              </h2>
              <p className="text-lg text-background/80 mb-8">
                We are highly selective. We need to ensure that our online tutoring style matches your child's learning needs and fits your family's schedule in the Eastern Time Zone.
              </p>
              <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact" className="group">
                  Book Your Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
