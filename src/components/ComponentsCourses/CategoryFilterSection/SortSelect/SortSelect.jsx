import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../../../../rdk/Slices/sortSlice";

import { useTranslation } from "react-i18next";



export default function SortSelect() {
    const dispatch = useDispatch();
    const sortBy = useSelector((state) => state.sort.sortBy);
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);


    const handlePriceClick = () => {
        dispatch(setSortBy(sortBy === "priceAsc" ? "priceDesc" : "priceAsc"));
        setOpen(false);
    };

    const options = [
        { value: "price", labelKey: "categoryFilter.sort.price" },
        { value: "level", labelKey: "categoryFilter.sort.level" },
        { value: "rating", labelKey: "categoryFilter.sort.rating" },
    ];


    return (
        <div className={`select ${open ? "open" : ""}`}>
            <div className="selected" onClick={() => setOpen(!open)}>
                <span>
                    {sortBy.startsWith("price")
                        ? t("categoryFilter.sort.price") +
                        (sortBy === "priceAsc" ? " 🔼" : " 🔽")
                        : t(`categoryFilter.sortBy.${sortBy}`)}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={`arrow ${open ? "open" : ""}`}
                >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </div>

            <div className="options">
                <div className="option" onClick={handlePriceClick}>
                    {t("categoryFilter.sort.price")}
                </div>
                <div
                    className="option"
                    onClick={() => {
                        dispatch(setSortBy("level"));
                        setOpen(false);
                    }}
                >
                    {t("categoryFilter.sortBy.level")}
                </div>
                <div
                    className="option"
                    onClick={() => {
                        dispatch(setSortBy("rating"));
                        setOpen(false);
                    }}
                >
                    {t("categoryFilter.sortBy.rating")}
                </div>
            </div >
        </div >
    );
}
