import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Code, Trophy, CheckCircle, Layers, Brain, Globe } from 'lucide-react';

const pathwaysSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "Course", "position": 1, "name": "Logic Explorers (Ages 6-8)", "description": "Foundational thinking and pattern recognition." },
    { "@type": "Course", "position": 2, "name": "Digital Builders (Ages 9-11)", "description": "Syntax introduction and debugging resilience." },
    { "@type": "Course", "position": 3, "name": "Full-Stack Innovators (Ages 12-13)", "description": "Web development and database management." },
    { "@type": "Course", "position": 4, "name": "Junior CTOs (Ages 14-15)", "description": "Professional development and university certifications." }
  ]
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "One-to-One Coding Mentorship Program",
  "description": "Personalized coding education from visual logic to professional development",
  "provider": { "@type": "EducationalOrganization", "name": "Rite Tutor" },
  "educationalLevel": "Beginner to Advanced",
  "teaches": ["Python Programming", "Web Development", "Logical Thinking", "Problem Solving"],
  "availableLanguage": "en",
  "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "online", "courseWorkload": "PT1H" }
};

const pathways = [
  {
    icon: Rocket,
    title: "Stage 1: The Logic Explorers",
    subtitle: "Foundational Thinking",
    ages: "Typical Age Range: 6-8 years (skill-dependent)",
    description: "Young students don't need complex programming syntax—they need to understand that problems can be broken into manageable pieces, that order matters in sequential processes, and that pattern recognition is a learnable skill.",
    focusAreas: [
      "Sequencing & Order: Understanding that rearranging steps changes outcomes",
      "Pattern Recognition: Identifying repeating structures in visual and numerical sequences",
      "Decomposition Basics: Breaking large challenges into smaller, manageable tasks",
      "Cause & Effect: Understanding that actions produce predictable results"
    ],
    tools: ["Brilliant.org visual logic puzzles", "Block-based coding environments (Scratch-style interfaces)", "Interactive storytelling that introduces if/then logic"],
    milestone: "Students can explain their thinking process when solving unfamiliar problems, demonstrating foundational algorithmic reasoning without necessarily writing traditional code.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Stage 2: The Digital Builders",
    subtitle: "Syntax Introduction",
    ages: "Typical Age Range: 9-11 years (skill-dependent)",
    description: "This transitional stage moves from visual block-based programming to text-based languages. It's where many students either develop confidence or learned helplessness, depending on instruction quality.",
    focusAreas: [
      "Text-Based Syntax: Introduction to HTML, CSS, and basic JavaScript",
      "Debugging Resilience: Treating errors as puzzles rather than failures",
      "Version Control: Basic Git concepts and saving work progression",
      "Project Planning: Outlining what you'll build before writing code"
    ],
    tools: ["VS Code with guided environments", "Brilliant.org intermediate courses", "IXL integration for math reinforcement", "GitHub basics"],
    milestone: "Students independently build simple interactive websites and can debug common errors without mentor guidance.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Layers,
    title: "Stage 3: The Full-Stack Innovators",
    subtitle: "Applied Development",
    ages: "Typical Age Range: 12-13 years (skill-dependent)",
    description: "Students transition from building simple projects to creating sophisticated applications with multiple interconnected systems.",
    focusAreas: [
      "Advanced JavaScript: Functions, objects, arrays, and DOM manipulation",
      "React.js: Component-based architecture and modern front-end development",
      "Database Basics: Understanding data storage and retrieval",
      "API Integration: Connecting applications to external services"
    ],
    tools: ["Professional development environments", "React.js framework", "Database platforms", "API testing tools"],
    milestone: "Students build full-stack web applications with user interfaces, data management, and deployed live projects.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Trophy,
    title: "Stage 4: The Junior CTOs",
    subtitle: "Professional Mastery",
    ages: "Typical Age Range: 14-15 years (skill-dependent)",
    description: "The pinnacle of our pathway. Students don't just code—they architect solutions, manage development workflows, and earn professional credentials.",
    focusAreas: [
      "Full-Stack MERN Development: MongoDB, Express, React, Node.js",
      "Mobile App Development: React Native or Flutter",
      "Advanced Algorithm Design: Data structures, optimization, computational thinking",
      "Professional Practices: Code review, documentation, team collaboration"
    ],
    tools: ["Harvard CS50 course materials", "IBM Professional Certificates", "MIT OpenCourseWare", "College Credit by Examination prep"],
    milestone: "Students possess professional-level portfolios with sophisticated projects, university-verified certifications, and the capability to contribute meaningfully to real software development teams.",
    color: "from-primary to-yellow-500"
  }
];

