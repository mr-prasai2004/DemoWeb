import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, index = 0 }) => {
    return (
        <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
        >
            <div className="service-card-icon">
                {typeof Icon === 'string' ? (
                    <span className="service-emoji">{Icon}</span>
                ) : (
                    <Icon size={32} />
                )}
            </div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-description">{description}</p>
            <div className="service-card-glow" />
        </motion.div>
    );
};

export default ServiceCard;

