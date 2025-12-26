import React, { useState } from 'react'
import './footer.scss'
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };
    const linksPages = [
        { id: 1, name: t('nav.link1'), link: '/home' },
        { id: 2, name: t('nav.link2'), link: '/about-us' },
        { id: 3, name: t('nav.link3'), link: '/courses' },
        { id: 4, name: t('nav.link4'), link: '/pricing' },
        { id: 5, name: t('nav.link5'), link: '/contact' },
    ];
    const linksSections = [
        { id: 1, name: t('footer.link6'), link: '/home' },
        { id: 2, name: t('footer.link7'), link: '/about-us' },
        { id: 3, name: t('footer.link8'), link: '/courses' },
        { id: 4, name: t('footer.link9'), link: '/pricing' },
        { id: 5, name: t('footer.link10'), link: '/contact' },
        { id: 6, name: t('footer.link11'), link: '/contact' },
    ];
    return (
        <div className='footer'>
            <div className="container">
                <div className="top-footer">
                    <div className="col1">
                        <h3>{t('footer.title')}</h3>
                        <h5>{t('footer.description')}</h5>
                        <div className="icons">
                            <span><FaFacebookF /></span>
                            <span><FaInstagram /></span>
                            <span><FaTiktok /></span>
                        </div>
                    </div>
                    <div className="col2">
                        <h3>{t('footer.sections')}</h3>
                        {linksSections.map(link => (
                            <li key={link.id}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </div>
                    <div className="col3">
                        <h3>{t('footer.pages')}</h3>
                        {linksPages.map(link => (
                            <li key={link.id}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="bottom-footer">
                    <p>{t('footer.copyright')}. <span className='my-name'>{t('footer.creator')}</span> </p>
                </div>
            </div>
        </div>
    )
}
