// interface IAppProps {
// }
// Essentials
import { useContext, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

// Icons
import {
  GrClose,
  GrFacebook,
  GrTwitter,
  GrInstagram,
  GrLinkNext,
} from "react-icons/gr";

// Styles
import { Wrapper, Links } from "./Sidebar.styles";
import { SidebarContext } from "../../contexts/sidebarcontext/SidebarContext";
import { FaFacebook } from "react-icons/fa";

const Sidebar: React.FunctionComponent<IAppProps> = (props) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const tl = useRef()

  // useLayoutEffect(() => {

  // }, [])

  return (
    <Wrapper open={isOpen}>
      <header>
        <div className="close__icon" onClick={() => setIsOpen(!isOpen)}>
          <GrClose />
        </div>
      </header>
      <Links>
        <ul>
          <li>
            <Link to="/">Recipes & Menus</Link>
          </li>
          <li>
            <Link to="/">Join the Community</Link>
          </li>
          <li>
            <Link to="/">FAQs</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
        <div className="media__links">
          <div className="ins">
            <span>Follow MixIt</span>
          </div>
          <div className="links">
            <span className="link__fb">
              <Link to="#">
                <FaFacebook />
              </Link>
            </span>
            <span className="link__tw">
              <Link to="#">
                <GrTwitter />
              </Link>
            </span>
            <span className="link__in">
              <Link to="#">
                <GrInstagram />
              </Link>
            </span>
          </div>
        </div>
        <Link to={{pathname: '/signup'}} onClick={() => setIsOpen(false)} className="cta">
          <span>Sign In</span>
          <span className="arrow">
            <GrLinkNext />
          </span>
        </Link>
      </Links>
    </Wrapper>
  );
};

export default Sidebar;
