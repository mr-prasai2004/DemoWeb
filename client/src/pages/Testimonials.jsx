import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Sharma',
            role: 'CEO, TechStart Nepal',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5,
            text: 'BSEduTech transformed our online presence completely. Their web development team delivered a stunning website that increased our conversions by 150%. The attention to detail and commitment to quality was exceptional. Highly recommended for any business looking to establish a strong digital presence!'
        },
        {
            id: 2,
            name: 'Priya Thapa',
            role: 'Marketing Director, Himalayan Exports',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 5,
            text: 'Outstanding digital marketing services! They helped us reach new markets and grow our customer base significantly. The team understood our unique challenges and created strategies that actually worked. Professional team with excellent communication throughout the project.'
        },
        {
            id: 3,
            name: 'Amit Kumar',
            role: 'Founder, EduTech Solutions',
            image: 'https://randomuser.me/api/portraits/men/52.jpg',
            rating: 5,
            text: 'The mobile app they developed for us exceeded all expectations. Clean UI, smooth performance, and delivered on time. BSEduTech is our go-to IT partner now. They took our vision and turned it into a beautiful, functional app that our users love.'
        },
        {
            id: 4,
            name: 'Sunita Rai',
            role: 'Operations Manager, Green Valley Hotels',
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 5,
            text: 'Their cloud solutions helped us streamline operations across all our hotel branches. Reliable, secure, and cost-effective. Great technical expertise! The migration was seamless and we saw immediate improvements in efficiency.'
        },
        {
            id: 5,
            name: 'Bikash Gurung',
            role: 'CTO, FinanceHub',
            image: 'https://randomuser.me/api/portraits/men/75.jpg',
            rating: 5,
            text: 'Working with BSEduTech was a game-changer for our fintech startup. They built a secure, scalable platform that handles thousands of transactions daily. Their understanding of both technology and business requirements is impressive.'
        },
        {
            id: 6,
            name: 'Anita Shrestha',
            role: 'Owner, Kathmandu Crafts',
            image: 'https://randomuser.me/api/portraits/women/82.jpg',
            rating: 5,
            text: 'The e-commerce platform BSEduTech built for us helped take our local craft business global. We now ship to 15+ countries! The SEO optimization they did brought in organic traffic we never thought possible.'
        }
    ];

    return (
        <motion.div
            className="page testimonials-page"
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
                    <h1>Client <span className="gradient-text">Testimonials</span></h1>
                    <p>
                        Don't just take our word for it. Here's what our valued clients
                        have to say about working with BSEduTech.
                    </p>
                </motion.div>
            </section>

            {/* Testimonials Grid */}
            <section className="section testimonials-grid-section">
                <div className="container">
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Quote className="quote-icon" size={32} />

                                <p className="testimonial-text">{testimonial.text}</p>

                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < testimonial.rating ? 'var(--accent)' : 'transparent'}
                                            color={i < testimonial.rating ? 'var(--accent)' : 'var(--dark-600)'}
                                        />
                                    ))}
                                </div>

                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div className="author-info">
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section stats-banner">
                <div className="container">
                    <motion.div
                        className="stats-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="stat-item">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">150+</span>
                            <span className="stat-label">Projects Delivered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">80+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Join Our Success Stories?</h2>
                        <p>
                            Let's discuss how BSEduTech can help transform your business.
                        </p>
                        <Button to="/contact" variant="secondary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                            Start Your Project
                        </Button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Testimonials;
