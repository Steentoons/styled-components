import React from "react";

import NavLists from "../nav/NavLists";
import { MobileOverlayHolder, MobileOverlay} from "../nav/Nav.style";

const Overlay = () => {
  return (
    <MobileOverlayHolder>
      <MobileOverlay>
        <NavLists />
      </MobileOverlay>
    </MobileOverlayHolder>
  );
};

export default Overlay;
