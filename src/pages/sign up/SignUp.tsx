// Essentials
import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase.config";

// Styles
import { Wrapper } from "./SignUp.styles";

// Components
import OAuth from "../../components/OAuth/OAuth";
import Loader from "../../components/loader/Loader";

// Icons
import { AiOutlinePlus } from "react-icons/ai";

interface IAppProps {}

const SignUp: React.FunctionComponent<IAppProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
        console.log('user created successfully!')
      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
        followers: 0,
        following: 0
      });

      console.log(user)

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      console.log('User sent to firestore')
      setLoading(false)
      navigate('/')
    } catch (error) {
      console.log(error);
      setLoading(false);
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
              Your Culinary Passport Awaits! <br />
              Sign up to get started.
            </h2>
          </div>
          <div className="content__right-body">
            <form onSubmit={handleSubmit}>
              <div className="username">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter username"
                  autoComplete="none"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="enter__email">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="enter__password">
                <span>Enter Password</span>
                <input
                  type="password"
                  name="Password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="submit">
                <button disabled={loading}>
                  {loading === false ? (
                    <div>
                      <span>
                        <span>Create Account</span> <AiOutlinePlus />
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
                Already have an account?
                <Link to={{ pathname: "/signin" }}> Sign In</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
