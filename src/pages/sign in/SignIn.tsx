// Essentials
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

// Components
import OAuth from "../../components/OAuth/OAuth";
import Loader from "../../components/loader/Loader";

// styles
import { Wrapper } from "./SignIn.styles";
// icons
import { FaDoorOpen } from "react-icons/fa";

interface IAppProps {}

const SignIn: React.FunctionComponent<IAppProps> = (props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setLoggingIn(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
        setLoading(false)
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
      setLoggingIn(false);
    }
  };

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
            <form onSubmit={onSubmit}>
              <div className= "email">
                <span>Email</span>
                <input
                  type="email"
                  name= "email"
                  id= "email"
                  placeholder="Enter email"
                  autoComplete="none"
                  onChange={onChange}
                />
              </div>
              <div className="enter__password">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={onChange}
                />
              </div>
              <div className="submit">
                <button disabled={loading}>
                  {loading === false ? (
                    <div>
                      <span>
                        <span>Login </span> <FaDoorOpen />
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
