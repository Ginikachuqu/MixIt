// Essentials
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../../firebase.config'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

// Styles
import { Wrapper, TopSection, BottomSection } from "./UserProfile.styles";

// Icons
// import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPen, FaFacebook, } from "react-icons/fa";
import { GrInstagram, GrLocation, GrTwitter } from "react-icons/gr";
import { GiNotebook } from 'react-icons/gi'

// Components
import { recipes } from "../../Recipe";
import DisplayCard from "../../components/display card/DisplayCard";
import RecipeCard from "../recipeCreator/RecipeCreator";

// interface IAppProps {
// }

const UserProfile: React.FunctionComponent<IAppProps> = (props) => {
  const [user, setUser] = useState(null)
  const [userDetails, setUserDetails] = useState(null)

  // Get Current User
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  console.log(user)

  const fetchUserDetails = async () => {
    const docRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(docRef)

    try {
      if (docSnap.exists()) {
        setUserDetails(docSnap.data())
        console.log(userDetails)
      } else {
        console.log('No such document')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchUserDetails()
  }, [user])

  return (
    <Wrapper>
      <div className="wrapper__inner">
        <TopSection>
          <div className="top__section-inner">
            <div className="user">
              <div className="user__avatar">
                <img
                  src="../../../public/images/8825333.jpg"
                  alt="user avatar"
                />
              </div>
              <div className="user__info">
                <div className="user__name">
                  <h3>{user ? user.displayName : ''}</h3>
                  <div className="followers__count">
                    <Link className="followers">
                      <span>{user ? userDetails.followers : 0}</span>
                      <span>Followers</span>
                    </Link>
                    <Link className="following">
                      <span>{user ? userDetails.following : 0}</span>
                      <span>Following</span>
                    </Link>
                  </div>
                </div>
                <div className="user__bio">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam corporis mollitia, voluptate tempora quia
                    praesentium assumenda soluta impedit! Porro at, est impedit
                    laborum quae assumenda hic accusamus repudiandae nobis eius
                    accusantium incidunt aliquid nesciunt natus mollitia libero
                    tenetur saepe aut sit?
                  </p>
                </div>
                <div className="user__restrictions">
                  <div className="header">
                    <span>Your dietary restrictions and allergies</span>
                  </div>
                  <div className="body">
                    <ul>
                      <li>Lactose Intolerance</li>
                      <li>Diabetic</li>
                      <li>Kidney Disease</li>
                      <li>Obesity</li>
                      <span>+3 others</span>
                    </ul>
                  </div>
                </div>
                <div className="user__deet">
                  <div className="user__location">
                    <GrLocation />
                    <span>Abuja, Nigeria</span>
                  </div>
                  <div className="user__socials">
                    <Link to={{ pathname: "/" }}>
                      <FaFacebook />
                    </Link>
                    <Link to={{ pathname: "/" }}>
                      <GrTwitter />
                    </Link>
                    <Link to={{ pathname: "/" }}>
                      <GrInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit__tools">
              <Link to={{ pathname: "/edit-profile" }}>
                <FaPen />
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>
        </TopSection>
        <BottomSection>
          <div className="picker__slider">
            <div className="picker__slider-links">
              <Link to={{ pathname: "/" }} className="active">
                Your Recipes
              </Link>
              <Link to={{ pathname: "/" }}>Recipe Collection</Link>
              <Link to={{ pathname: "/" }}>Favourite Recipes</Link>
              <Link to={{ pathname: "/" }}>Meal Plans</Link>
              <Link to={{ pathname: "/" }}>Shopping Lists</Link>
            </div>
          </div>
          <div className="display__board">
            {recipes.length !== 0
              ? recipes.map((recipe) => (
                  <DisplayCard key={recipe.id} recipe={recipe} />
                ))
              : "Nothing Here"}
          </div>
        </BottomSection>
      </div>

      {/* Create Recipe Button */}
      <Link to={{pathname: '/create-recipe'}} className="create__recipe">
        <GiNotebook />
        <span>Create New Recipe</span>
      </Link>
    </Wrapper>
  );
};

export default UserProfile;
