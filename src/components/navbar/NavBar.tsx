// Essentials
import { useContext } from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper } from "./Navbar.styles";

// User Avatar
import user__avatar from "../../../public/images/pexels-mo-eid-11798029.jpg";

// Components
import Sidebar from "../sidebar/Sidebar";

// Context
import { SidebarContext } from "../../contexts/sidebarcontext/SidebarContext";
// interface IAppProps {
// }

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { isOpen, handleClose, setIsOpen } = useContext(SidebarContext);

  return (
    <>
      <Wrapper>
        <Link to={{pathname: '/'}} className="logo">MixIt</Link>
        <div className="other__half">
          <Link to={{pathname: '/profile'}} className="user__avatar-container">
            <img src={user__avatar} alt="user__avatar" />
          </Link>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className="line line__1"></div>
            <div className="line line__2"></div>
            <div className="line line__3"></div>
          </div>
        </div>
      </Wrapper>
      <Sidebar />
    </>
  );
};

export default App;
