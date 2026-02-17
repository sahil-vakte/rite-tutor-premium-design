import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: "Why Your Gifted Child is Bored in Coding Class (And What To Do About It)",
    excerpt: "The heartbreaking pattern repeats worldwide: A brilliant nine-year-old masters programming concepts in two weeks, then sits through ten more weeks of review. This article explores why age-based curricula systematically fail gifted learners.",
    slug: "gifted-child-bored-coding-class",
    category: "Educational Philosophy",
    date: "February 2026"
  },
  {
    title: "The Portfolio Advantage: Why GitHub Profiles Beat Certificates in College Applications",
    excerpt: "Admissions officers at competitive universities receive thousands of applications listing identical credentials. Increasingly, they check GitHub profiles. A student with 3+ years of commit history stands out dramatically.",
    slug: "portfolio-advantage-github-college",
    category: "College Prep",
    date: "January 2026"
  },
  {
    title: "From D to A: When the Teaching Method, Not the Child, is the Problem",
    excerpt: "\"My son just isn't good at coding.\" That's what David's parents believed after he earned a D in high school computer science. Four months later, David was tutoring his classmates.",
    slug: "teaching-method-not-child-problem",
    category: "Success Stories",
    date: "December 2025"
  },
  {
    title: "The Hidden Cost of 'Cheap' Coding Classes: Time You Can't Get Back",
    excerpt: "That $500 coding camp seems like a bargain. But consider the hidden costs: 90 hours of commute time, emotional cost of declining enthusiasm, and opportunity cost of years without portfolio building.",
    slug: "hidden-cost-cheap-coding-classes",
    category: "Parent Guidance",
    date: "November 2025"
  },
  {
    title: "Why We Teach Logic Before Syntax",
    excerpt: "Most coding programs start with Python or JavaScript syntax. Rite Tutor starts differently: How do you break complex problems into steps? How do you recognize patterns? Logic-first produces deeper understanding.",
    slug: "why-logic-before-syntax",
    category: "Educational Philosophy",
    date: "October 2025"
  },
  {
    title: "The Junior CTO Mindset: Raising Architects, Not Just Coders",
    excerpt: "What's the difference between a coder and a CTO? One executes instructions. The other envisions solutions, plans architectures, and articulates reasoning. We're developing the second type—even in children as young as ten.",
    slug: "junior-cto-mindset",
    category: "Philosophy",
    date: "September 2025"
  },
  {
    title: "12-Year-Old Builds App Adopted by Local Environmental Organization",
    excerpt: "Sarah noticed her community's park cleanup efforts were uncoordinated. So she built a solution. Her web application maps cleanup locations, coordinates volunteer schedules, and tracks completed areas.",
    slug: "student-builds-environmental-app",
    category: "Success Stories",
    date: "August 2025"
  },
  {
    title: "How to Evaluate Coding Programs: 10 Questions That Reveal Quality",
    excerpt: "Not all coding education is created equal. This guide provides specific questions to ask any program, what answers should raise red flags, and how to distinguish marketing hype from genuine value.",
    slug: "evaluate-coding-programs-guide",
    category: "Parent Guidance",
    date: "July 2025"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Coding Education Blog | STEM Insights & Student Success | Rite Tutor</title>
        <meta name="description" content="Insights, stories & breakthroughs from the Rite Tutor blog. Expert articles on coding education, logical thinking, student success stories, and practical guidance for parents." />
        <link rel="canonical" href="https://www.ritetutor.com/blog" />
      </Helmet>
      
      <Layout>
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Insights, Stories & <span className="text-primary">Breakthroughs</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4">The Rite Tutor Blog</p>
              <p className="text-muted-foreground">
                We don't write generic "coding is important" articles. We share honest, experience-based perspectives on what actually works in personalized education versus what sounds good in marketing materials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What You'll Find */}
        <section className="py-12 bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Educational Philosophy", desc: "Deep dives into skill-based progression" },
                { label: "Success Stories", desc: "Real transformations from our global community" },
                { label: "Parent Guidance", desc: "Practical advice on evaluating programs" },
                { label: "Industry Insights", desc: "Trends in CS education and careers" }
              ].map((item) => (
                <div key={item.label} className="bg-card p-4 rounded-xl border border-border text-center">
                  <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-display font-bold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary-foreground">
                Start Your Own Success Story
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Reading about transformations is inspiring. Creating one is life-changing. Your child's journey starts with conversation.
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

export default Blog;
