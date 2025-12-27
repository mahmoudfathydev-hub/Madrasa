import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';

const Contact = () => {
    const { t } = useTranslation('contactPage');

    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-header">
                    <h1>{t('title')}</h1>
                    <p>{t('description')}</p>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">{t('form.name')}</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('form.email')}</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('form.message')}</label>
                            <textarea id="message"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">{t('form.submit')}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
