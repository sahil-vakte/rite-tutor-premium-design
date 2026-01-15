import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Calendar, Heart, Github, Award, Lightbulb } from 'lucide-react';
import studentProject from '@/assets/student-project.jpg';

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Student Coding Projects",
  "description": "Real-world software applications built by Rite Tutor students.",
  "provider": { "@type": "Organization", "name": "Rite Tutor" }
};

const projects = [
  {
    icon: Globe,
    title: "The Community Helper",
    description: 'A "CleanUp Tracker" web app to map litter in local parks.'
  },
  {
    icon: Calendar,
    title: "The Homework Organiser",
    description: 'A personal dashboard using a "Traffic Light" system for deadlines.'
  },
  {
    icon: Heart,
    title: "The Mental Health Buddy",
    description: "A rule-based chatbot suggesting breathing exercises."
  }
];

const portfolioFeatures = [
  {
    icon: Github,
    title: "GitHub Repository",
    description: "We teach students to upload code to industry-standard platforms."
  },
  {
    icon: Award,
    title: "Evidence of Leadership",
    description: "Taking a project from zero to launch."
  },
  {
    icon: Lightbulb,
    title: "Local Relevance",
    description: "A student who builds a website for a Monroe County organization stands out far more than a student with just good grades."
  }
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Student Coding Projects Bloomington | Portfolios & Impact</title>
        <meta name="description" content="See how Rite Tutor students build real-world apps. Our project-based online learning helps Bloomington kids build portfolios for future scholarships." />
        <meta name="keywords" content="student coding portfolio, coding projects for kids, community service projects Bloomington" />
        <link rel="canonical" href="https://www.ritetutor.com/projects" />
        <script type="application/ld+json">{JSON.stringify(projectsSchema)}</script>
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
                Don't Just Learn the Theory.{' '}
                <span className="text-primary">Build Solutions for the Real World.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                At Rite Tutor, your child builds a student coding portfolio of real-world applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Projects Matter */}
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
                  Why Projects Matter More Than Certificates
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Universities and employers look for innovators. That's why we prioritise project-based learning for kids. We challenge students to look at their community, find a pain point, and use technology to fix it.
                </p>
                <p className="text-lg text-muted-foreground">
                  Imagine your child building an app that solves a problem for a local Bloomington charity or school group.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={studentProject} 
                  alt="Student showing their coding project"
                  className="rounded-2xl shadow-premium-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Student Project Examples
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Building the "Junior CTO" <span className="text-primary">Portfolio</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-background/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Impact on Scholarships & Future Applications
              </h2>
              <p className="text-lg text-muted-foreground">
                Community service projects for students are gold dust for essays.
              </p>
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
                Book a Free Strategy Call & Project Brainstorm
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's explore what your child could build.
              </p>
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact" className="group">
                  Start Your Project Journey
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

export default Projects;
