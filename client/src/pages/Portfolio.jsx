import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Marketing'];

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600',
            description: 'A full-featured e-commerce platform with payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#'
        },
        {
            id: 2,
            title: 'Fitness Tracking App',
            category: 'Mobile',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
            description: 'Cross-platform fitness app with workout tracking.',
            technologies: ['React Native', 'Firebase', 'Redux'],
            link: '#'
        },
        {
            id: 3,
            title: 'Corporate Dashboard',
            category: 'UI/UX',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
            description: 'Analytics dashboard with real-time data visualization.',
            technologies: ['Figma', 'React', 'D3.js'],
            link: '#'
        },
        {
            id: 4,
            title: 'Restaurant Website',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
            description: 'Modern restaurant website with online ordering.',
            technologies: ['Next.js', 'Tailwind CSS', 'Sanity'],
            link: '#'
        },
        {
            id: 5,
            title: 'Social Marketing Campaign',
            category: 'Marketing',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600',
            description: 'Comprehensive social media marketing strategy.',
            technologies: ['Meta Ads', 'Analytics', 'Content Strategy'],
            link: '#'
        },
        {
            id: 6,
            title: 'Banking Mobile App',
            category: 'Mobile',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600',
            description: 'Secure mobile banking application.',
            technologies: ['Flutter', 'Firebase', 'Encryption'],
            link: '#'
        }
    ];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <motion.div
            className="page portfolio-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="container">
                    <motion.div
                        className="portfolio-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-badge">Our Work</span>
                        <h1>Featured <span className="gradient-text">Projects</span></h1>
                        <p>
                            Explore our portfolio of successful projects that showcase
                            our expertise and commitment to excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Projects */}
            <section className="section portfolio-main-section">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="portfolio-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div className="portfolio-grid" layout>
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="portfolio-card"
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="portfolio-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="portfolio-overlay">
                                            <span className="portfolio-category">{project.category}</span>
                                            <h3>{project.title}</h3>
                                            <button className="view-project">
                                                View Details <ExternalLink size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="portfolio-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="portfolio-modal"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>

                            <div className="modal-image">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>

                            <div className="modal-content">
                                <span className="modal-category">{selectedProject.category}</span>
                                <h2>{selectedProject.title}</h2>
                                <p>{selectedProject.description}</p>

                                <div className="modal-technologies">
                                    <h4>Technologies Used:</h4>
                                    <div className="tech-tags">
                                        {selectedProject.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <a href={selectedProject.link} className="modal-link" target="_blank" rel="noopener noreferrer">
                                    View Live Project <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Portfolio;
