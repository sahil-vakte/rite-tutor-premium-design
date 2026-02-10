import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Target, CheckCircle, Lightbulb, BarChart3, Github, Award, MessageCircle, Users, Shield } from 'lucide-react';
import familyImage from '@/assets/family-learning.jpg';
import mentorImage from '@/assets/mentor-teaching.jpg';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "Rite Tutor",
    "description": "Premium one-to-one online coding education for kids ages 6-15",
    "url": "https://www.ritetutor.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bloomington",
      "addressRegion": "IN",
      "addressCountry": "US"
    }
  }
};

const AboutUs = () => {
  const mentorQualities = [
    "Mastery of multiple programming languages and computer science fundamentals",
    "Ability to explain complex concepts using metaphors and visual analogies",
    "Experience guiding students through debugging challenges without simply providing answers",
    "Commitment to the Rite Tutor philosophy of skill-based progression",
    "Track record of fostering student confidence and resilience"
  ];

  const techStack = [
    {
      icon: Lightbulb,
      title: "Brilliant.org: Building Visual Logic",
      description: "Before writing a single line of code, students need to understand how to think algorithmically. Brilliant.org provides interactive, visual lessons in mathematical reasoning and scientific thinking."
    },
    {
      icon: BarChart3,
      title: "IXL Analytics: Academic Excellence Integration",
      description: "Coding education shouldn't compete with school performance—it should enhance it. IXL's data-driven platform lets us identify specific trouble spots in mathematics and language arts."
    },
    {
      icon: Github,
      title: "GitHub: Professional Portfolio Development",
      description: "Every Rite Tutor student builds a professional GitHub profile from day one. This isn't about checking boxes—it's about creating a documented record of growth, resilience, and mastery progression."
    },
    {
      icon: Award,
      title: "Harvard CS50 / IBM / MIT Pathways",
      description: "Our ultimate objective isn't teaching kids to code—it's preparing them to earn university-level credentials while still in middle or high school through HarvardX, IBM, and MIT OpenCourseWare."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Rite Tutor | Building Thinkers, Not Just Coders | Bloomington IN</title>
        <meta name="description" content="Rite Tutor was born from witnessing talented children trapped in educational systems that prioritize compliance over curiosity. Learn about our disruptive philosophy." />
        <meta name="keywords" content="about Rite Tutor, coding education philosophy, skill-based learning Bloomington" />
        <link rel="canonical" href="https://www.ritetutor.com/about-us" />
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Building Thinkers, Not Just Coders:{' '}
                <span className="text-primary">The Rite Tutor Story</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Why We're Disrupting Traditional Coding Education Across Bloomington, Indiana, and Beyond
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Problem We Saw */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  The Problem We Saw <span className="text-primary">(And Couldn't Ignore)</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Rite Tutor didn't emerge from a vacuum. It was born from years of witnessing a devastating pattern: Talented children trapped in educational systems that prioritize compliance over curiosity, memorization over mastery, and standardized testing over genuine understanding.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our founder, Dr. Harpreet, spent over a decade in traditional education—from classroom teaching to curriculum development at established tutoring centers across Indiana. What he observed was heartbreaking: Fourth-graders capable of complex logical reasoning forced to complete elementary worksheets because "that's the grade-level curriculum." High schoolers pushed through advanced programming syntax without understanding foundational algorithmic thinking.
                </p>
                <p className="text-lg text-muted-foreground">
                  The breaking point came when a gifted 11-year-old from Bloomington—a child who could visualize data structures in his head and explain complex algorithms to adults—was told he couldn't advance in his coding class until his entire age cohort caught up. That's when everything changed.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={familyImage} alt="Education transformation" className="rounded-2xl shadow-premium-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disruptive Philosophy */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Our Disruptive Philosophy:{' '}
                <span className="text-primary">Skill Over Age, Always</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Traditional tutoring centers in Bloomington, Bedford, Ellettsville, and nationwide operate from a fundamentally flawed assumption: that chronological age equals learning capacity. This industrial-age model might have made sense when education needed to process large volumes of students efficiently. It makes zero sense in an era where personalized learning is not only possible but essential.
                </p>
                <p>
                  At Rite Tutor, we reject grade-based curricula entirely. A nine-year-old who demonstrates mastery of proportional reasoning will learn Python data structures. A fifteen-year-old who needs foundational work in algorithmic thinking will build that base before touching advanced frameworks. We meet every child exactly where they are—not where a standardized curriculum says they should be.
                </p>
                <p>
                  This isn't just philosophically sound—it's neuroscientifically validated. Research in cognitive development consistently shows that children develop logical reasoning capabilities at vastly different rates. Our model prevents both gifted boredom and learned helplessness. Every student progresses at their optimal learning pace, building genuine mastery rather than superficial familiarity.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/learning-pathways" className="group">
                    Explore Our Learning Methodology
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integrated Tech Stack */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Integrated Tech Stack That <span className="text-primary">Delivers Results</span>
              </h2>
              <p className="text-lg text-background/70">
                Talk is cheap. Philosophy without execution is just wishful thinking. That's why Rite Tutor integrates the most powerful educational technology available.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {techStack.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  className="bg-background/5 backdrop-blur-sm p-6 rounded-2xl border border-background/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <tool.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{tool.title}</h3>
                  <p className="text-background/70">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Radical Transparency */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={mentorImage} alt="Transparent mentorship" className="rounded-2xl shadow-premium-lg" />
              </motion.div>
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Radical Transparency:{' '}
                  <span className="text-primary">The WhatsApp Difference</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Here's something that separates Rite Tutor from every other tutoring service in Bloomington and beyond: After every single session, parents receive a detailed WhatsApp message explaining exactly what their child learned, where they struggled, and what comes next.
                </p>
                <p className="text-lg text-muted-foreground">
                  Not vague platitudes like "Great session today!" Actual specifics about concepts mastered, breakthroughs achieved, and what comes next. Because you deserve to know whether your investment is yielding real results.
                </p>
                <p className="text-lg text-muted-foreground">
                  Moreover, parents have direct access to every platform we use. Want to see your child's IXL analytics? Log in anytime. Curious about their GitHub commit history? It's publicly visible. We hide nothing because we have nothing to hide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mentor Selection */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Mentor Selection Process:{' '}
                <span className="text-primary">Why Our Teachers Are Different</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Anyone can teach syntax. What requires mastery is the ability to diagnose why a student isn't understanding a concept, adapt explanations on the fly, and guide learners through frustration toward breakthrough moments. Every mentor must demonstrate:
              </p>
              <div className="space-y-4">
                {mentorQualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 bg-background p-5 rounded-xl border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{quality}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mt-8">
                The result is a teaching team that functions more like academic coaches than traditional instructors. They don't lecture—they guide. They don't provide answers—they ask questions that lead students to discoveries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Long-Term Vision */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                The Long-Term Vision:{' '}
                <span className="text-primary">College as a Choice, Not a Necessity</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Here's our controversial take: College should be a strategic choice, not a financial necessity. When students earn Harvard certifications, IBM credentials, and college credits before graduating high school, they enter university with leverage. They can challenge courses, graduate early, pursue advanced research opportunities, or even skip traditional college entirely in favor of direct career entry.
                </p>
                <p>
                  The Rite Tutor pathway creates optionality. Students who want traditional university experiences pursue them from positions of strength—with scholarships, advanced placement, and demonstrated excellence. Students who prefer alternative routes have the skills and credentials to succeed independently.
                </p>
              </div>
            </motion.div>
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
                Start the Conversation
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                We don't believe in hard-sell tactics or manufactured urgency. If Rite Tutor is right for your family, that will become clear through honest conversation. During your complimentary 30-minute strategy session, we'll discuss your child's current abilities, learning style, and create a customized pathway forward.
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
