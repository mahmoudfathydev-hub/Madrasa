import React from "react";
import { useTranslation } from "react-i18next";
import coursesData from "../../../data/coursesData";
import "./CoursesCardSection.scss";

export default function CoursesCardSection() {
    const { t } = useTranslation();

    return (
        <div className="courses-section">
            <div className="courses-container">
                <div className="courses-list">
                    {coursesData.map((course) => (
                        <div className="course-item" key={course.id}>
                            <div className="course-image">
                                <img src={course.image} alt={t(course.nameKey)} />
                            </div>

                            <div className="course-info">
                                {/* ترجم الاسم والفئة */}
                                <h2>{t(course.nameKey)}</h2>
                                <h3>{t("courseCard.instructor")}</h3>
                                <h5>{t(course.categoryKey)}</h5>
                            </div>

                            <div className="course-stats">
                                <span className="duration">
                                    ⏱ {course.duration.hours}h{" "}
                                    {course.duration.minutes > 0 && `${course.duration.minutes}m`}
                                </span>
                                <span className="lessons">
                                    📘 {course.lessons} {t("courseCard.lessons")}
                                </span>
                                <span className="students">
                                    👨‍🎓 {course.students || 0} {t("courseCard.students")}
                                </span>
                            </div>

                            <div className="course-actions">
                                <button className="price-btn">
                                    {course.price === 0 ? t("courseCard.free") : `$${course.price}`}
                                </button>

                                <button className="register-btn">{t("courseCard.register")}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
