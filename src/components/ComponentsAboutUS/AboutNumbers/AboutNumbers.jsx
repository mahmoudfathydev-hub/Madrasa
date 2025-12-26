import React, { useState } from 'react';
import './AboutNumbers.scss';
import { useTranslation } from 'react-i18next';

export default function AboutNumbers() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };

    const numbers = t("ImportantNumbers.items", { returnObjects: true });

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='Important-numbers'>
            <div className="floating-shapes">
                <span className="shape shape1"></span>
                <span className="shape shape2"></span>
                <span className="shape shape3"></span>
                <span className="shape shape4"></span>
                <span className="shape shape5"></span>
                <span className="shape shape6"></span>
                <span className="shape shape7"></span>
                <span className="shape shape8"></span>
            </div>
            <div className="container">
                <div className="card-stack">
                    {numbers.map((item, index) => (
                        <div
                            key={index}
                            className={`card number-card ${index === activeIndex ? 'active' : ''}`}
                        >
                            {index === activeIndex ? (
                                <>
                                    <h2>{item.value}</h2>
                                    <h4>{item.label}</h4>
                                    <p>{item.desc}</p>
                                    <button
                                        className="card-btn"
                                        onClick={() => {
                                            const nextIndex = (activeIndex + 1) % numbers.length;
                                            setActiveIndex(nextIndex);
                                        }}
                                    >
                                        {t('ImportantNumbers.next')}
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="card-btn"
                                    onClick={() => setActiveIndex(index)}
                                >
                                    Click me
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
