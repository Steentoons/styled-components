import React from "react";

import {
  MainSectionDiv,
  MainSectionDivTop,
  MainSectionDivBottom,
  MainSectionImageMobile,
  MainSectionImageDesktop,
  CompanyLogosDiv,
  CompanyLogos,
} from "./MainSection.style";
import heroImageDesktop from "../../assets/images/image-hero-desktop.png";
import heroImageMobile from "../../assets/images/image-hero-mobile.png";
import { Button } from "../nav/Nav.style";

import companyLogo1 from "../../assets/images/client-databiz.svg";
import companyLogo2 from "../../assets/images/client-audiophile.svg";
import companyLogo3 from "../../assets/images/client-meet.svg";
import companyLogo4 from "../../assets/images/client-maker.svg";

const MainSection = () => {
  return (
    <MainSectionDiv>
      <MainSectionDivTop>
        <h1>
          Make <span>remote work</span>
        </h1>
        <p>
          Get your team in sync. no matter your location. Streamline processes,
          create team rituals and watch productivity soar.
        </p>

        <Button>Learn More</Button>

        <CompanyLogosDiv>
          <CompanyLogos src={companyLogo1} alt="data biz logo" />
          <CompanyLogos src={companyLogo2} alt="audio phile logo" />
          <CompanyLogos src={companyLogo3} alt="meet logo" />
          <CompanyLogos src={companyLogo4} alt="mark logo" />
        </CompanyLogosDiv>
      </MainSectionDivTop>
      <MainSectionDivBottom>
        <MainSectionImageMobile src={heroImageMobile} alt="image-hero-mobile" />
        <MainSectionImageDesktop
          src={heroImageDesktop}
          alt="image-hero-desktop"
        />
      </MainSectionDivBottom>
    </MainSectionDiv>
  );
};

export default MainSection;