const LearningPathways = () => {
  return (
    <>
      <Helmet>
        <title>Learning Pathways | Structured Growth From Logic to Professional Developer | Rite Tutor</title>
        <meta name="description" content="Comprehensive computer science pathways that adapt to your child's unique capabilities. From Logic Explorers (ages 6-8) to Junior CTOs (ages 14-15)." />
        <meta name="keywords" content="coding curriculum for kids, computer science pathway, python for kids, structured coding education" />
        <link rel="canonical" href="https://www.ritetutor.com/learning-pathways" />
        <script type="application/ld+json">{JSON.stringify(pathwaysSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Structured Growth From Logic Explorer to{' '}
                <span className="text-primary">Professional Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A Comprehensive Computer Science Pathway That Adapts to Your Child's Unique Capabilities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Pathways Matter */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Pathways Matter More Than <span className="text-primary">Random Classes</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Imagine learning a language by randomly jumping between beginner pronunciation, advanced literature, and intermediate grammar with no logical progression. Absurd, right? Yet this describes how most coding education works.
                </p>
                <p>
                  Parents in Bloomington, Bedford, Ellettsville, and nationwide frantically search for "coding camps near me," enrolling children in disconnected workshops that teach isolated skills without building on previous knowledge. Each experience delivers momentary engagement but no lasting mastery.
                </p>
                <p>
                  Rite Tutor rejects this chaos entirely. We've designed comprehensive learning pathways that treat computer science education like language acquisition—as a long-term, structured journey requiring consistent practice, cumulative knowledge building, and strategic skill sequencing. Our pathways aren't age-restricted. They're skill-based.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pathway Stages */}
        <section className="py-20 bg-card">
          <div className="container-wide">
            <div className="space-y-16">
              {pathways.map((pathway, index) => (
                <motion.div
                  key={pathway.title}
                  className="bg-background rounded-2xl overflow-hidden shadow-premium"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${pathway.color}`} />
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <pathway.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold">{pathway.title}</h3>
                        <p className="text-primary font-semibold">{pathway.subtitle}</p>
                        <span className="text-sm text-muted-foreground">{pathway.ages}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8">{pathway.description}</p>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold mb-4 text-lg">Core Focus Areas:</h4>
                        <ul className="space-y-3">
                          {pathway.focusAreas.map((area) => (
                            <li key={area} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-4 text-lg">Tools & Platforms:</h4>
                        <ul className="space-y-3 mb-6">
                          {pathway.tools.map((tool) => (
                            <li key={tool} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{tool}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-xl">
                          <h4 className="font-bold mb-2 text-sm">Milestone Achievement:</h4>
                          <p className="text-sm text-muted-foreground">{pathway.milestone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Integration */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Academic Integration:{' '}
                <span className="text-primary">Strengthening School Performance</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Rite Tutor doesn't compete with traditional education—we enhance it. Through IXL Analytics integration, we identify specific trouble spots in mathematics and language arts, then address those gaps through coding projects that make abstract concepts tangible.
                </p>
                <p>
                  A student struggling with exponents learns through geometric growth in algorithm analysis. Someone confused by proportional reasoning masters it through responsive web design calculations. This integration means parents don't choose between coding education and academic support—Rite Tutor provides both simultaneously.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Flexible Pacing */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Flexible Pacing:{' '}
                <span className="text-primary">The Anti-Grade Philosophy in Action</span>
              </h2>
              <p className="text-lg text-background/70 mb-6">
                These pathway stages represent skill progression, not time-based curricula. Students don't "complete" a stage in predetermined weeks—they master concepts before advancing. A gifted learner might progress through multiple stages in a year. Someone building deep foundational strength might spend eighteen months on Stage 2. Both approaches are valid.
              </p>
              <p className="text-lg text-background/70">
                What matters is genuine mastery, not superficial completion. When students advance, they do so from positions of confidence and proven capability, not arbitrary scheduling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
                Find Your Child's Pathway
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                During your free strategy call, we'll assess your child's current capabilities and design a customized learning pathway considering their interests, learning style, and long-term objectives.
              </p>
              <Button variant="premium" size="xl" asChild>
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

export default LearningPathways;
