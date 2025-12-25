import React from 'react'
import AboutHero from '../../components/ComponentsAboutUS/AboutHero/AboutHero'
import AboutMissionVision from '../../components/ComponentsAboutUS/AboutMissionVision/AboutMissionVision'
import AboutFeatures from '../../components/ComponentsAboutUS/AboutFeatures/AboutFeatures'
import AboutNumbers from '../../components/ComponentsAboutUS/AboutNumbers/AboutNumbers'
import AboutTeam from '../../components/ComponentsAboutUS/AboutTeam/AboutTeam'
import AboutCTA from '../../components/ComponentsAboutUS/AboutCTA/AboutCTA'

export default function AboutUs() {
    return (
        <div>
            <AboutHero />
            <AboutMissionVision />
            <AboutFeatures />
            <AboutNumbers />
            <AboutTeam />
            <AboutCTA />
        </div>
    )
}
