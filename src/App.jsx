import { Routes, Route } from 'react-router-dom';
import Login from './pages/LogIn/Login';
import Signup from './pages/SignUp/Signup';
import { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import AboutUs from './pages/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Pricing from './pages/Pricing/Pricing';
import { LanguageContext } from './LanguageContext';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Contact from './pages/Contact/Contact';

function App() {
  const { i18n } = useTranslation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [language, i18n]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
