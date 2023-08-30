// Essentials
import { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { Body, Comments, Sidebar, Wrapper } from "./Recipe.styles";

// Icons
import { MdOutlineBookmarkAdd, MdVerified } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { AiOutlineSend, AiOutlineClockCircle } from "react-icons/ai";

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
              <AiOutlineClockCircle /> <span>45 minutes</span>
            </p>
          </div>

          <div className="recipe__description">
            <div className="header">
              <h3>Recipe Description</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              temporibus odit accusamus impedit qui omnis aut labore consectetur
              ipsum saepe praesentium asperiores in iste optio consequuntur
              dolores, atque quaerat voluptatum quis incidunt odio neque vero
              quo! In ea magnam nesciunt autem omnis iste sit eum modi sed
              provident quidem distinctio, nihil voluptas rerum impedit eos
              neque quae odio. Eveniet aliquam fuga recusandae natus iusto
              voluptatum reprehenderit architecto temporibus cumque voluptate
              excepturi repudiandae dicta autem odit porro, omnis vero rerum
              adipisci atque, exercitationem cum nostrum minima! Tenetur ipsam
              velit aspernatur non molestias labore neque nesciunt natus eos.
              Beatae sed totam aliquam?
            </p>
          </div>

          <div className="ingredients">
            <div className="header">
              <h3>Ingredients</h3>
            </div>
            <span className="servings">4-6 Servings</span>
            <ul>
              <li>6 garlic cloves</li>
              <li>3 red Thai chiles, 2 coarsely chopped, 1 thinly sliced</li>
              <li>1/2 piece of ginger, peeled, coarsely chopped</li>
              <li>1 Tbsp, double-concentrated tomato paste</li>
              <li>1 samll red onion, finely chopped</li>
              <li>4 Tbsp. fresh lemon juice, divided</li>
            </ul>
          </div>

          <div className="procedure">
            <div>
              <span>Step 1</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                sit optio facere harum quae sapiente iure quas sed consectetur
                possimus unde cupiditate suscipit atque numquam, minus officia
                maxime id commodi reiciendis, eveniet deserunt iusto iste et
                facilis! Cum, voluptatum aperiam.
              </p>
            </div>
            <div>
              <span>Step 1</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                sit optio facere harum quae sapiente iure quas sed consectetur
                possimus unde cupiditate suscipit atque numquam, minus officia
                maxime id commodi reiciendis, eveniet deserunt iusto iste et
                facilis! Cum, voluptatum aperiam.
              </p>
            </div>
            <div>
              <span>Step 1</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                sit optio facere harum quae sapiente iure quas sed consectetur
                possimus unde cupiditate suscipit atque numquam, minus officia
                maxime id commodi reiciendis, eveniet deserunt iusto iste et
                facilis! Cum, voluptatum aperiam.
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="rating">
            <div className="noAuth">
              <p>
                <Link to={{ pathname: "/signin" }}>Sign In</Link> or{" "}
                <Link to={{ pathname: "/signup" }}>Sign Up</Link> to leave a
                rating!
              </p>
            </div>
            <div className="rate">
              <span>How would you rate this recipe?</span>
              <div>
                <span className="stars">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </span>
                <button>Submit Rating</button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <Comments>
            <div className="header">
              <IoChatboxOutline />
              <span>Comments</span>
            </div>
            <div className="body">
              <div className="comment">
                <div className="user__avatar-container">
                  <img
                    src="../../../public/images/foodiesfeed.com_fried-egg-avocado-open-sandwich.jpg"
                    alt="user avatar"
                  />
                </div>
                <div className="comment__info">
                    <div className="name">
                        <span className="display__name">Gudnix Great</span>
                        <span className="username">@theweirdchef</span>
                    </div>
                    <div className="timestamp">
                        <span>40 years ago</span>
                    </div>
                    <div className="comment__text">
                        This looks great!
                    </div>
                </div>
              </div>
              <div className="add__comment">
                <div className="user__avatar-container">
                  <img
                    src="../../../public/images/pexels-mo-eid-11798029.jpg"
                    alt=""
                  />
                </div>
                <div className="text__area">
                  <div className="text__area-inner">
                    <textarea rows="1" placeholder="Add a comment" />
                    <button>
                      <AiOutlineSend />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Comments>
        </div>
        <Sidebar>
          <button className="btn share">Share</button>
          <button className="btn share">Print</button>
        </Sidebar>
      </Body>
    </>
  );
};

export default Recipe;
