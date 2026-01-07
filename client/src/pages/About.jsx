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
        'Expert team with 5+ years of experience',
        'Transparent pricing with no hidden costs',
        'Agile development methodology',
        '100% client satisfaction rate',
        'On-time project delivery guarantee',
        '24/7 dedicated support team'
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
                        <h1>We Are <span className="gradient-text">WESELLIT</span></h1>
                        <p>
                            A passionate team of developers, designers, and digital strategists
                            dedicated to transforming businesses through innovative technology solutions.
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
                                To empower businesses with cutting-edge digital solutions that drive growth,
                                enhance efficiency, and create lasting value. We are committed to delivering
                                exceptional quality and innovation in every project we undertake.
                            </p>
                        </div>

                        <div className="mission-card vision-card">
                            <div className="mission-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the leading IT company in Nepal, recognized globally for our innovative
                                solutions, exceptional service, and commitment to helping businesses thrive
                                in the digital age.
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
                            <h2>Building Digital Excellence Since <span className="gradient-text">2020</span></h2>
                            <p>
                                WESELLIT was founded in Kathmandu, Nepal with a vision to bridge the gap
                                between businesses and technology. What started as a small team of passionate
                                developers has grown into a full-service digital agency.
                            </p>
                            <p>
                                Over the years, we have helped countless businesses transform their digital
                                presence, streamline operations, and reach new heights of success. Our journey
                                has been defined by continuous learning, innovation, and an unwavering commitment
                                to our clients' success.
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
                        <h2>Ready to Transform Your <span className="gradient-text">Business?</span></h2>
                        <p>
                            Let's discuss how we can help you achieve your digital goals.
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
