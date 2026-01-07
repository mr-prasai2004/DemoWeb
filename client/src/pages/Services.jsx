import { motion } from 'framer-motion';
import {
    Globe,
    Smartphone,
    Cloud,
    TrendingUp,
    Palette,
    Search,
    ArrowRight,
    CheckCircle,
    Server,
    ShieldCheck
} from 'lucide-react';
import Button from '../components/Button';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
            features: ['React & Next.js', 'Node.js & Express', 'WordPress & CMS', 'E-commerce Solutions']
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
            features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Publishing']
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure, migration services, and DevOps solutions for modern businesses.',
            features: ['AWS & Azure', 'Cloud Migration', 'DevOps & CI/CD', 'Server Management']
        },
        {
            icon: TrendingUp,
            title: 'Digital Marketing',
            description: 'Data-driven marketing strategies to grow your online presence, reach, and conversions.',
            features: ['Social Media Marketing', 'PPC Advertising', 'Email Campaigns', 'Content Strategy']
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that users love. We focus on user research and testing.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        {
            icon: Search,
            title: 'SEO Optimization',
            description: 'Improve your search rankings and drive organic traffic with our proven SEO strategies.',
            features: ['Technical SEO', 'On-page Optimization', 'Link Building', 'Analytics & Reporting']
        },
        {
            icon: Server,
            title: 'Backend Development',
            description: 'Robust and scalable server-side solutions to power your applications.',
            features: ['API Development', 'Database Design', 'Microservices', 'Third-party Integration']
        },
        {
            icon: ShieldCheck,
            title: 'Cybersecurity',
            description: 'Protect your business with comprehensive security audits and solutions.',
            features: ['Security Audits', 'Penetration Testing', 'SSL & Encryption', 'Compliance']
        }
    ];

    const process = [
        { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and requirements.' },
        { step: '02', title: 'Planning', description: 'We create a detailed roadmap and project timeline.' },
        { step: '03', title: 'Design', description: 'Our designers create beautiful, user-focused interfaces.' },
        { step: '04', title: 'Development', description: 'Our developers bring the designs to life with clean code.' },
        { step: '05', title: 'Testing', description: 'Rigorous testing ensures everything works perfectly.' },
        { step: '06', title: 'Launch', description: 'We deploy your project and provide ongoing support.' }
    ];

    return (
        <motion.div
            className="page services-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <motion.div
                        className="services-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-badge">Our Services</span>
                        <h1>What We <span className="gradient-text">Offer</span></h1>
                        <p>
                            Comprehensive digital solutions tailored to your business needs.
                            From web development to digital marketing, we've got you covered.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-main-section">
                <div className="container">
                    <div className="services-main-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="service-main-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="service-main-icon">
                                    <service.icon size={32} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>
                                            <CheckCircle size={14} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button to="/contact" variant="ghost" size="sm" icon={<ArrowRight size={16} />} iconPosition="right">
                                    Learn More
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Process</span>
                        <h2 className="section-title">How We <span className="gradient-text">Work</span></h2>
                        <p className="section-subtitle">
                            Our streamlined process ensures efficient delivery and exceptional results.
                        </p>
                    </div>

                    <div className="process-grid">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="process-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <span className="process-step">{item.step}</span>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need a Custom <span className="gradient-text">Solution?</span></h2>
                        <p>
                            Let's discuss your project requirements and create something amazing together.
                        </p>
                        <div className="cta-actions">
                            <Button to="/contact" variant="secondary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                                Get a Free Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Services;
