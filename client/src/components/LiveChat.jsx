import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minus, User, Bot } from 'lucide-react';
import './LiveChat.css';

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: 'Hi there! 👋 Welcome to WESELLIT. How can I help you today?',
            time: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage = {
            id: Date.now(),
            type: 'user',
            text: inputValue,
            time: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            const responses = [
                "Thank you for reaching out! Our team will get back to you shortly.",
                "That's a great question! Let me connect you with our team.",
                "We'd love to help you with that. Please provide more details.",
                "Thanks for your interest in our services! We'll be in touch soon."
            ];

            const botMessage = {
                id: Date.now() + 1,
                type: 'bot',
                text: responses[Math.floor(Math.random() * responses.length)],
                time: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="live-chat">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`chat-widget ${isMinimized ? 'minimized' : ''}`}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Chat Header */}
                        <div className="chat-header">
                            <div className="chat-header-info">
                                <div className="chat-avatar">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <span className="chat-title">WESELLIT Support</span>
                                    <span className="chat-status">
                                        <span className="status-dot"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <div className="chat-header-actions">
                                <button onClick={() => setIsMinimized(!isMinimized)} aria-label="Minimize">
                                    <Minus size={18} />
                                </button>
                                <button onClick={() => setIsOpen(false)} aria-label="Close">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Messages */}
                                <div className="chat-messages">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            className={`message ${message.type}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <div className="message-avatar">
                                                {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                                            </div>
                                            <div className="message-content">
                                                <p>{message.text}</p>
                                                <span className="message-time">{formatTime(message.time)}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input */}
                                <form className="chat-input" onSubmit={handleSendMessage}>
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                    <button type="submit" disabled={!inputValue.trim()} aria-label="Send">
                                        <Send size={18} />
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                className="chat-toggle"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle chat"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                {!isOpen && <span className="chat-badge">1</span>}
            </motion.button>
        </div>
    );
};

export default LiveChat;
