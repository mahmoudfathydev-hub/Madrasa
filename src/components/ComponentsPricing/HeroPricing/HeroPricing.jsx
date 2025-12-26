import React from 'react';
import { useTranslation } from 'react-i18next';
import { pricingData } from '../../../data/pricingData';
import './HeroPricing.scss';

export default function HeroPricing() {
    const { t } = useTranslation();

    return (
        <div className="PricingContainer">
            {pricingData.map((plan) => (
                <div className="PricingCard" key={plan.id}>
                    <div className="PricingCard__border"></div>
                    <div className="PricingCard__titleContainer">
                        <span className="PricingCard__title">
                            {t(`pricingPlans.${plan.name}`)}
                        </span>
                        <p className="PricingCard__paragraph">
                            {plan.currency}
                            {plan.price} {t('pricingPlans.perMonth')}
                        </p>
                    </div>
                    <hr className="PricingCard__line" />
                    <ul className="PricingCard__list">
                        {t(`pricingPlans.features.${plan.name.toLowerCase()}`, { returnObjects: true }).map((feature, index) => (
                            <li className="PricingCard__listItem" key={index}>
                                <span className="PricingCard__check">
                                    <svg
                                        className="PricingCard__checkSvg"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <span className="PricingCard__listText">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="PricingCard__button">{t('hero.button1')}</button>
                </div>
            ))}
        </div>
    );
}
