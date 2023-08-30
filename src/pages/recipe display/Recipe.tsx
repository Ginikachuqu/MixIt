// Essentials
import { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { Body, Wrapper } from "./Recipe.styles";

// Icons
import { MdOutlineBookmarkAdd, MdVerified } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

// interface IAppProps {
// }

const Recipe: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <Wrapper>
        <div className="hero">
          <div className="hero__inner">
            <div className="hero__inner-left">
              <div className="badge">
                <MdVerified />
                <span>Bon Appetit</span>
              </div>
              <div className="recipe__name">
                <h1>Mishkaki-Style Strip Steak With Kachumber</h1>
              </div>
              <div className="recipe__author">
                <Link to={{ pathname: "/profile" }} className="author__name">
                  Zaynab Issa
                </Link>
                <span className="recipe__date">March 14, 2023</span>
              </div>
              <button className="cta">
                <MdOutlineBookmarkAdd />
                <span>Save Recipe</span>
              </button>
              <div className="rating">
                <div className="rating__stars">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="reviews__sum">
                  <span>(40)</span>
                </div>
              </div>
            </div>
            <div className="hero__inner-right">
              <div className="image__container">
                <img
                  src="../../../public/images/pexels-cottonbro-studio-4057736.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </Wrapper>
      <Body>
        <div className="body__inner">
          <div className="recipe__duration">
            <p>
              Total Time <span>45 minutes</span>
            </p>
          </div>

          <div className="recipe__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            temporibus odit accusamus impedit qui omnis aut labore consectetur
            ipsum saepe praesentium asperiores in iste optio consequuntur
            dolores, atque quaerat voluptatum quis incidunt odio neque vero quo!
            In ea magnam nesciunt autem omnis iste sit eum modi sed provident
            quidem distinctio, nihil voluptas rerum impedit eos neque quae odio.
            Eveniet aliquam fuga recusandae natus iusto voluptatum reprehenderit
            architecto temporibus cumque voluptate excepturi repudiandae dicta
            autem odit porro, omnis vero rerum adipisci atque, exercitationem
            cum nostrum minima! Tenetur ipsam velit aspernatur non molestias
            labore neque nesciunt natus eos. Beatae sed totam aliquam?
          </div>
        </div>
      </Body>
    </>
  );
};

export default Recipe;
