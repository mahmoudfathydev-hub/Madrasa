import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoPersonCircleSharp } from "react-icons/io5";
import './Navbar.scss';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };

    const links = [
        { id: 1, name: t('nav.link1'), link: '/home' },
        { id: 2, name: t('nav.link2'), link: '/about-us' },
        { id: 3, name: t('nav.link3'), link: '/courses' },
        { id: 4, name: t('nav.link4'), link: '/pricing' },
        { id: 5, name: t('nav.link5'), link: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container">

                <div className="logo">
                    <h3>{t('nav.logo')}</h3>
                </div>

                <div className={`links ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        {links.map(link => (
                            <li key={link.id} onClick={() => setMenuOpen(false)}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="right-section">
                    <button onClick={toggleLanguage}>
                        {currentLang === 'en' ? 'عربي' : 'English'}
                    </button>
                    <span><IoPersonCircleSharp /></span>

                    {/* Burger */}
                    <div
                        className={`burger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
        </nav>
    );
}
