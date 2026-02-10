import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Users, Briefcase, TrendingUp, GraduationCap, DollarSign } from 'lucide-react';

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "One-to-One Online Coding Membership",
  "description": "Premium one-to-one mentorship delivered to your home in Bloomington and beyond.",
  "brand": { "@type": "Brand", "name": "Rite Tutor" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "areaServed": [
      { "@type": "City", "name": "Bloomington", "addressRegion": "IN" },
      { "@type": "Country", "name": "United States" }
    ]
  }
};

const tiers = [
  {
    icon: Users,
    name: "The Explorer",
    sessions: "1 Session/Week",
    description: "Best for students beginning their coding journey or balancing multiple extracurricular commitments. Provides steady, consistent progress building logical foundations and introductory programming skills. Ideal for younger students focusing on long-term development.",
    features: ["Weekly 1-on-1 session", "Expert mentor matching", "Progress tracking dashboard", "Monthly strategy call", "Platform access (Brilliant.org, IXL, GitHub)", "WhatsApp session updates"]
  },
  {
    icon: Clock,
    name: "The Builder",
    sessions: "2 Sessions/Week",
    description: "Our most popular tier, delivering optimal balance between comprehensive learning and manageable time commitment. Students progress through curriculum substantially faster while maintaining deep mastery. Recommended for families seeking noticeable skill development within academic semesters.",
    popular: true,
    features: ["Twice-weekly 1-on-1 sessions", "Expert mentor matching", "Progress tracking dashboard", "Bi-weekly strategy calls", "Full platform access", "WhatsApp session updates", "Portfolio management", "Priority scheduling"]
  },
  {
    icon: Briefcase,
    name: "The Junior CTO",
    sessions: "3 Sessions/Week",
    description: "Designed for serious students pursuing advanced credentials, competitive programming, or aggressive timeline objectives. Enables deep dives into complex full-stack development, Harvard CS50 completion, or professional certification acquisition.",
    features: ["Three weekly 1-on-1 sessions", "Expert mentor matching", "Progress tracking dashboard", "Weekly check-ins", "Full platform access", "WhatsApp session updates", "Full portfolio management", "GitHub repository setup", "Priority scheduling", "Certification pathways"]
  }
];

const included = [
  "Expert Mentor Matching: Careful pairing based on learning style, personality compatibility, and educational objectives",
  "Session Preparation: Mentors review student code and progress before every live session",
  "Integrated Platform Access: Full use of Brilliant.org, IXL Analytics, GitHub, and professional development tools",
  "Portfolio Management: Ongoing guidance building professional GitHub profiles with documented project history",
  "Progress Transparency: Detailed WhatsApp updates after every session plus parent dashboard access",
  "Monthly Strategy Calls: Regular check-ins reviewing progress, adjusting pathways, and addressing questions",
  "Flexible Scheduling: Sessions scheduled around your family life"
];

const traditionalCosts = [
  { label: "Session cost", traditional: "$30-50/hour", rite: "Customized based on objectives" },
  { label: "Commute time", traditional: "30-60 min round trip", rite: "Zero (delivered to your living room)" },
  { label: "Fuel costs", traditional: "$5-10 per session", rite: "Zero" },
  { label: "Individual attention", traditional: "1/15th of teacher time", rite: "100% of mentor focus" },
  { label: "Curriculum flexibility", traditional: "Zero (age-based grouping)", rite: "Complete (skill-based progression)" },
  { label: "Real outcomes", traditional: "Surface-level syntax memorization", rite: "Deep mastery, professional portfolios" }
];

const roi = [
  { icon: GraduationCap, title: "Immediate Academic Benefits", items: ["Improved math performance through algorithmic thinking", "Enhanced reading comprehension via technical documentation", "Stronger problem-solving across all subjects"] },
  { icon: TrendingUp, title: "College Admissions Advantages", items: ["Differentiated applications with professional GitHub portfolios", "University-verified credentials (Harvard CS50, IBM certificates)", "Compelling essay material demonstrating genuine impact"] },
  { icon: DollarSign, title: "Financial Returns", items: ["College credits earned early save $15,000-30,000 in future tuition", "Scholarship opportunities multiply with differentiated portfolios", "Early internships pay $20-50/hour vs. minimum wage jobs"] }
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Investment in Excellence | Transparent, Value-Driven Pricing | Rite Tutor</title>
        <meta name="description" content="Premium one-to-one mentorship delivered to your home. Understand the true value of investing in your child's coding education with Rite Tutor." />
        <meta name="keywords" content="coding tutoring pricing, online coding classes cost, one-to-one tutoring investment" />
        <link rel="canonical" href="https://www.ritetutor.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(pricingSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Investment in Excellence:{' '}
                <span className="text-primary">Transparent, Value-Driven Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium One-to-One Mentorship Delivered to Your Home in Bloomington and Beyond
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why We Don't List Prices */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why We Don't List Prices <span className="text-primary">on Our Website</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Most tutoring centers in Bloomington, Bedford, and Ellettsville advertise rates prominently. Why doesn't Rite Tutor? Because education quality isn't a commodity to be price-compared like groceries. Every child starts at a different skill level, learns at unique paces, and has distinct educational objectives. Cookie-cutter pricing assumes cookie-cutter students—an assumption we fundamentally reject.
                </p>
                <p>
                  Rite Tutor pricing reflects actual value delivered—mentor expertise required, curriculum complexity, session frequency, and advancement pace. We discuss investment during your free strategy call after understanding your child's specific needs and goals.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                Understanding the <span className="text-primary">True Cost</span> of Traditional Alternatives
              </h2>
              <div className="bg-background rounded-2xl overflow-hidden shadow-premium">
                <div className="grid grid-cols-3 bg-foreground text-background font-semibold">
                  <div className="p-4 text-center">Factor</div>
                  <div className="p-4 text-center text-muted-foreground">Traditional Group Classes</div>
                  <div className="p-4 text-center bg-primary text-primary-foreground">Rite Tutor</div>
                </div>
                {traditionalCosts.map((row, index) => (
                  <div key={row.label} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}>
                    <div className="p-4 font-medium text-sm">{row.label}</div>
                    <div className="p-4 text-center text-sm text-muted-foreground">{row.traditional}</div>
                    <div className="p-4 text-center text-sm font-semibold bg-primary/5">{row.rite}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Return on <span className="text-primary">Educational Investment</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {roi.map((item, index) => (
                <motion.div key={item.title} className="bg-card p-8 rounded-2xl border border-border shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{i}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.p className="text-center text-lg text-muted-foreground mt-8 max-w-3xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Parents investing $5,000 annually in premium mentorship can reasonably expect $50,000+ returns through saved tuition, scholarship awards, and enhanced career trajectories. That's conservative 10x ROI.
            </motion.p>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Membership Tiers: <span className="text-primary">Structured for Success</span>
              </h2>
              <p className="text-muted-foreground">Exact pricing is discussed during your strategy call based on your child's needs and objectives.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`relative bg-background rounded-2xl overflow-hidden shadow-lg border-2 ${tier.popular ? 'border-primary' : 'border-border'}`}
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
                    <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={tier.popular ? "hero" : "hero-outline"} className="w-full" asChild>
                      <Link to="/contact">Book Strategy Call</Link>
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
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                What Your Investment <span className="text-primary">Includes</span>
              </h2>
              <div className="space-y-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
                Start Your Child's Success Journey Today
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Whether you're in Bloomington or anywhere in the United States, your complimentary 30-minute strategy call includes no sales pressure, no commitment requirements. Just honest dialogue about your child's potential.
              </p>
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book Your Free Strategy Call
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
