import React, { useState } from 'react';
import CoursesCard from '../CoursesCard/CoursesCard';
import './CoursesSection.scss';
import { useTranslation } from 'react-i18next';
import img8 from '../../images/8.png';
import img9 from '../../images/9.png';
import img10 from '../../images/10.png';
import img16 from '../../images/16.jfif';
import img17 from '../../images/17.jfif';
import img14 from '../../images/14.png';
import img13 from '../../images/13.jfif';
import img11 from '../../images/11.jfif';
import img12 from '../../images/12.jfif';
import img18 from '../../images/18.png';
import img19 from '../../images/19.jfif';
import img15 from '../../images/15.jfif';

const courseImages = [img8, img9, img10, img16, img17, img14, img13, img11, img18, img12, img19, img15];

export default function CoursesSection() {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(6);


    const courses = t('coursesData', { returnObjects: true }) || [];
    const translations = t('translations', { returnObjects: true }) || {};


    const categories = translations.categoriesList || [];

    const filteredCourses = !filter || filter === 'all'
        ? courses
        : courses.filter(course =>
            course.categoryKey &&
            course.categoryKey.toLowerCase().trim() === filter.toLowerCase().trim()
        );

    const displayedCourses = filteredCourses.slice(0, visibleCount);

    const handleShowMore = () => {
        if (visibleCount >= filteredCourses.length) {
            setVisibleCount(6);
        } else {
            setVisibleCount(filteredCourses.length);
        }
    };

    return (
        <section className="courses-section">
            <div className="container">
                <h2>{t('hero.description1')}</h2>

                <div className="filter-buttons">
                    {Array.isArray(categories) && categories.map(cat => (
                        <button
                            key={cat.id}
                            className={filter === cat.id ? 'active' : ''}
                            onClick={() => {
                                setFilter(cat.id);
                                setVisibleCount(6); 
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>


                <div className="courses-grid">
                    {Array.isArray(displayedCourses) &&
                        displayedCourses.map((course) => {
                            const imageIndex = (course.id - 1) % courseImages.length;
                            return (
                                <CoursesCard
                                    key={course.id}
                                    course={{
                                        ...course,
                                        name: translations[course.nameKey] || course.nameKey,
                                        description: translations[course.descriptionKey] || course.descriptionKey,
                                        image: courseImages[imageIndex],
                                        isSale: course.id <= 5 
                                    }}
                                />
                            );
                        })
                    }
                </div>

                {filteredCourses.length > 6 && (
                    <div className="show-more-container">
                        <button className="show-more-btn" onClick={handleShowMore}>
                            {visibleCount >= filteredCourses.length ? t('hero.showLess', { defaultValue: 'Show Less' }) : t('hero.showMore', { defaultValue: 'Show More' })}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
