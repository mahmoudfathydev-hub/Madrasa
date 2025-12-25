import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaInstagram, FaChevronRight } from "react-icons/fa";
import './AboutCTA.scss';
import Fiveimg from '../../../images/5.png';
export default function AboutCTA() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        setCurrentLang(i18n.language); 
        setRotate(i18n.language === 'ar' ? 180 : 0);
    }, [i18n.language])
    return (
        <div className='about-CTA-section'>
            <div className="container">
                <div className="content-container">
                    <h2>{t('AboutCTA.title')}</h2>
                    <p>{t('AboutCTA.subtitle')}</p>
                    <button className='AboutCTA-btn'>
                        <Link to="/courses">
                            {t('AboutCTA.btn')}
                            <FaChevronRight
                                style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s ease' }}
                            />
                        </Link>
                    </button>
                    <div className="icons">
                        <span><FaFacebookF /></span>
                        <span>
                            <Link to="https://www.tiktok.com/@eng_ma7moud_fat7y?is_from_webapp=1&sender_device=pc" target="_blank">
                                <FaTiktok />
                            </Link>
                        </span>
                        <span><FaInstagram /></span>
                    </div>
                </div>
                <div className="img-container">
                    <img src={Fiveimg} alt="content-creater" />
                </div>
                <div className="dev">
                    <p>{t('AboutCTA.dev')}</p>
                </div>
            </div>
        </div>
    )
}
