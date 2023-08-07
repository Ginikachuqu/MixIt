// Essentials
import { useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";

// Icons
import { AiFillGoogleCircle } from "react-icons/ai";

// Components
import Loader from "../loader/Loader";

// Styles
import { Button } from "./OAuth.styles";

interface OAuthProps {}

const OAuth: React.FunctionComponent<OAuthProps> = (props) => {
  const [loading, setLoading] = useState(false);

  const location = useLocation()
  return (
    <Button disabled={loading}>
      {loading === false ? (
        <div>
          <AiFillGoogleCircle />
          <span>Sign {location.pathname === "/signup" ? 'Up' : 'In'} with Google</span>
        </div>
      ) : (
        <Loader />
      )}
    </Button>
  );
};

export default OAuth;
