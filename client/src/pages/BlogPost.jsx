import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import axios from 'axios';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sample blog data (fallback)
    const sampleBlogs = {
        'future-of-web-development-2025': {
            id: 1,
            title: 'The Future of Web Development in 2025',
            slug: 'future-of-web-development-2025',
            content: `
        <p>The web development landscape is evolving rapidly. From AI-powered development tools to the rise of WebAssembly, here's what you need to know about the future of web development in 2025 and beyond.</p>
        
        <h2>Key Trends Shaping the Industry</h2>
        
        <h3>1. AI-Assisted Development</h3>
        <p>Artificial Intelligence is transforming how developers write code. Tools like GitHub Copilot and similar AI assistants are becoming more sophisticated, helping developers write better code faster and with fewer bugs.</p>
        
        <h3>2. Edge Computing</h3>
        <p>Moving computation closer to users reduces latency and improves performance. Edge functions and edge databases are becoming mainstream, enabling faster and more responsive web applications.</p>
        
        <h3>3. Progressive Web Apps (PWAs)</h3>
        <p>PWAs continue to blur the line between web and native apps. With improved capabilities and better browser support, PWAs offer app-like experiences without the need for app store distribution.</p>
        
        <h3>4. WebAssembly Adoption</h3>
        <p>WebAssembly is enabling high-performance applications in the browser. From gaming to video editing, WASM is opening new possibilities for web-based applications.</p>
        
        <h2>What This Means for Businesses</h2>
        <p>Staying ahead of these trends is crucial for businesses looking to maintain a competitive edge. Investing in modern web technologies can lead to improved user experiences, better performance, and reduced development costs in the long run.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development is exciting and full of opportunities. By embracing these trends and technologies, developers and businesses alike can create more powerful, efficient, and user-friendly web applications.</p>
      `,
            author: 'BSEduTech Team',
            authorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',
            category: 'Web Development',
            date: '2025-12-15',
            readTime: '5 min'
        }
    };

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
                if (response.data.success) {
                    setBlog(response.data.data);
                } else {
                    setBlog(sampleBlogs[slug] || sampleBlogs['future-of-web-development-2025']);
                }
            } catch (error) {
                console.log('Using sample blog data');
                setBlog(sampleBlogs[slug] || sampleBlogs['future-of-web-development-2025']);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const shareUrl = window.location.href;

    if (loading) {
        return (
            <div className="page blog-post-page">
                <div className="loading">
                    <div className="spinner" />
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="page blog-post-page">
                <div className="container">
                    <div className="not-found">
                        <h2>Blog post not found</h2>
                        <Link to="/blog">Back to Blog</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="page blog-post-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Image */}
            <div className="blog-hero">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-hero-overlay" />
            </div>

            <div className="container">
                <article className="blog-article">
                    {/* Back Link */}
                    <Link to="/blog" className="back-link">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>

                    {/* Article Header */}
                    <header className="article-header">
                        <span className="article-category">{blog.category}</span>
                        <h1>{blog.title}</h1>
                        <div className="article-meta">
                            <div className="author-info">
                                <img
                                    src={blog.authorImage || 'https://randomuser.me/api/portraits/men/1.jpg'}
                                    alt={blog.author}
                                    className="author-avatar"
                                />
                                <span>{blog.author}</span>
                            </div>
                            <span>
                                <Calendar size={16} />
                                {formatDate(blog.date)}
                            </span>
                            <span>
                                <Clock size={16} />
                                {blog.readTime}
                            </span>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Share Section */}
                    <div className="article-share">
                        <span className="share-label">
                            <Share2 size={18} />
                            Share this article
                        </span>
                        <div className="share-buttons">
                            <a
                                href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${blog.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href={`https://linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${blog.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn linkedin"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </motion.div>
    );
};

export default BlogPost;
