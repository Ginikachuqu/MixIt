// interface IAppProps {
// }
// Essentials
import { useState, useContext, useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase.config";

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
  const [user, setUser] = useState(auth.currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(auth.currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      setUser(null)
      navigate('/')
    } catch (error) {
      console.log('Error logging out:', error)
    }
  }

  const tl = useRef();

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
        {user !== null ? (
          <button className='logout' onClick={handleSignOut}>Logout</button>
        ) : (
          <Link
            to={{ pathname: "/signup" }}
            onClick={() => setIsOpen(false)}
            className="cta"
          >
            <span>Sign In</span>
            <span className="arrow">
              <GrLinkNext />
            </span>
          </Link>
        )}
      </Links>
    </Wrapper>
  );
};

export default Sidebar;
