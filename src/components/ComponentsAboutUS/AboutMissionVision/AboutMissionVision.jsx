import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutMissionVision.scss';

export default function AboutMissionVision() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const items = [
        { mission_en: "Empower learners", vision_en: "Top platform", mission_ar: "تمكين المتعلمين", vision_ar: "أفضل منصة" },
        { mission_en: "Accessible education", vision_en: "Global community", mission_ar: "تعليم متاح للجميع", vision_ar: "مجتمع عالمي" },
        { mission_en: "Bridge knowledge", vision_en: "Limitless learning", mission_ar: "جسر المعرفة", vision_ar: "تعلم بلا حدود" },
        { mission_en: "Equip students", vision_en: "Innovative education", mission_ar: "تجهيز الطلاب", vision_ar: "تعليم مبتكر" },
        { mission_en: "Engaging courses", vision_en: "Lifelong journey", mission_ar: "دورات مشوقة", vision_ar: "رحلة تعلم مستمرة" },
        { mission_en: "Real-world skills", vision_en: "Confident learners", mission_ar: "مهارات عملية", vision_ar: "متعلمين واثقين" },
        { mission_en: "Foster creativity", vision_en: "Future-ready skills", mission_ar: "تعزيز الإبداع", vision_ar: "مهارات جاهزة للمستقبل" },
        { mission_en: "Simple learning", vision_en: "Reach goals", mission_ar: "تعلم بسيط", vision_ar: "تحقيق الأهداف" },
        { mission_en: "Career growth", vision_en: "Connected community", mission_ar: "نمو مهني", vision_ar: "مجتمع متصل" },
        { mission_en: "Unlock potential", vision_en: "Tech education", mission_ar: "فتح الإمكانيات", vision_ar: "تعليم تقني" }
    ];

    return (
        <div className="about-mission-vision">
            <div className="heading">
                <h2>{t("AboutMissionVision.title")}</h2>
            </div>

            <div className="ticker-wrapper">
                <div className="ticker">
                    {items.concat(items).map((item, index) => (
                        <div className="ticker-item" key={index}>
                            <h3>{lang === 'ar' ? item.mission_ar : item.mission_en}</h3>
                            <p>{lang === 'ar' ? item.vision_ar : item.vision_en}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
