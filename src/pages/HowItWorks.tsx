import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Users, BookOpen, Briefcase, BarChart3 } from 'lucide-react';
import mentorImage from '@/assets/mentor-teaching.jpg';

const howItWorksSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Start Online Coding Classes with Rite Tutor",
  "description": "A guide for Bloomington parents on starting one-to-one online coding tuition.",
  "step": [
    { "@type": "HowToStep", "name": "Online Logic Assessment", "text": "Book a remote assessment from your home in Bloomington or surrounding areas." },
    { "@type": "HowToStep", "name": "Mentor Matching", "text": "We match your child with an expert mentor available in the Eastern Time Zone." },
    { "@type": "HowToStep", "name": "Start Learning", "text": "Begin weekly video sessions via our secure platform." }
  ]
};

const steps = [
  {
    icon: Search,
    number: "01",
    title: 'The "Logic First" Assessment',
    description: "Most coding classes for kids force every student into the same curriculum. We start differently. Before your child logs in from their home in Bloomington or Ellettsville, we need to understand how they think.",
    highlight: "The Discovery Session: A friendly, low-pressure logic assessment online."
  },
  {
    icon: Users,
    number: "02",
    title: 'The Perfect Mentor Match',
    description: "1-to-1 Online Attention: In a group class, students hide. In our one-to-one online coding classes, there is nowhere to hide—only a safe space to ask questions.",
    highlight: "Access to Experts: You don't need to drive to Indianapolis to find an expert mentor. We bring them to you digitally."
  },
  {
    icon: BookOpen,
    number: "03",
    title: 'The Stepping-Stone Learning Model',
    stones: [
      { name: "Stone 1: Logic (The Why)", detail: "Flowcharting solutions." },
      { name: "Stone 2: Syntax (The How)", detail: "Learning Python/JS as tools." },
      { name: "Stone 3: Product (The What)", detail: "Building real software." }
    ]
  },
  {
    icon: Briefcase,
    number: "04",
    title: 'Project-Based Learning & Portfolios',
    description: "Our project-based learning for children ensures real outcomes.",
    highlights: [
      "The Junior CTO Portfolio: Students build apps, games, or websites.",
      "Certifications: Rite Tutor Certification detailing hard and soft skills mastered."
    ]
  },
  {
    icon: BarChart3,
    number: "05",
    title: 'Parent Visibility & Progress Tracking',
    highlights: [
      "The Dashboard: See exactly what module your child is working on.",
      "Monthly Milestone Calls: Whether you are in Bedford or Bloomington, you stay in the loop with regular updates on coding progress and confidence."
    ]
  }
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | Online 1-on-1 Coding Classes Bloomington, IN</title>
        <meta name="description" content="Our stepping-stone model brings personalised computer science education to Bloomington homes. See how our 1-on-1 online tutoring works for Indiana kids." />
        <meta name="keywords" content="online tutoring Bloomington, how to start coding for kids, one-to-one coding classes" />
        <link rel="canonical" href="https://www.ritetutor.com/how-it-works" />
        <script type="application/ld+json">{JSON.stringify(howItWorksSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                From Curiosity to Capability:{' '}
                <span className="text-primary">Premium Online Tutoring</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We don't just teach code. We build logical minds through personalised one-to-one online tutoring.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <span className="text-5xl font-display font-bold text-primary/20">
                        {step.number}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                      {step.title}
                    </h2>
                    {step.description && (
                      <p className="text-lg text-muted-foreground mb-4">
                        {step.description}
                      </p>
                    )}
                    {step.highlight && (
                      <div className="bg-primary/10 p-4 rounded-xl">
                        <p className="font-medium">{step.highlight}</p>
                      </div>
                    )}
                    {step.stones && (
                      <div className="space-y-4">
                        {step.stones.map((stone) => (
                          <div key={stone.name} className="bg-card p-4 rounded-xl border border-border">
                            <h4 className="font-semibold mb-1">{stone.name}</h4>
                            <p className="text-muted-foreground">{stone.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {step.highlights && (
                      <div className="space-y-3">
                        {step.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <step.icon className="w-32 h-32 text-primary/30" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl -z-10" />
                    </div>
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
                Book Your Free Logic Assessment
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Start your child's journey to becoming a Junior CTO today.
              </p>
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact" className="group">
                  Get Started Now
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

export default HowItWorks;
