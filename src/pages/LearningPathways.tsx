import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Code, Trophy, CheckCircle } from 'lucide-react';

const pathwaysSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "Course", "position": 1, "name": "The Explorer (Ages 6-9)", "description": "Logic foundations for students in Indiana." },
    { "@type": "Course", "position": 2, "name": "The Builder (Ages 10-12)", "description": "Python and game building for Bloomington students." },
    { "@type": "Course", "position": 3, "name": "The Junior CTO (Ages 13-15)", "description": "Advanced computer science for Indiana teens." }
  ]
};

const pathways = [
  {
    icon: Rocket,
    title: "The Logic Explorers",
    ages: "Ages 6–8",
    focus: "Play with Purpose & Pattern Recognition",
    skills: ["Sequencing: Understanding that order matters."],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "The Digital Builders",
    ages: "Ages 9–11",
    focus: "Transitioning from Blocks to Text",
    skills: [
      "Syntax Basics: Introduction to text-based languages (Python/JS).",
      "Debugging: Finding and fixing errors."
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Trophy,
    title: "The Junior CTOs",
    ages: "Ages 12–15",
    focus: "System Design & Real-World Solving",
    skills: [
      "Data Structures: Organising complex information.",
      "Product Lifecycle: From ideation to deployment.",
      'Outcome: A "Junior CTO" mindset ready for high school computer science or future opportunities at universities like IU.'
    ],
    color: "from-primary to-yellow-500"
  }
];

const comparison = [
  { feature: "Class Size", riteTutor: "1-on-1", traditional: "10-30 students" },
  { feature: "Curriculum", riteTutor: "Personalised", traditional: "One-size-fits-all" },
  { feature: "Focus", riteTutor: "Logic + Product", traditional: "Syntax memorisation" },
  { feature: "Progress Tracking", riteTutor: "Monthly reports", traditional: "End-of-course certificate" },
  { feature: "Flexibility", riteTutor: "Your schedule", traditional: "Fixed times" }
];

const LearningPathways = () => {
  return (
    <>
      <Helmet>
        <title>Coding Pathways for Kids Bloomington | Logic & CS Curriculum</title>
        <meta name="description" content="From logic foundations to advanced Python. Explore our age-guided online coding pathways for students in Bloomington, Martinsville, and Nashville, IN." />
        <meta name="keywords" content="coding curriculum for kids, computer science pathway Indiana, python for kids Bloomington" />
        <link rel="canonical" href="https://www.ritetutor.com/learning-pathways" />
        <script type="application/ld+json">{JSON.stringify(pathwaysSchema)}</script>
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
                A Roadmap for the Future:{' '}
                <span className="text-primary">Structured Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Success in technology isn't about memorising syntax; it's about structured growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Pathway Matters */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why a "Pathway" Matters
              </h2>
              <p className="text-lg text-muted-foreground">
                Many parents find themselves jumping between apps and summer camps. Instead of searching for sporadic "coding camps in Bloomington," Rite Tutor offers a consistent educational partner. We treat computer science learning for children like learning a language—it requires a structured roadmap.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pathways Section */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
              {pathways.map((pathway, index) => (
                <motion.div
                  key={pathway.title}
                  className="bg-background rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${pathway.color}`} />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <pathway.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                      {pathway.ages}
                    </span>
                    <h3 className="text-2xl font-display font-bold mb-2">{pathway.title}</h3>
                    <p className="text-muted-foreground font-medium mb-6">Focus: {pathway.focus}</p>
                    <ul className="space-y-3">
                      {pathway.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Rite Tutor vs. Traditional Classes
              </h2>
            </motion.div>
            
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-premium">
                <div className="grid grid-cols-3 bg-foreground text-background font-semibold">
                  <div className="p-4 text-center">Feature</div>
                  <div className="p-4 text-center bg-primary text-primary-foreground">Rite Tutor</div>
                  <div className="p-4 text-center">Traditional</div>
                </div>
                {comparison.map((row, index) => (
                  <div key={row.feature} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}>
                    <div className="p-4 font-medium">{row.feature}</div>
                    <div className="p-4 text-center bg-primary/5 font-semibold text-foreground">{row.riteTutor}</div>
                    <div className="p-4 text-center text-muted-foreground">{row.traditional}</div>
                  </div>
                ))}
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
                Book a Level Assessment Call
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Find out which pathway is right for your child.
              </p>
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact" className="group">
                  Schedule Assessment
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

export default LearningPathways;
