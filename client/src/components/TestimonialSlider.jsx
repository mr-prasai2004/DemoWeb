import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialSlider.css';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Sharma',
        role: 'CEO, TechStart Nepal',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        text: 'BSEduTech transformed our online presence completely. Their web development team delivered a stunning website that increased our conversions by 150%. Highly recommended!'
    },
    {
        id: 2,
        name: 'Priya Thapa',
        role: 'Marketing Director, Himalayan Exports',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        text: 'Outstanding digital marketing services! They helped us reach new markets and grow our customer base significantly. Professional team with excellent communication.'
    },
    {
        id: 3,
        name: 'Amit Kumar',
        role: 'Founder, EduTech Solutions',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 5,
        text: 'The mobile app they developed for us exceeded all expectations. Clean UI, smooth performance, and delivered on time. BSEduTech is our go-to IT partner now.'
    },
    {
        id: 4,
        name: 'Sunita Rai',
        role: 'Operations Manager, Green Valley Hotels',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        rating: 5,
        text: 'Their cloud solutions helped us streamline operations across all our hotel branches. Reliable, secure, and cost-effective. Great technical expertise!'
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <div
            className="testimonial-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="testimonial-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="testimonial-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Quote className="quote-icon" size={48} />

                        <p className="testimonial-text">{testimonials[currentIndex].text}</p>

                        <div className="testimonial-rating">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill={i < testimonials[currentIndex].rating ? 'var(--accent)' : 'transparent'}
                                    color={i < testimonials[currentIndex].rating ? 'var(--accent)' : 'var(--dark-600)'}
                                />
                            ))}
                        </div>

                        <div className="testimonial-author">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="author-image"
                            />
                            <div className="author-info">
                                <h4>{testimonials[currentIndex].name}</h4>
                                <span>{testimonials[currentIndex].role}</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="testimonial-nav">
                <button className="nav-btn" onClick={goToPrev} aria-label="Previous testimonial">
                    <ChevronLeft size={20} />
                </button>

                <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <button className="nav-btn" onClick={goToNext} aria-label="Next testimonial">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
