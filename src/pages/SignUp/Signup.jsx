import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss';

export default function Signup() {
    const { t, i18n } = useTranslation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const navigate = useNavigate();

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const getPasswordStrength = (pass) => {
        if (pass.length >= 10) return { label: t('signup.strong'), color: 'green', width: '100%' };
        if (pass.length >= 8) return { label: t('signup.medium'), color: 'orange', width: '70%' };
        if (pass.length > 0) return { label: t('signup.weak'), color: 'red', width: '33%' };
        return { label: '', color: 'transparent', width: '0%' };
    };

    const strength = getPasswordStrength(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="Signup-page">
            <div className="Signup-triangle Signup-triangle-primary"></div>
            <div className="Signup-triangle Signup-triangle-secondary"></div>
            <div className="Signup-triangle Signup-triangle-tertiary"></div>

            <div className="Signup-container">
                <div className="Signup-heading">
                    <div className="Signup-heading-top">
                        <h1><span>{t('signup.title')}</span></h1>
                        <button type="button" onClick={toggleLanguage}>
                            {currentLang === 'en' ? 'عربي' : 'English'}
                        </button>
                    </div>
                    <p>{t('signup.subtitle')}</p>
                </div>

                <form className="Signup-form" onSubmit={handleSubmit}>
                    <div className="Signup-input-group" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        <div className="Signup-name-group">
                            <div className="Signup-input-wrapper">
                                <MdEmail className="Signup-input-icon" />
                                <input type="text" required placeholder={t('signup.fname')} />
                            </div>
                            <div className="Signup-input-wrapper">
                                <MdEmail className="Signup-input-icon" />
                                <input type="text" required placeholder={t('signup.lname')} />
                            </div>
                        </div>

                        <div className="Signup-input-wrapper">
                            <MdEmail className="Signup-input-icon" />
                            <input type="email" required placeholder={t('signup.email')} />
                        </div>

                        <div className="Signup-input-wrapper Signup-password-wrapper">
                            <FaLock className="Signup-input-icon" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder={t('signup.password')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="Signup-eye-icon" onClick={toggleShowPassword}>
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>

                        {password.length > 0 && (
                            <div className="Signup-password-strength">
                                <div
                                    className="Signup-strength-bar"
                                    style={{ backgroundColor: strength.color, width: strength.width }}
                                ></div>
                                <span className="Signup-strength-label">{strength.label}</span>
                            </div>
                        )}

                        <div className="Signup-input-wrapper Signup-password-wrapper">
                            <FaLock className="Signup-input-icon" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder={t('signup.confirmPassword')}
                            />
                            <span className="Signup-eye-icon" onClick={toggleShowPassword}>
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>

                    </div>

                    <button type="submit" className="Signup-button">{t('signup.signupButton')}</button>
                </form>

                <div className="Signup-question">
                    <p>{t('signup.question')}</p>
                    <Link to="/">{t('signup.login')}</Link>
                </div>
            </div>
        </div>
    );
}
