import React from 'react'

import { MainSectionDiv, MainSectionDivTop, MainSectionDivBottom, MainSectionImageMobile, MainSectionImageDesktop } from './MainSection.style'
import heroImageDesktop from "../../assets/images/image-hero-desktop.png"
import heroImageMobile from "../../assets/images/image-hero-mobile.png"
import { Button } from '../nav/Nav.style'

const MainSection = () => {
  return (
    <MainSectionDiv>
        <MainSectionDivTop>
            <h1>Make <br /> remote work</h1>
            <p>Get your team in sync. no matter your location. Streamline processes, create team rituals and watch productivity soar.</p>

            <Button>Learn More</Button>
        </MainSectionDivTop>
        <MainSectionDivBottom>
            <MainSectionImageMobile src={heroImageMobile} alt="image-hero-mobile"/>
            <MainSectionImageDesktop src={heroImageDesktop} alt="image-hero-desktop"/>
        </MainSectionDivBottom>
    </MainSectionDiv>
  )
}

export default MainSection