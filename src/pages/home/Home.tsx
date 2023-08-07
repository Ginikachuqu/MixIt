// Essentials
import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { recipes, recommendedRecipes, veganRecipes } from "../../Recipe";

// Styles
import { Wrapper } from "./Home.styles";

// Components
import Item from "../../components/item/Item";

// Images
import heroVideo from "../../assets/video/heroVid.mp4";

import { AiOutlineArrowRight } from "react-icons/ai";

// interface IAppProps {
// }

const Home: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Wrapper>
      <section className="hero">
        <div className="hero__content">
          <div className="hero__content-left">
            <div className="video__container">
              <video src={heroVideo} muted autoPlay loop></video>
            </div>
          </div>
          <div className="hero__content-right">
            <div className="copy">
              <h1>Unlock the Art of Culinary Mastery: MixIt's Recipe Portal</h1>
              <p>
                Unleash your culinary genius with MixIt's recipe portal, <br />
                the ultimate destination for aspiring food artists and <br />
                seasoned experts alike.
              </p>
            </div>
            <div className="search__recipe">
              <form>
                <div className="search__container">
                  <input
                    type="text"
                    placeholder="Explore Epicurean Delights. Begin Searching!"
                  />
                </div>
                <button className="search__button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Available Recipes */}
      <section className="recipe__dashboard">
        <div className="recipe__dashboard-header">
          <h2>Daily dishes, endless culinary inspiration!</h2>
          <p>
            Unlock the secret to effortless meals that are both quick and
            budget-friendly <br />
            with our shoppable recipes!
          </p>
        </div>
        <div className="recipe__dashboard-body">
          {/* Newest recipes */}
          <Link className="header">
            <h3>Newest Recipes</h3>
            <span>
              Elevate your taste buds with our latest culinary creations
            </span>
          </Link>
          <div className="recipe__dashboard-body-content">
            {recipes.length !== 0
              ? recipes.map((recipe) => <Item recipe={recipe} />)
              : null}
          </div>
          <Link className="footer"><span>See more</span> <AiOutlineArrowRight /></Link>

          {/* Recommended Recipes */}
          <Link className="header">
            <h3>Recommended Recipes</h3>
            <span>
            Culinary Gems Handpicked for You
            </span>
          </Link>
          <div className="recipe__dashboard-body-content">
            {recommendedRecipes.length !== 0
              ? recommendedRecipes.map((recipe) => <Item recipe={recipe} />)
              : null}
          </div>
          <Link className="footer"><span>See more</span> <AiOutlineArrowRight /></Link>

          {/* Vegan Recipes */}
          <Link className="header">
            <h3>Vegan Recipes</h3>
            <span>
            Savor the Magic of Vegan Cuisine: Unveiling Our Latest Delicacies
            </span>
          </Link>
          <div className="recipe__dashboard-body-content">
            {veganRecipes.length !== 0
              ? veganRecipes.map((recipe) => <Item recipe={recipe} />)
              : null}
          </div>
          <Link className="footer"><span>See more</span> <AiOutlineArrowRight /></Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
