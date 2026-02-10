import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Users, BookOpen, Briefcase, BarChart3, Brain, Code, Layers, Eye, Github, Award, CheckCircle } from 'lucide-react';
import mentorImage from '@/assets/mentor-teaching.jpg';

const howItWorksSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Rite Tutor's Online Coding Mentorship Works",
  "description": "From curiosity to capability through personalized online mentorship.",
  "step": [
    { "@type": "HowToStep", "name": "Logic-First Assessment", "text": "We assess how your child thinks through logic puzzles and pattern recognition." },
    { "@type": "HowToStep", "name": "Perfect Mentor Matching", "text": "We match your child with an ideal mentor based on learning style and personality." },
    { "@type": "HowToStep", "name": "Three-Pillar Learning", "text": "Logic, Syntax, and Product-based learning framework." },
    { "@type": "HowToStep", "name": "Portfolio Development", "text": "Students build professional Junior CTO portfolios." }
  ]
};

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | From Curiosity to Capability | Rite Tutor</title>
        <meta name="description" content="Discover how Rite Tutor transforms kids into logical thinkers through personalized online mentorship. Our four-step process builds Junior CTOs, not syntax memorizers." />
        <meta name="keywords" content="how online coding tutoring works, personalized coding education, logic-first assessment kids" />
        <link rel="canonical" href="https://www.ritetutor.com/how-it-works" />
        <script type="application/ld+json">{JSON.stringify(howItWorksSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div className="max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                From Curiosity to Capability:{' '}
                <span className="text-primary">The Rite Tutor Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                How We Transform Kids Into Logical Thinkers Through Personalized Online Mentorship
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem With Traditional Classes */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                The Problem With <span className="text-primary">Traditional Coding Classes</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Most coding programs for kids follow a depressingly predictable pattern: Gather 15-20 children into a virtual classroom, assign everyone the same age-appropriate project, provide minimal individual attention, and hope struggling students somehow keep pace while gifted learners zone out from boredom.
                </p>
                <p>
                  The result? Children learn to copy code they don't understand, memorize syntax without grasping underlying logic, and develop the dangerous belief that programming is either impossibly confusing or trivially simple.
                </p>
                <p>
                  Rite Tutor operates from a fundamentally different model. We reject the factory approach entirely. Every student receives 100% of their mentor's attention, every single session. No competing for teacher time. No waiting for slower peers to catch up. Just pure, focused mentorship calibrated to your child's exact skill level and learning pace.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 1: Logic-First Assessment */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <Search className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-display font-bold text-primary/20">01</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  The Logic-First Assessment
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We don't start with "What grade are you in?" or "Have you coded before?" Those questions assume age correlates with ability and that prior exposure equals mastery. Both assumptions are demonstrably false.
                  </p>
                  <p>
                    Instead, our initial assessment focuses on how your child thinks. Through carefully designed logic puzzles, pattern recognition challenges, and problem decomposition exercises, we identify their current reasoning capabilities. A fourth-grader might demonstrate tenth-grade analytical thinking. A high schooler might need foundational work in algorithmic approaches.
                  </p>
                  <p>
                    This assessment is friendly, low-pressure, and actually enjoyable. We're not testing your child—we're understanding them.
                  </p>
                </div>
                <div className="mt-6">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="group">
                      Take the Free Logic Assessment
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Search className="w-32 h-32 text-primary/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Step 2: Perfect Mentor Matching */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div className="lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-display font-bold text-primary/20">02</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Perfect Mentor Matching
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Technical expertise alone doesn't create effective teaching. A mentor might be a brilliant developer but struggle to explain concepts to children.
                  </p>
                  <p>
                    That's why Rite Tutor invests significant effort in mentor-student matching. We consider learning style (visual vs. verbal, big-picture vs. detail-oriented), personality compatibility, communication preferences, and specific educational objectives. The goal is creating a mentorship relationship where your child feels safe asking questions, comfortable admitting confusion, and excited to tackle challenging material.
                  </p>
                  <p>
                    In one-to-one online tutoring, the relationship is everything. We get this right from the start because switching mentors mid-journey disrupts momentum and trust.
                  </p>
                </div>
              </motion.div>
              <motion.div className="lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src={mentorImage} alt="Mentor matching process" className="rounded-2xl shadow-premium-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Step 3: Three-Pillar Learning Framework */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Layers className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-5xl font-display font-bold text-primary/20">03</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Three-Pillar Learning Framework
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div className="bg-background p-8 rounded-2xl shadow-lg border border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Pillar 1: Logic (The Why)</h3>
                <p className="text-muted-foreground">
                  Before writing a single line of Python or JavaScript, students must understand how to think algorithmically. We use Brilliant.org's visual, interactive lessons to build proportional reasoning, pattern recognition, and systematic problem decomposition. Logic comes first. Always.
                </p>
              </motion.div>
              
              <motion.div className="bg-background p-8 rounded-2xl shadow-lg border border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Pillar 2: Syntax (The How)</h3>
                <p className="text-muted-foreground">
                  Rite Tutor teaches integrated coding from day one. Students learn HTML structure, CSS styling, and JavaScript functionality simultaneously through project-based builds. They don't memorize disconnected syntax—they orchestrate multiple technologies to create real web applications.
                </p>
              </motion.div>
              
              <motion.div className="bg-background p-8 rounded-2xl shadow-lg border border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Pillar 3: Product (The What)</h3>
                <p className="text-muted-foreground">
                  Generic coding exercises teach syntax. Real projects teach thinking. Every Rite Tutor student builds a portfolio of functional applications—not tutorials they copied, but original creations that solve genuine problems in their communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Step 4: Junior CTO Portfolio */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-5xl font-display font-bold text-primary/20">04</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Junior CTO Portfolio Development
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Traditional coding classes produce students who've completed courses. Rite Tutor produces students who've built things. There's a massive difference. This portfolio includes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "GitHub repositories with comprehensive documentation",
                  "Live-deployed websites and applications",
                  "Demo Day videos explaining technical decisions",
                  "Rite Tutor certifications documenting mastered skills",
                  "For advanced students: Harvard CS50, IBM, or MIT credentials"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/projects" className="group">
                    See Student Success Stories
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Parent Visibility */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Parent Visibility:{' '}
                <span className="text-primary">The Transparency You Deserve</span>
              </h2>
              <div className="space-y-6 text-lg text-background/70">
                <p>
                  After every single session, parents receive detailed WhatsApp updates. Not vague summaries—specific breakdowns of what your child learned, where they struggled, breakthroughs they achieved, and what comes next.
                </p>
                <p>
                  Additionally, you have direct access to every platform we use. Want to review your child's GitHub commit history? It's publicly available. Curious about IXL analytics showing math proficiency levels? Log in anytime. Interested in which Brilliant.org courses they've completed? Check the dashboard.
                </p>
                <p>
                  For Bloomington families accustomed to driving across town for five-minute parent-teacher conferences that reveal nothing substantive, this level of ongoing communication is revolutionary. You're never wondering whether your investment is yielding results—you know, session by session.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="py-20 bg-primary">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
                Book Your Free Strategy Call Today
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                The first step is conversation, not commitment. No pressure. No sales scripts. Just honest dialogue about transforming your child's potential into excellence.
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
