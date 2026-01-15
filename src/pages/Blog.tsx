import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  { title: "Why Logical Thinking Matters More Than Coding Syntax for Kids", excerpt: "Discover why we prioritize problem-solving skills over memorizing code.", slug: "logical-thinking-matters", category: "Education" },
  { title: "Best Coding Programs for Kids in Bloomington, IN: A Parent's Guide", excerpt: "Compare local options and find the right fit for your child.", slug: "coding-programs-bloomington", category: "Local" },
  { title: "How 1-on-1 Tutoring Accelerates Your Child's Learning", excerpt: "The science behind personalized education and why it works.", slug: "one-on-one-tutoring-benefits", category: "Learning" },
  { title: "Building a Junior CTO Mindset: What It Means for Your Child", excerpt: "Understanding our unique approach to technology education.", slug: "junior-cto-mindset", category: "Philosophy" },
  { title: "STEM Education Trends in Indiana for 2026", excerpt: "What parents need to know about the future of tech education.", slug: "stem-trends-indiana", category: "Trends" },
  { title: "From Scratch to Python: The Right Age to Start Coding", excerpt: "Age-appropriate coding languages and when to introduce them.", slug: "right-age-start-coding", category: "Getting Started" },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Rite Tutor - Coding Education Insights for Parents</title>
        <meta name="description" content="Expert insights on coding education, logical thinking, and STEM learning for kids in Bloomington, IN and beyond." />
        <link rel="canonical" href="https://www.ritetutor.com/blog" />
      </Helmet>
      
      <Layout>
        <section className="relative bg-card py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container-wide">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Rite Tutor <span className="text-primary">Blog</span></h1>
              <p className="text-xl text-muted-foreground">Insights on coding education, logical thinking, and raising future tech leaders.</p>
            </motion.div>
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
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary mb-3">{post.category}</span>
                    <h2 className="text-xl font-display font-bold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
