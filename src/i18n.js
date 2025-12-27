import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import footer_en from "./locales/en/footer.json";
import footer_ar from "./locales/ar/footer.json";
import AboutHero_en from "./locales/en/AboutHero.json";
import AboutHero_ar from "./locales/ar/AboutHero.json";
import AboutMissionVision_en from "./locales/en/AboutMissionVision.json";
import AboutMissionVision_ar from "./locales/ar/AboutMissionVision.json";
import AboutFeatures_en from "./locales/en/AboutFeatures.json";
import AboutFeatures_ar from "./locales/ar/AboutFeatures.json";
import ContactUs_en from "./locales/en/ContactUs.json";
import ContactUs_ar from "./locales/ar/ContactUs.json";
import signup_en from "./locales/en/signup.json";
import signup_ar from "./locales/ar/signup.json";
import nav_en from "./locales/en/nav.json";
import nav_ar from "./locales/ar/nav.json";
import hero_en from "./locales/en/hero.json";
import hero_ar from "./locales/ar/hero.json";
import whyMadrasa_en from "./locales/en/whyMadrasa.json";
import whyMadrasa_ar from "./locales/ar/whyMadrasa.json";
import coursesPreview_en from "./locales/en/coursesPreview.json";
import coursesPreview_ar from "./locales/ar/coursesPreview.json";
import coursesData_en from "./locales/en/coursesData.json";
import coursesData_ar from "./locales/ar/coursesData.json";
import categoriesList_en from "./locales/en/categoriesList.json";
import categoriesList_ar from "./locales/ar/categoriesList.json";
import testimonials_en from "./locales/en/testimonials.json";
import testimonials_ar from "./locales/ar/testimonials.json";
import aspirations_en from "./locales/en/aspirations.json";
import aspirations_ar from "./locales/ar/aspirations.json";
import contactPage_en from "./locales/en/contactPage.json";
import contactPage_ar from "./locales/ar/contactPage.json";
import courseDetails_en from "./locales/en/courseDetails.json";
import courseDetails_ar from "./locales/ar/courseDetails.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                footer: footer_en.footer,
                AboutHero: AboutHero_en.AboutHero,
                AboutMissionVision: AboutMissionVision_en.AboutMissionVision,
                AboutFeatures: AboutFeatures_en.AboutFeatures,
                ContactUs: ContactUs_en.ContactUs,
                signup: signup_en.signup,
                nav: nav_en.nav,
                hero: hero_en.hero,
                whyMadrasa: whyMadrasa_en.whyMadrasa,
                coursesPreview: coursesPreview_en.coursesPreview,
                coursesData: coursesData_en.coursesData,
                categoriesList: categoriesList_en.categoriesList,
                testimonials: testimonials_en.testimonials,
                aspirations: aspirations_en.aspirations,
                contactPage: contactPage_en.contactPage,
                courseDetails: courseDetails_en.courseDetails,
            }
        },
        ar: {
            translation: {
                footer: footer_ar.footer,
                AboutHero: AboutHero_ar.AboutHero,
                AboutMissionVision: AboutMissionVision_ar.AboutMissionVision,
                AboutFeatures: AboutFeatures_ar.AboutFeatures,
                ContactUs: ContactUs_ar.ContactUs,
                signup: signup_ar.signup,
                nav: nav_ar.nav,
                hero: hero_ar.hero,
                whyMadrasa: whyMadrasa_ar.whyMadrasa,
                coursesPreview: coursesPreview_ar.coursesPreview,
                coursesData: coursesData_ar.coursesData,
                categoriesList: categoriesList_ar.categoriesList,
                testimonials: testimonials_ar.testimonials,
                aspirations: aspirations_ar.aspirations,
                contactPage: contactPage_ar.contactPage,
                courseDetails: courseDetails_ar.courseDetails,
            }
        }
    }
  });

export default i18n;
