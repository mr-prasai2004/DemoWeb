import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';
import AayushImage from '../assets/images/IMG_2669.jpg';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Aayush Prasai',
            role: 'CEO & Founder',
            image: AayushImage,
            bio: 'Visionary leader with 10+ years in tech entrepreneurship',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com',
                github: 'https://github.com'
            }
        },
        {
            id: 2,
            name: 'Priya Sharma',
            role: 'Lead Developer',
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            bio: 'Full-stack expert specializing in React and Node.js',
            social: {
                linkedin: 'https://linkedin.com',
                github: 'https://github.com'
            }
        },
        {
            id: 3,
            name: 'Rajesh Thapa',
            role: 'UI/UX Designer',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            bio: 'Creative designer passionate about user experiences',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com'
            }
        },
        {
            id: 4,
            name: 'Anita Gurung',
            role: 'Marketing Director',
            image: 'https://randomuser.me/api/portraits/women/4.jpg',
            bio: 'Digital marketing strategist with proven results',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com'
            }
        },
        {
            id: 5,
            name: 'Bikash Rai',
            role: 'Backend Developer',
            image: 'https://randomuser.me/api/portraits/men/5.jpg',
            bio: 'Database and API specialist with cloud expertise',
            social: {
                linkedin: 'https://linkedin.com',
                github: 'https://github.com'
            }
        },
        {
            id: 6,
            name: 'Sita Poudel',
            role: 'Project Manager',
            image: 'https://randomuser.me/api/portraits/women/6.jpg',
            bio: 'Agile certified PM ensuring on-time delivery',
            social: {
                linkedin: 'https://linkedin.com'
            }
        }
    ];

    return (
        <motion.div
            className="page team-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="team-hero">
                <div className="container">
                    <motion.div
                        className="team-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-badge">Our Team</span>
                        <h1>Meet The <span className="gradient-text">Experts</span></h1>
                        <p>
                            Our talented team of developers, designers, and strategists
                            are dedicated to delivering exceptional results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section team-grid-section">
                <div className="container">
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="team-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="team-avatar">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p className="team-bio">{member.bio}</p>
                                    <div className="team-social">
                                        {member.social.linkedin && (
                                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                                <Twitter size={18} />
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                <Github size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="section join-team-section">
                <div className="container">
                    <div className="join-team-content">
                        <span className="section-badge">Careers</span>
                        <h2>Want to Join Our <span className="gradient-text">Team?</span></h2>
                        <p>
                            We're always looking for talented individuals who are passionate about
                            technology and innovation. Send us your resume and let's talk!
                        </p>
                        <div className="join-team-contacts">
                            <a href="mailto:aayuyhsprasai@gmail.com" className="contact-item">
                                <Mail size={20} />
                                <span>aayuyhsprasai@gmail.com</span>
                            </a>
                            <a href="tel:+9779869141840" className="contact-item">
                                <Phone size={20} />
                                <span>+977 9869141840</span>
                            </a>
                            <div className="contact-item">
                                <MapPin size={20} />
                                <span>Kathmandu, Nepal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Team;
