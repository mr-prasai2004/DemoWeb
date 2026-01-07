import { Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    ArrowUp
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Contact' },
    ];

    const services = [
        'Web Development',
        'Mobile App Development',
        'Cloud Solutions',
        'Digital Marketing',
        'UI/UX Design',
        'SEO Optimization',
    ];

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com/wesellit', label: 'Facebook' },
        { icon: Instagram, href: 'https://instagram.com/wesellit', label: 'Instagram' },
        { icon: Linkedin, href: 'https://linkedin.com/company/wesellit', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/wesellit', label: 'Twitter' },
    ];

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col footer-about">
                            <Link to="/" className="footer-logo">
                                <span className="logo-icon">W</span>
                                <span className="logo-text">WESELLIT</span>
                            </Link>
                            <p className="footer-description">
                                Transforming businesses with innovative IT solutions. We deliver
                                excellence in web development, mobile apps, and digital marketing.
                            </p>
                            <div className="footer-social">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                {services.map((service) => (
                                    <li key={service}>
                                        <Link to="/portfolio">{service}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-col">
                            <h4 className="footer-title">Contact Us</h4>
                            <ul className="footer-contact">
                                <li>
                                    <MapPin size={18} />
                                    <span>Kathmandu, Nepal</span>
                                </li>
                                <li>
                                    <Phone size={18} />
                                    <a href="tel:+9779742305599">+977 9742305599</a>
                                </li>
                                <li>
                                    <Mail size={18} />
                                    <a href="mailto:aayuyhsprasai@gmail.com">aayuyhsprasai@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; {new Date().getFullYear()} WESELLIT. All rights reserved.</p>
                        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
