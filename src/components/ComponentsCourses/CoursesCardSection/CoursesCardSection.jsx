<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import coursesData from "../../../data/coursesData";
import "./CoursesCardSection.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
=======
import React from "react";
import { useTranslation } from "react-i18next";
import coursesData from "../../../data/coursesData";
import "./CoursesCardSection.scss";
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd

export default function CoursesCardSection() {
    const { t } = useTranslation();

<<<<<<< HEAD
    const category = useSelector((state) => state.filterCategories.category);
    const sortBy = useSelector((state) => state.sort.sortBy);
    const style = useSelector((state) => state.style.style);

    const [currentPage, setCurrentPage] = useState(1);

    const coursesPerPage = 20;

    // رجّع الصفحة 1 عند تغيير الفلتر أو الترتيب
    useEffect(() => {
        setCurrentPage(1);
    }, [category, sortBy]);

    // فلترة + ترتيب (الجزء المهم)
    const processedCourses = useMemo(() => {
        let result =
            category === "all"
                ? [...coursesData]
                : coursesData.filter(
                    (course) => course.categoryKey === category
                );

        switch (sortBy) {
            case "priceAsc":
                result.sort((a, b) => a.price - b.price);
                break;

            case "priceDesc":
                result.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;

            case "level":
                result.sort((a, b) => a.level - b.level);
                break;

            default:
                break;
        }

        return result;
    }, [category, sortBy]);

    // Pagination
    const totalPages = Math.ceil(processedCourses.length / coursesPerPage);

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

    const currentCourses = processedCourses.slice(
        indexOfFirstCourse,
        indexOfLastCourse
    );

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="courses-section">
            <div className="courses-container">
                <div className={`courses-list ${style}`}>
                    {currentCourses.map((course) => (
                        <div className="course-item" key={course.id}>
                            <div className="course-image">
                                <img
                                    src={course.image}
                                    alt={t(`translations.${course.nameKey}`)}
                                />
                            </div>

                            <div className="course-info">
                                <h2>{t(`translations.${course.nameKey}`)}</h2>
                                <h3>
                                    {t(`instructors.${course.instructorKey}`)}
                                </h3>
                                <h5>
                                    {t(
                                        `categoryFilter.categories.${course.categoryKey}`
                                    )}
                                </h5>
                            </div>

                            <div className="course-stats">
                                <span>
                                    ⏱ {course.duration.hours}h{" "}
                                    {course.duration.minutes > 0 &&
                                        `${course.duration.minutes}m`}
                                </span>
                                <span>
                                    📘 {course.lessons}{" "}
                                    {t("courseCard.lessons")}
                                </span>
                                <span>
                                    👨‍🎓 {course.students}{" "}
                                    {t("courseCard.students")}
=======
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
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd
                                </span>
                            </div>

                            <div className="course-actions">
                                <button className="price-btn">
<<<<<<< HEAD
                                    {course.price === 0
                                        ? t("courseCard.free")
                                        : `$${course.price}`}
                                </button>
                                <button className="register-btn">
                                    {t("courseCard.register")}
                                </button>
=======
                                    {course.price === 0 ? t("courseCard.free") : `$${course.price}`}
                                </button>

                                <button className="register-btn">{t("courseCard.register")}</button>
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd
                            </div>
                        </div>
                    ))}
                </div>
<<<<<<< HEAD

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            onClick={() =>
                                handlePageChange(currentPage - 1)
                            }
                            disabled={currentPage === 1}
                        >
                            <FaAngleLeft />
                        </button>

                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={
                                    currentPage === page ? "active" : ""
                                }
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                handlePageChange(currentPage + 1)
                            }
                            disabled={currentPage === totalPages}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                )}
=======
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd
            </div>
        </div>
    );
}
