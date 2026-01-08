import { motion } from 'framer-motion';
import {
    Target,
    Eye,
    Award,
    CheckCircle,
    ArrowRight,
    Heart,
    Shield,
    Zap,
    Lightbulb
} from 'lucide-react';
import Button from '../components/Button';
import Counter from '../components/Counter';
import './About.css';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: 'Client Focus',
            description: 'Your success is our success. We put our clients at the heart of everything we do.'
        },
        {
            icon: Shield,
            title: 'Integrity',
            description: 'We believe in transparency and honest communication throughout every project.'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We stay ahead of the curve, embracing new technologies and methodologies.'
        },
        {
            icon: Lightbulb,
            title: 'Excellence',
            description: 'We strive for excellence in every line of code and pixel we create.'
        }
    ];

    const whyChooseUs = [
        'Expert IELTS & PTE coaching team',
        'Successful visa approval track record',
        'Professional web & app development',
        '100% client satisfaction rate',
        'Modern digital solutions',
        'Complete documentation support'
    ];

    const stats = [
        { value: 150, suffix: '+', label: 'Projects Completed' },
        { value: 80, suffix: '+', label: 'Happy Clients' },
        { value: 15, suffix: '+', label: 'Team Members' },
        { value: 5, suffix: '+', label: 'Years Experience' }
    ];

    return (
        <motion.div
            className="page about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-badge">About Us</span>
                        <h1>We Are <span className="gradient-text">BSEduTech</span></h1>
                        <p>
                            A passionate team of education counselors, developers, and digital experts
                            helping students study abroad and businesses grow digitally.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To empower students with expert guidance for IELTS, PTE, visa processing,
                                and study abroad services while providing innovative digital solutions
                                including web development, mobile apps, and digital marketing.
                            </p>
                        </div>

                        <div className="mission-card vision-card">
                            <div className="mission-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be Nepal's leading education consultancy and software company,
                                helping students achieve global education dreams while delivering
                                cutting-edge technology solutions for businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-about-section">
                <div className="container">
                    <div className="stats-about-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-about-item">
                                <Counter end={stat.value} suffix={stat.suffix} label={stat.label} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                                alt="Our Team"
                            />
                            <div className="story-image-overlay">
                                <div className="story-badge">
                                    <Award size={24} />
                                    <span>Award Winning Team</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-content">
                            <span className="section-badge">Our Story</span>
                            <h2>Growing Together Since <span className="gradient-text">2020</span></h2>
                            <p>
                                BSEduTech was founded in Kathmandu, Nepal with a dual vision - to help
                                students achieve their dreams of studying abroad and to provide businesses
                                with modern digital solutions.
                            </p>
                            <p>
                                Today, we successfully prepare students for IELTS and PTE, process visas,
                                and guide them to international education. Alongside, our tech team builds
                                websites, mobile apps, and digital marketing solutions for growing businesses.
                            </p>

                            <div className="why-choose-grid">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="why-choose-item">
                                        <CheckCircle size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button to="/contact" variant="primary" icon={<ArrowRight size={18} />} iconPosition="right">
                                Work With Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Values</span>
                        <h2 className="section-title">What <span className="gradient-text">Drives Us</span></h2>
                        <p className="section-subtitle">
                            Our core values define who we are and how we work with our clients and each other.
                        </p>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="value-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="value-icon">
                                    <value.icon size={28} />
                                </div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Get <span className="gradient-text">Started?</span></h2>
                        <p>
                            Whether you need study abroad guidance or digital solutions for your business, we're here to help.
                        </p>
                        <div className="cta-actions">
                            <Button to="/contact" variant="secondary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                                Get Started Today
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
