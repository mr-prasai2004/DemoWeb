import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    onClick,
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'left',
    className = '',
    ...props
}) => {
    const classes = `btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''} ${className}`;

    const content = (
        <>
            {loading && <span className="btn-spinner" />}
            {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
        </>
    );

    const motionProps = {
        whileHover: { scale: disabled ? 1 : 1.02 },
        whileTap: { scale: disabled ? 1 : 0.98 },
        transition: { duration: 0.2 }
    };

    if (to) {
        return (
            <motion.div {...motionProps}>
                <Link to={to} className={classes} {...props}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={classes}
            onClick={onClick}
            disabled={disabled || loading}
            {...motionProps}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
