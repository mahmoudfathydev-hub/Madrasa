import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './AboutFeatures.scss';

export default function AboutFeatures() {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='aboutfeatures-section'>
            <div className="circle-bg big"></div>
            <div className="circle-bg mid1"></div>
            <div className="circle-bg mid2"></div>
            <div className="circle-bg small1"></div>
            <div className="circle-bg small2"></div>
            <div className="container">

                <motion.div
                    className="heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>{t('AboutFeatures.title')}</h2>
                    <h4>{t('AboutFeatures.desc')}</h4>
                </motion.div>

                <motion.div
                    className="aboutfeatures-cards"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t('AboutFeatures.cards', { returnObjects: true }).map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`aboutfeatures-card card-${index + 1}`}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <span className="icon">{card.icon}</span>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
