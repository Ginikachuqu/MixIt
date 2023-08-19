// Essentials
import { useState, useEffect, useRef } from "react";
import { gsap, Power0, } from "gsap";

// Styles
import { Wrapper } from "./MarqueeLogo.styles";

// interface IAppProps {
// }

const MarqueeLogo: React.FunctionComponent<IAppProps> = (props) => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Animate the logo
    const logo = logoRef.current;
    gsap.set(logo, { x: "-100%" }); // Initial position

    const timeline = gsap.timeline({ repeat: -1 });
    timeline.to(logo, { x: "100%", duration: 3, ease: Power0.easeNone });
  }, []);

  return (
    <Wrapper>
      <div ref={logoRef} className="logo">
        MixIt
      </div>
    </Wrapper>
  );
};

export default MarqueeLogo;
