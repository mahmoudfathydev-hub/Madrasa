import HeroBanner from '../../components/HeroBanner/HeroBanner'
import WhyMadrasa from '../../components/WhyMadrasa/WhyMadrasa'
import CoursesSection from '../../components/CoursesSection/CoursesSection'
import Testimonials from '../../components/Testimonials/Testimonials'
import Aspirations from '../../components/Aspirations/Aspirations'
import TeacherCard from '../../components/TeacherCard/TeacherCard'

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <WhyMadrasa />
            <CoursesSection />
            <Testimonials />
            <Aspirations />
            <TeacherCard />
        </div>
    )
}


