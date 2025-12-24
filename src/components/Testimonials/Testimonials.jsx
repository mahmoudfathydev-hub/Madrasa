import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Testimonials.scss';

export default function Testimonials() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';


    const testimonialsData = t('testimonials', { returnObjects: true }) || [];
    const testimonials = [...testimonialsData].reverse();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
    };

    if (testimonials.length === 0) return null;

    const current = testimonials[currentIndex];

    return (
        <section className="testimonials-section">
            <div className="floating-symbols">
                {['<>', 'E', 'E', 'E', 'E', 'Ö', 'Ö', 'Ö', 'Ö', '✂', '✂', '✂', '✂'].map((sym, idx) => (
                    <span key={idx} className="floating-symbol">{sym}</span>
                ))}
            </div>

            <div className="container">
                <div className="section-header">
                    <h2>{isRtl ? 'ماذا يقول طلابنا' : 'What Our Students Say'}</h2>
                </div>

                <div className="testimonial-slider-container">
                    <div className="testimonial-card-wrapper">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.001 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="testimonial-card"
                            >
                                <div className="card-content">
                                    <div className="quote-icon">"</div>
                                    <p className="comment">{current.comment}</p>
                                    <div className="user-info">
                                        <h4 className="name">{current.name}</h4>
                                        <p className="job">{current.currentJob}</p>
                                        <div className="course-badge">{current.course}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="nav-controls">
                        <button className="nav-btn prev" onClick={() => paginate(-1)}>
                            <FiChevronLeft />
                        </button>
                        <div className="pagination-dots">
                            {testimonials.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                />
                            ))}
                        </div>
                        <button className="nav-btn next" onClick={() => paginate(1)}>
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
