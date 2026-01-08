import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Globe,
    Smartphone,
    Cloud,
    TrendingUp,
    Palette,
    Search,
    ArrowRight,
    CheckCircle,
    Rocket,
    Users,
    Award,
    Clock
} from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import Counter from '../components/Counter';
import TestimonialSlider from '../components/TestimonialSlider';
import './Home.css';

const Home = () => {
    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies for optimal performance.'
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.'
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and migration services for your business needs.'
        },
        {
            icon: TrendingUp,
            title: 'Digital Marketing',
            description: 'Data-driven marketing strategies to grow your online presence and reach.'
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that users love and keep coming back to.'
        },
        {
            icon: Search,
            title: 'SEO Optimization',
            description: 'Improve your search rankings and drive organic traffic to your website.'
        }
    ];

    const stats = [
        { value: 150, suffix: '+', label: 'Projects Completed' },
        { value: 80, suffix: '+', label: 'Happy Clients' },
        { value: 5, suffix: '+', label: 'Years Experience' },
        { value: 24, suffix: '/7', label: 'Support Available' }
    ];

    const features = [
        'Expert IELTS & PTE preparation guidance',
        'Visa processing and documentation support',
        'Professional web & app development',
        'Digital marketing solutions'
    ];

    return (
        <motion.div
            className="page home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-gradient" />
                    <div className="hero-particles" />
                </div>

                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-badge">
                            <Rocket size={16} />
                            Welcome to BSEduTech
                        </span>

                        <h1>
                            Your Partner for <span className="hero-highlight">Education & Technology</span>
                        </h1>

                        <p className="hero-description">
                            Expert guidance for IELTS, PTE, visa processing, and study abroad counseling.
                            Plus innovative web, mobile, and digital marketing solutions for businesses.
                        </p>

                        <div className="hero-features">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="hero-feature"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <CheckCircle size={18} className="feature-icon" />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                                Get Started
                            </Button>
                            <Button to="/portfolio" variant="outline" size="lg">
                                View Our Work
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-image-container">
                            <div className="hero-shape hero-shape-1" />
                            <div className="hero-shape hero-shape-2" />
                            <div className="hero-shape hero-shape-3" />
                            <div className="hero-rocket">
                                <Rocket size={120} strokeWidth={1} />
                            </div>
                        </div>

                        {/* Floating Stats Cards */}
                        <motion.div
                            className="floating-card floating-card-1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Users size={24} />
                            <div>
                                <span className="floating-value">500+</span>
                                <span className="floating-label">Clients</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="floating-card floating-card-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                        >
                            <Award size={24} />
                            <div>
                                <span className="floating-value">50+</span>
                                <span className="floating-label">Awards</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <Counter
                                key={index}
                                end={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">What We Do</span>
                        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
                        <p className="section-subtitle">
                            We offer comprehensive digital solutions to help your business thrive in the modern world.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section about-preview-section">
                <div className="container">
                    <div className="about-preview-grid">
                        <div className="about-preview-image">
                            <div className="about-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                                    alt="Team working together"
                                />
                                <div className="experience-badge">
                                    <Clock size={28} />
                                    <div>
                                        <span className="exp-value">5+</span>
                                        <span className="exp-label">Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-preview-content">
                            <span className="section-badge">About Us</span>
                            <h2>Education Consultancy & <span className="gradient-text">Software Solutions</span></h2>
                            <p>
                                BSEduTech combines education consultancy with technology services.
                                We help students with IELTS, PTE coaching, visa processing, and study
                                abroad guidance.
                            </p>
                            <p>
                                Our tech team builds modern websites, mobile apps, and provides digital
                                marketing solutions to help businesses grow in the digital age.
                            </p>

                            <div className="about-features">
                                <div className="about-feature">
                                    <CheckCircle size={20} />
                                    <span>Expert Development Team</span>
                                </div>
                                <div className="about-feature">
                                    <CheckCircle size={20} />
                                    <span>Agile Methodology</span>
                                </div>
                                <div className="about-feature">
                                    <CheckCircle size={20} />
                                    <span>100% Client Satisfaction</span>
                                </div>
                                <div className="about-feature">
                                    <CheckCircle size={20} />
                                    <span>On-Time Delivery</span>
                                </div>
                            </div>

                            <Button to="/about" variant="primary" icon={<ArrowRight size={18} />} iconPosition="right">
                                Learn More About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="section portfolio-preview-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Work</span>
                        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                        <p className="section-subtitle">
                            Take a look at some of our recent work that showcases our expertise.
                        </p>
                    </div>

                    <div className="portfolio-preview-grid">
                        {[
                            { title: 'E-Commerce Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600' },
                            { title: 'Fitness Mobile App', category: 'Mobile Development', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600' },
                            { title: 'Corporate Dashboard', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600' }
                        ].map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="portfolio-preview-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="portfolio-preview-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="portfolio-preview-overlay">
                                        <span className="portfolio-category">{project.category}</span>
                                        <h4>{project.title}</h4>
                                        <Link to="/portfolio" className="portfolio-link">
                                            View Details <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="section-cta">
                        <Button to="/portfolio" variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
                            View All Projects
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Testimonials</span>
                        <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
                        <p className="section-subtitle">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </div>

                    <TestimonialSlider />
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your <span className="gradient-text">Project?</span></h2>
                        <p>
                            Let's work together to bring your ideas to life. Contact us today for a free consultation.
                        </p>
                        <div className="cta-actions">
                            <Button to="/contact" variant="secondary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                                Get in Touch
                            </Button>
                            <Button href="tel:+9779742305599" variant="ghost" size="lg">
                                Call: +977 9742305599
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
