import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import WhyMadrasa from '../../components/WhyMadrasa/WhyMadrasa'
import CoursesSection from '../../components/CoursesSection/CoursesSection'
import Testimonials from '../../components/Testimonials/Testimonials'
import Aspirations from '../../components/Aspirations/Aspirations'
import TeacherCard from '../../components/TeacherCard/TeacherCard'
import Footer from '../../components/Footer/Footer'
export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <WhyMadrasa />
            <CoursesSection />
            <Testimonials />
            <Aspirations />
            <TeacherCard />
            <Footer />
        </div>
    )
}


