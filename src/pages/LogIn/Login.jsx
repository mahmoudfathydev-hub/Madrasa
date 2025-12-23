import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login.scss';

export default function Login() {
    const { t, i18n } = useTranslation();
    const [rememberMe, setRememberMe] = React.useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };

    return (
        <div className="log-in-page">
            <div className="triangle-bg"></div>
            <div className="triangle-bg second"></div>
            <div className="triangle-bg third"></div>

            <div className="container form">
                <div className="heading">
                    <div className="heading-button">
                        <h1><span>{t('login.title')}</span></h1>
                        <button type="button" onClick={toggleLanguage}>
                            {i18n.language === 'en' ? 'عربي' : 'English'}
                        </button>
                    </div>
                    <p>{t('login.subtitle')}</p>
                </div>

                <form>
                    <div className="input-group" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                        <div className="input-wrapper">
                            <MdEmail className="input-icon" />
                            <input type="email" required placeholder={t('login.email')} />
                        </div>

                        <div className="input-wrapper">
                            <FaLock className="input-icon" />
                            <input type="password" required placeholder={t('login.password')} />
                        </div>
                    </div>
                </form>

                <div className="extra-content">
                    <div className="remember">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="rememberMe">{t('login.rememberMe')}</label>
                    </div>
                    <Link to="/forgot-password">{t('login.forgotPassword')}</Link>
                </div>

                <button type="submit" className="signin">{t('login.signin')}</button>

                <div className="question">
                    <p>{t('login.question')}</p>
                    <Link to="/signup">{t('login.signup')}</Link>
                </div>
            </div>
        </div>
    );
}
