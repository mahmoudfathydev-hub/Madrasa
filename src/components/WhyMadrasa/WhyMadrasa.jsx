import React, { useState } from 'react';
import './WhyMadrasa.scss';
import { useTranslation } from 'react-i18next';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';

export default function WhyMadrasa() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };

    const cards = t('whyMadrasa', { returnObjects: true });
    const images = { img2, img3, img4, img5, img6, img7 };
    const backColors = [
        '#7C3AED',
        '#4F46E5',
        '#EC4899',
        '#F59E0B',
        '#22C55E',
        '#3B82F6'
    ];

    return (
        <div className="why-madrasa-container">
            <div className="overlay-blur"></div>

            <div className="floating-shape"></div>

            <div className="container">
                <div className="cards-grid">
                    {cards.map((card, index) => {
                        const backColor = backColors[index % backColors.length];
                        return (
                            <div
                                className="flip-card"
                                key={index}
                                style={{ border: `3px solid ${backColor}` }}
                            >
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={images[card.image]} alt={card.title} />
                                        <h3>{card.title}</h3>
                                    </div>

                                    <div
                                        className="flip-card-back"
                                        style={{ backgroundColor: backColor }}
                                    >
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
