import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, Target, CheckCircle } from 'lucide-react';
import familyImage from '@/assets/family-learning.jpg';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "Rite Tutor",
    "legalName": "Rite Tutor LLC",
    "areaServed": {
      "@type": "State",
      "name": "Indiana"
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const AboutUs = () => {
  const commitments = [
    { title: "Transparency", description: "Honest reports on logical development." },
    { title: "No False Promises", description: "Real skill takes time." },
    { title: "Convenience", description: "World-class online mentorship available to students from the East Side to the West Side." }
  ];

  const whoWeServe = [
    { title: "Ages 6–15", description: "From early logic development to advanced Python." },
    { title: "Local Families", description: "Serving Bloomington, Nashville, Martinsville, and beyond." },
    { title: "Forward-Thinking Parents", description: "You aren't looking for a babysitter; you are looking for a partner in your child's development." }
  ];

  return (
    <>
      <Helmet>
        <title>About Rite Tutor | Online Coding Tutor for Bloomington & Indiana Families</title>
        <meta name="description" content="We provide personalised online coding and logic tutoring for children in Bloomington, IN. Discover why local parents choose our 1-on-1 'Junior CTO' model." />
        <meta name="keywords" content="online coding tutor Bloomington, personalised tutoring Indiana, STEM education Bloomington" />
        <link rel="canonical" href="https://www.ritetutor.com/about-us" />
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl"
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              >
                Building Thinkers in Bloomington,{' '}
                <span className="text-primary">Not Just Coders.</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground"
              >
                We believe the ability to think logically is the single most valuable asset a child can own.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Why Created Section */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Why Rite Tutor Was Created
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We started Rite Tutor because we noticed a troubling trend in computer science education for kids.
                  </p>
                  <p>
                    We saw bright children memorising syntax—typing lines of code they didn't understand—to build generic games. We knew families in Bloomington and Monroe County wanted more than just generic "coding camps." They wanted real skills. Rite Tutor was born to close that gap.
                  </p>
                  <p>
                    We moved away from the "entertainment-first" model to build a platform rooted in deep, mentorship-based learning.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={familyImage} 
                  alt="Family learning together"
                  className="rounded-2xl shadow-premium-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Junior CTO Mindset Section */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The "Junior CTO" Mindset
              </h2>
              <p className="text-lg text-muted-foreground">
                A Chief Technology Officer (CTO) doesn't just write code. They see the big picture. We instil this mindset in our students, nurturing future skills for students like:
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-background p-8 rounded-2xl shadow-lg border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Algorithmic Thinking</h3>
                <p className="text-muted-foreground">Creating a step-by-step plan before acting.</p>
              </motion.div>
              
              <motion.div
                className="bg-background p-8 rounded-2xl shadow-lg border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Pattern Recognition</h3>
                <p className="text-muted-foreground">Identifying similarities in different problems.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Who We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Rite Tutor is designed for families across Southern Indiana who take a long-term view of education.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whoWeServe.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Commitment to Indiana Families
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {commitments.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-background/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
                Let's Discuss Your Child's Potential
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                We invite you to book a complimentary strategy session.
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

export default AboutUs;
