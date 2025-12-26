import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../../../../rdk/Slices/sortSlice";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
import { useTranslation } from 'react-i18next';
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd

export default function SortSelect() {
    const dispatch = useDispatch();
    const sortBy = useSelector((state) => state.sort.sortBy);
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

<<<<<<< HEAD
    const handlePriceClick = () => {
        dispatch(setSortBy(sortBy === "priceAsc" ? "priceDesc" : "priceAsc"));
        setOpen(false);
    };
=======
    const options = [
        { value: "price", labelKey: "categoryFilter.sort.price" },
        { value: "level", labelKey: "categoryFilter.sort.level" },
        { value: "rating", labelKey: "categoryFilter.sort.rating" },
    ];
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd

    return (
        <div className={`select ${open ? "open" : ""}`}>
            <div className="selected" onClick={() => setOpen(!open)}>
<<<<<<< HEAD
                <span>
                    {sortBy.startsWith("price")
                        ? t("categoryFilter.sort.price") +
                          (sortBy === "priceAsc" ? " 🔼" : " 🔽")
                        : t(`categoryFilter.sortBy.${sortBy}`)}
                </span>

=======
                <span>{t(`categoryFilter.sort.${sortBy}`)}</span>
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={`arrow ${open ? "open" : ""}`}
                >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </div>

            <div className="options">
<<<<<<< HEAD
                {/* PRICE */}
                <div className="option" onClick={handlePriceClick}>
                    {t("categoryFilter.sort.price")}
                    <span className="price-arrow">
                        {sortBy === "priceAsc" ? " 🔼" : " 🔽"}
                    </span>
                </div>

                {/* LEVEL */}
                <div
                    className="option"
                    onClick={() => {
                        dispatch(setSortBy("level"));
                        setOpen(false);
                    }}
                >
                    {t("categoryFilter.sortBy.level")}
                </div>

                {/* RATING */}
                <div
                    className="option"
                    onClick={() => {
                        dispatch(setSortBy("rating"));
                        setOpen(false);
                    }}
                >
                    {t("categoryFilter.sortBy.rating")}
                </div>
=======
                {options.map((opt) => (
                    <div key={opt.value}>
                        <input
                            type="radio"
                            name="sort"
                            id={opt.value}
                            checked={sortBy === opt.value}
                            onChange={() => dispatch(setSortBy(opt.value))}
                        />
                        <label
                            className="option"
                            htmlFor={opt.value}
                            onClick={() => setOpen(false)}
                        >
                            {t(opt.labelKey)}
                        </label>
                    </div>
                ))}
>>>>>>> e666e59fa9e87e264dc54df9f9508dcfd5b604fd
            </div>
        </div>
    );
}
