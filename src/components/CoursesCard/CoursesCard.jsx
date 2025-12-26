import React from 'react';
import './CoursesCard.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CoursesCard({ course }) {
    const { t } = useTranslation();
    if (!course) return null;
    const { name, description, image, price, lessons, duration, isSale, categoryKey } = course;

    return (
        <div className={`course-card category-${categoryKey}`}>
            {isSale && <span className="sale-badge">Sale</span>}
            <div className="card-image">
                <img src={image} alt={name} />
                <span className="category-badge">{t(`translations.categories.${categoryKey}`, { defaultValue: categoryKey })}</span>
            </div>
            <div className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="card-meta">
                    <span>{lessons} Lessons</span>
                    <span>
                        {duration.hours}h {duration.minutes}m
                    </span>
                    <span>{price}</span>
                </div>
                <Link to={`/courses/${course.id}`} className="view-course-btn">
                    {t('hero.button2')}
                </Link>
            </div>
        </div>
    );
}
