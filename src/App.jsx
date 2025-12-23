import { Routes, Route } from 'react-router-dom';
import Login from './pages/LogIn/Login';
import Signup from './pages/SignUp/Signup';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from './pages/Home/Home';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
