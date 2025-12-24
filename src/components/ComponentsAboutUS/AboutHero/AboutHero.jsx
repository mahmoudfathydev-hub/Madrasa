import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaChevronLeft, FaCode } from "react-icons/fa";
import './AboutHero.scss';

export default function AboutHero() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };
    return (
        <div className="about-hero">
            <div className="container">
                <div className="heading1">
                    <h1>{t("AboutHero.title")}</h1>
                    <p>{t("AboutHero.text")}</p>
                </div>
                <div className="bottom-content">
                    <div className="col1">
                        <h5>{t("AboutHero.sidetext1")}</h5>
                        <p>{t("AboutHero.sidetext2")}</p>
                    </div>
                    <div className="mobile">
                        <div className="container-mobile">
                            <div className="mobile-frame">
                                <div className="sound-line1"></div>
                                <div className="sound-line2"></div>
                                <div className="sound-line3"></div>
                                <div className="notch">
                                    <div className="circle">
                                        <div className="dot"></div>
                                    </div>
                                </div>
                                <div className="chevron">
                                    <span className='ChevronLeft'><FaChevronLeft />
                                    </span>
                                </div>
                                <div className="heading2">
                                    <h1>{t("AboutHero.mobiletext1")}</h1>
                                    <p>{t("AboutHero.mobiletext2")}</p>
                                </div>
                                <div className="content-mobile">
                                    <div className="row1">
                                        <h2>{t("AboutHero.mobiletext3")}</h2>
                                        <span>{t("AboutHero.number1")}</span>
                                    </div>
                                    <div className="row2">
                                        <h2>{t("AboutHero.mobiletext4")}</h2>
                                        <span>{t("AboutHero.number2")}</span>
                                    </div>
                                    <div className="row3">
                                        <h2>{t("AboutHero.mobiletext5")}</h2>
                                        <span>{t("AboutHero.number3")}</span>
                                    </div>
                                </div>
                                <div className="footer-mobile">
                                    <h4>{t("AboutHero.mobiletext6")}</h4>
                                    <div className="services-mobile">
                                        <div className="services-mobile1">
                                            <span><FaCode /></span>
                                            <p>{t("AboutHero.mobiletext7")}</p>
                                        </div>
                                        <div className="services-mobile2">
                                            <span><GoDeviceCameraVideo /></span>
                                            <p>{t("AboutHero.mobiletext8")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <h5>{t("AboutHero.sidetext3")}</h5>
                        <p>{t("AboutHero.sidetext4")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
