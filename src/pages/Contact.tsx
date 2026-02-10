import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Calendar, CheckCircle, Clock, MessageCircle } from 'lucide-react';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "Rite Tutor",
    "areaServed": ["Bloomington", "Bedford", "Ellettsville", "Nashville", "Martinsville", "Spencer"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US"
    }
  }
};

const expectations = [
  { title: "Understanding Current Capabilities", description: "We assess your child's current logical aptitude, technical experience, and learning style through friendly conversation—not intimidating tests." },
  { title: "Clarifying Objectives", description: "What are your educational goals? University preparation? Early career readiness? Academic enrichment? We align recommendations with your specific objectives." },
  { title: "Explaining Methodology", description: "We describe how Rite Tutor's skill-based progression differs from traditional age-grouped coding classes in Bloomington and nationwide." },
  { title: "Mapping Growth Trajectory", description: "We outline a personalized three-month pathway showing realistic progress milestones based on your child's starting point and time commitment." },
  { title: "Honest Fit Assessment", description: "We determine whether Rite Tutor can genuinely help your child. If we're not the right fit, we say so and recommend alternatives." }
];

const faqs = [
  { question: "Do you offer in-person tutoring in Bloomington?", answer: "No. Rite Tutor operates exclusively online, which enables us to match students with ideal mentors regardless of location, eliminate commute time and costs, and provide scheduling flexibility impossible with physical centers." },
  { question: "What if my child has never coded before?", answer: "Perfect. We specialize in building strong foundations from zero experience. Our methodology starts with logical thinking before introducing programming syntax, ensuring students understand the \"why\" behind code." },
  { question: "How quickly will my child see results?", answer: "Families typically notice improved problem-solving and increased confidence within 4-6 weeks. Tangible technical skills—like building functional websites—emerge within 2-3 months. Long-term growth develops over 1-3 years." },
  { question: "Can we pause or cancel our membership?", answer: "Yes. We require 30 days' notice for membership changes, allowing smooth transitions without penalizing families for life circumstances. We're educational partners, not inflexible contractors." }
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Rite Tutor | Book Your Free Strategy Call | Bloomington IN & Nationwide</title>
        <meta name="description" content="Start a conversation about your child's future. Book a free 30-minute strategy call with Rite Tutor. Serving Bloomington, IN and students nationwide." />
        <link rel="canonical" href="https://www.ritetutor.com/contact" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Let's Start a Conversation About Your Child's{' '}
                <span className="text-primary">Future</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Serving Bloomington, IN & Students Nationwide Through Premium Online Mentorship
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Reach Out */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-lg text-muted-foreground">
                Whether you're in Bloomington frustrated with crowded coding classes, in Bedford seeking alternatives to commute-heavy tutoring centers, in Ellettsville wanting personalized attention your child deserves, or anywhere in the United States searching for world-class mentorship—the first step is simple: conversation. This isn't a sales pitch disguised as consultation. We don't use high-pressure tactics or manufactured urgency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What to Expect + Form */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-display font-bold mb-6">
                  What to Expect During Your <span className="text-primary">Strategy Call</span>
                </h2>
                <p className="text-muted-foreground mb-8">Your complimentary 30-minute strategy session provides genuine value regardless of whether you ultimately enroll:</p>
                <div className="space-y-4">
                  {expectations.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-display font-bold">How to Connect</h3>
                  <a href="mailto:hello@ritetutor.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" /> hello@ritetutor.com
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" /> Serving Bloomington, IN & Students Nationwide
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-background p-8 rounded-2xl shadow-premium border border-border">
                  <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <Input placeholder="Parent/Guardian Name *" className="h-12" required />
                    <Input type="email" placeholder="Email Address *" className="h-12" required />
                    <Input placeholder="Phone Number (optional)" className="h-12" />
                    <Input placeholder="Child's Age *" className="h-12" required />
                    <select className="w-full h-12 px-3 rounded-md border border-border bg-background text-sm">
                      <option value="">Current Programming Experience</option>
                      <option value="none">None</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    <Input placeholder="Location/City (helps with timezone scheduling)" className="h-12" />
                    <Textarea placeholder="Educational Objectives: What are you hoping your child will achieve?" rows={4} />
                    <Input placeholder="How did you hear about Rite Tutor? (optional)" className="h-12" />
                    <Button variant="hero" size="lg" className="w-full">Book Your Free Strategy Call</Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div key={faq.question} className="bg-card p-6 rounded-xl border border-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
                Ready to Transform Potential Into Excellence?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                The path to world-class education starts with conversation. No sales pressure. No commitment required. Just honest dialogue about your child's future.
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
