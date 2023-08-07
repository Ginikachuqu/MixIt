// Essentials
import { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper, LeftSidebar, RightSidebar } from "./UserProfile.styles";

// Icons
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";

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
        <LeftSidebar>
          <div className="left__sidebar-inner">
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
                    <span className="followers">
                      <span>3.5k</span>
                      <span>Followers</span>
                    </span>
                    <span className="following">
                      <span>45</span>
                      <span>Following</span>
                    </span>
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
                <div className="user__location">
                  <span>Abuja, Nigeria</span>
                </div>
                <div className="user__socials">
                  <Link to={{ pathname: "/" }}>
                    <AiFillFacebook />
                  </Link>
                  <Link to={{ pathname: "/" }}>
                    <AiFillTwitterCircle />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </LeftSidebar>
        <RightSidebar>
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
        </RightSidebar>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
