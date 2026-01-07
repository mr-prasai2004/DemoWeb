import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Web Development', 'Mobile Development', 'Cloud', 'Marketing'];

    // Sample blog data (fallback if API fails)
    const sampleBlogs = [
        {
            id: 1,
            title: 'The Future of Web Development in 2025',
            slug: 'future-of-web-development-2025',
            excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
            author: 'WESELLIT Team',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600',
            category: 'Web Development',
            date: '2025-12-15',
            readTime: '5 min'
        },
        {
            id: 2,
            title: 'Why Your Business Needs a Mobile App',
            slug: 'why-business-needs-mobile-app',
            excerpt: 'Discover how a mobile app can transform your business and reach more customers.',
            author: 'WESELLIT Team',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
            category: 'Mobile Development',
            date: '2025-12-10',
            readTime: '4 min'
        },
        {
            id: 3,
            title: 'Cloud Solutions: A Complete Guide',
            slug: 'cloud-solutions-complete-guide',
            excerpt: 'Everything you need to know about migrating your business to the cloud.',
            author: 'WESELLIT Team',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600',
            category: 'Cloud',
            date: '2025-12-05',
            readTime: '6 min'
        },
        {
            id: 4,
            title: 'SEO Best Practices for 2025',
            slug: 'seo-best-practices-2025',
            excerpt: 'Learn the latest SEO strategies to improve your search engine rankings.',
            author: 'WESELLIT Team',
            image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5c2aa?w=600',
            category: 'Marketing',
            date: '2025-11-28',
            readTime: '7 min'
        },
        {
            id: 5,
            title: 'React vs Vue: Which to Choose?',
            slug: 'react-vs-vue-comparison',
            excerpt: 'A detailed comparison of two popular JavaScript frameworks for your next project.',
            author: 'WESELLIT Team',
            image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600',
            category: 'Web Development',
            date: '2025-11-20',
            readTime: '8 min'
        },
        {
            id: 6,
            title: 'Building Scalable Backend Systems',
            slug: 'building-scalable-backend-systems',
            excerpt: 'Best practices for creating backend architectures that grow with your business.',
            author: 'WESELLIT Team',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
            category: 'Web Development',
            date: '2025-11-15',
            readTime: '6 min'
        }
    ];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/blogs');
                if (response.data.success && response.data.data.length > 0) {
                    setBlogs(response.data.data);
                } else {
                    setBlogs(sampleBlogs);
                }
            } catch (error) {
                console.log('Using sample blog data');
                setBlogs(sampleBlogs);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const filteredBlogs = activeCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === activeCategory);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <motion.div
            className="page blog-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Page Header */}
            <section className="page-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Our <span className="gradient-text">Blog</span></h1>
                    <p>
                        Stay updated with the latest insights, tips, and trends in
                        technology and digital marketing.
                    </p>
                </motion.div>
            </section>

            {/* Blog Section */}
            <section className="section blog-section">
                <div className="container">
                    {/* Category Filters */}
                    <motion.div
                        className="blog-filters"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {loading ? (
                        <div className="loading">
                            <div className="spinner" />
                        </div>
                    ) : (
                        <div className="blog-grid">
                            {filteredBlogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    className="blog-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <Link to={`/blog/${blog.slug}`} className="blog-card-link">
                                        <div className="blog-card-image">
                                            <img src={blog.image} alt={blog.title} />
                                            <span className="blog-category">{blog.category}</span>
                                        </div>
                                        <div className="blog-card-content">
                                            <div className="blog-meta">
                                                <span>
                                                    <Calendar size={14} />
                                                    {formatDate(blog.date)}
                                                </span>
                                                <span>
                                                    <Clock size={14} />
                                                    {blog.readTime}
                                                </span>
                                            </div>
                                            <h3>{blog.title}</h3>
                                            <p>{blog.excerpt}</p>
                                            <div className="blog-footer">
                                                <span className="blog-author">
                                                    <User size={14} />
                                                    {blog.author}
                                                </span>
                                                <span className="read-more">
                                                    Read More <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </motion.div>
    );
};

export default Blog;
