import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './TeacherCard.scss'

import fullstackdev from '../../images/fullstackdev.png';
import cybersecurity from '../../images/cybersecurity.png';
import dropshipping from '../../images/dropshipping.png';

export default function TeacherCard() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };

    const cards = t('doctors.cards', { returnObjects: true });
    const images = [
        fullstackdev,
        cybersecurity,
        cybersecurity,
        dropshipping,
        dropshipping
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <div className='doctors-sections'>
            <div className="container">
                <motion.div
                    className="heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>{t('doctors.title')}</h2>
                    <p>{t('doctors.descrption')}</p>
                </motion.div>

                <motion.div
                    className="doctors-card"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`card card-${index + 1}`}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <div className="card-image">
                                <img src={images[index]} alt={card.title} />
                            </div>
                            <div className="card-content">
                                <span className="card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p className="card-position">{card.position}</p>
                                <p className="card-description">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}