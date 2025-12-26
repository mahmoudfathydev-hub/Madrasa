import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../rdk/Slices/filtercategories";
import { setStyle } from "../../../rdk/Slices/iconSlice";
import "./CategoryFilterSection.scss";
import { CiGrid32 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";
import SortSelect from "./SortSelect/SortSelect";
import { useTranslation } from 'react-i18next';

export default function CategoryFilterSection() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    };

    const dispatch = useDispatch();
    const category = useSelector((state) => state.filterCategories.category);
    const style = useSelector((state) => state.style.style);

    const categories = ["all", "programming", "language", "videoEditing", "contentCreation", "eCommerce"];

    return (
        <div className="category-filter">
            <div className="container">
                <div className="categories">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => dispatch(setCategory(cat))}
                            className={category === cat ? "active" : ""}
                        >
                            {t(`categoryFilter.categories.${cat}`)}
                        </button>
                    ))}
                </div>

                <div className="grid-list">
                    <span
                        onClick={() => dispatch(setStyle("grid"))}
                        className={style === "grid" ? "gridactive" : ""}
                    >
                        <CiGrid32 />
                    </span>
                    <span
                        onClick={() => dispatch(setStyle("list"))}
                        className={style === "list" ? "listactive" : ""}
                    >
                        <FaListUl />
                    </span>

                    <SortSelect />
                </div>
            </div>
        </div>
    );
}
