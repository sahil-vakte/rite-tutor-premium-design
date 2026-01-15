import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Brain, Lightbulb, Target, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-child-learning.jpg';
import mentorImage from '@/assets/mentor-teaching.jpg';
import familyImage from '@/assets/family-learning.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container-wide py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-foreground rounded-full text-sm font-semibold bg-primary">
                🎓 Serving families in Bloomington, Ellettsville, and across Indiana
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              Don't Just Teach Them Code.{' '}
              <span className="text-primary">Teach Them How to Think.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Most coding classes for kids teach syntax. We build logical thinkers, problem solvers, and "Junior CTOs" ready for any future career. Experience premium one-to-one online coding tuition from the comfort of your home.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/how-it-works">
                  See How It Works
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">100% Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">1-on-1 Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Ages 6-15</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-premium-lg">
              <img 
                src={heroImage} 
                alt="Child learning to code online with a mentor"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl -z-10" />
            </div>
            {/* Floating card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-premium border border-border"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Junior CTO Mindset</p>
                  <p className="text-sm text-muted-foreground">Building Future Leaders</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            The Problem: Why Standard Coding Classes Aren't Enough
          </h2>
          <p className="text-lg text-muted-foreground">
            Are you worried your child is just memorising code without understanding the "why"?
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground">
              You've likely seen the ads promising that your child will build an app in an hour. But often, standard coding classes for kids rely on copy-paste learning. In a rapidly changing world, knowing Python isn't the goal. The real asset is the ability to deconstruct complex problems.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you live near the IU campus or in surrounding areas like Bedford or Spencer, your child deserves access to world-class mentorship without the commute.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={familyImage} 
              alt="Family learning together at home"
              className="rounded-2xl shadow-premium"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function DifferenceSection() {
  const differences = [
    {
      icon: Users,
      title: "Truly One-to-One Online",
      description: "No crowded Zoom rooms. Our online tutoring ensures your child gets 100% attention, delivered directly to your Bloomington home."
    },
    {
      icon: Target,
      title: "Product-First Mindset",
      description: "We don't just write lines of code; we build products. Students learn to plan, design, execute, and debug."
    },
    {
      icon: Lightbulb,
      title: "Future-Proof Skills",
      description: "We focus on the logic that underpins all STEM education, ensuring students are ready for university and Indiana's growing tech landscape."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container-wide">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            The Rite Tutor Difference: We Build <span className="text-primary">Junior CTOs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At Rite Tutor, we use coding as a vehicle to teach high-level logical thinking skills for kids.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {differences.map((item, index) => (
            <motion.div 
              key={item.title}
              className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  const outcomes = [
    {
      title: "Deep Logical Thinking",
      description: "Breaking big problems into small steps."
    },
    {
      title: "Resilience",
      description: "Learning that failure is just data."
    },
    {
      title: "Communication",
      description: "Articulating how their code works."
    }
  ];

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container-wide">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Outcomes: Skills That Last a <span className="text-primary">Lifetime</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((item, index) => (
            <motion.div 
              key={item.title}
              className="text-center p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
              <p className="text-background/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const trustPoints = [
    {
      icon: Users,
      title: "Vetted Mentors",
      description: "Experts who can explain complex concepts simply."
    },
    {
      icon: Target,
      title: "Local Convenience",
      description: "Skip the traffic on SR 37 or the Bypass. Get premium education without leaving your living room."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={mentorImage} 
              alt="Expert mentor teaching coding to a child"
              className="rounded-2xl shadow-premium-lg"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Why Bloomington Parents Trust <span className="text-primary">Rite Tutor</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe that STEM education for kids requires a human connection.
            </p>
            
            <div className="space-y-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-wide">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            We invite you to a complimentary strategy session. We'll assess your child's current logical aptitude and map out a personalised learning path.
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
  );
}
