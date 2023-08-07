// Essentials
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Components
import OAuth from "../../components/OAuth/OAuth";
import Loader from "../../components/loader/Loader";

// styles
import { Wrapper } from "./SignIn.styles";
// icons
import { AiOutlineEnter } from "react-icons/ai";

interface IAppProps {}

const SignIn: React.FunctionComponent<IAppProps> = (props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <Wrapper>
      <div className="content">
        <div className="content__left"></div>
        <div className="content__right">
          <div className="content__right-header">
            <h1>MixIt</h1>
            <h2>
              You're Back, and We're Pumped! <br />
              Sign in and Savor the Culinary Magic.
            </h2>
          </div>
          <div className="content__right-body">
            <form>
              <div className="username">
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  autoComplete="none"
                  ref={usernameRef}
                />
              </div>
              <div className="enter__password">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  ref={passwordRef}
                />
              </div>
              <div className="submit">
                <button disabled={loading}>
                  {loading === false ? (
                    <div>
                      <span>
                        <span>Login </span> <AiOutlineEnter />
                      </span>
                    </div>
                  ) : (
                    <Loader />
                  )}
                </button>
              </div>
            </form>

            <div className="demarcate">
              <span className="line"></span>
              <span className="text">or</span>
              <span className="line"></span>
            </div>
            <OAuth />

            <div className="transfer">
              <span>
                Don't have an account?{" "}
                <Link to={{ pathname: "/signup" }}>Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
