import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            title: 'Team Collaboration',
            category: 'Office'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            title: 'Strategy Meeting',
            category: 'Events'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
            title: 'Client Presentation',
            category: 'Events'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
            title: 'Creative Workspace',
            category: 'Office'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
            title: 'Board Meeting',
            category: 'Events'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
            title: 'Tech Team',
            category: 'Office'
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
            title: 'Project Planning',
            category: 'Work'
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800',
            title: 'Team Building',
            category: 'Events'
        },
        {
            id: 9,
            src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
            title: 'Coding Session',
            category: 'Work'
        },
        {
            id: 10,
            src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
            title: 'Team Celebration',
            category: 'Events'
        },
        {
            id: 11,
            src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800',
            title: 'Modern Office',
            category: 'Office'
        },
        {
            id: 12,
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            title: 'Data Analysis',
            category: 'Work'
        }
    ];

    const handlePrev = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedImage(galleryImages[prevIndex]);
    };

    const handleNext = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[nextIndex]);
    };

    return (
        <motion.div
            className="page gallery-page"
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
                    <h1>Our <span className="gradient-text">Gallery</span></h1>
                    <p>
                        Take a glimpse into our work culture, team activities,
                        and memorable moments at BSEduTech.
                    </p>
                </motion.div>
            </section>

            {/* Gallery Grid */}
            <section className="section gallery-section">
                <div className="container">
                    <div className="gallery-masonry">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className={`gallery-item ${index % 5 === 0 ? 'large' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <img src={image.src} alt={image.title} />
                                <div className="gallery-overlay">
                                    <span className="gallery-category">{image.category}</span>
                                    <h4>{image.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                            <X size={28} />
                        </button>

                        <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                            <ChevronLeft size={32} />
                        </button>

                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage.src} alt={selectedImage.title} />
                            <div className="lightbox-info">
                                <span>{selectedImage.category}</span>
                                <h3>{selectedImage.title}</h3>
                            </div>
                        </motion.div>

                        <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                            <ChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Gallery;
