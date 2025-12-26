import React, { useState } from 'react'
import './HeroBanner.scss'
import { useTranslation } from 'react-i18next'

export default function HeroBanner() {
    const { t, i18n } = useTranslation()
    const [currentLang, setCurrentLang] = useState(i18n.language)

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en'
        i18n.changeLanguage(newLang)
        setCurrentLang(newLang)
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl'
    }

    return (
        <div className="home-page">
            <div className="circle-bg big"></div>
            <div className="circle-bg mid"></div>
            <div className="circle-bg small"></div>

            <div className="container">
                <div className="hero-banner">
                    <h1>{t('hero.title')}</h1>
                    <p>{t('hero.description1')}</p>
                    <p>{t('hero.description2')}</p>
                    <div className="buttons">
                        <button className="button1">{t('hero.button1')}</button>
                        <button className="button2">
                            <span>{t('hero.button2')}</span>
                        </button>
                    </div>
                </div>

                <div className="img-container">
                    <img src="src/images/1.png" alt="main-img" />
                </div>
            </div>
        </div>
    )
}
