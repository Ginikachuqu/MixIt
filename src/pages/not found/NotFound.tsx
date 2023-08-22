import { useState } from "react";
import { Link } from "react-router-dom";

// Video
import notFoundVideo from "../../assets/video/404 Error.mp4";

// Styles
import { Wrapper } from "./NotFound.styles";

// interface IAppProps {
// }

const NotFound: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Wrapper>
      <div className="content">
        <div className="video__container">
          <video src={notFoundVideo} muted autoPlay loop></video>
        </div>
        <Link to={{ pathname: "/" }}>Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;
