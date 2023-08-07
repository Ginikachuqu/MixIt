// Essentials
import { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper, TopSection, BottomSection } from "./UserProfile.styles";

// Icons
// import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPen, FaFacebook, } from "react-icons/fa";
import { GrInstagram, GrLocation, GrTwitter } from "react-icons/gr";

// Components
import { recipes } from "../../Recipe";
import DisplayCard from "../../components/display card/DisplayCard";
import RecipeCard from "../recipeCreator/RecipeCreator";

// interface IAppProps {
// }

const UserProfile: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Wrapper>
      <div className="wrapper__inner">
        <TopSection>
          <div className="top__section-inner">
            <div className="user">
              <div className="user__avatar">
                <img
                  src="../../../public/images/pexels-mo-eid-11798029.jpg"
                  alt="user avatar"
                />
              </div>
              <div className="user__info">
                <div className="user__name">
                  <h3>Blaise Johnson</h3>
                  <div className="followers__count">
                    <Link className="followers">
                      <span>3.5k</span>
                      <span>Followers</span>
                    </Link>
                    <Link className="following">
                      <span>45</span>
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
              <Link to={{ pathname: "/" }}>
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
    </Wrapper>
  );
};

export default UserProfile;