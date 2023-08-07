// Essentials
import { useContext } from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper } from "./Item.styles";

// Icons
import { AiFillLike } from "react-icons/ai";

// interface IAppProps {
// }

const Item: React.FunctionComponent<IAppProps> = ({ recipe }) => {
  // Truncate Notes
  const truncateString: string = (str: string, num: number) => {
    if (num >= str.length) {
      return str;
    } else if (num <= 15) {
      return str.slice(0, num - 3) + "...";
    } else {
      return str.slice(0, num - 3) + "...";
    }
  };

  return (
    <Wrapper>
      <Link className="recipe__container">
        <div className="recipe__container-image">
          <div className="image__container">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          {/* <span className="desc">Trending This Week</span> */}
        </div>
        <div className="recipe__container-info">
          <div className="recipe__details">
            <div className="name">
              <p className="title">{truncateString(recipe.name, 23)}</p>
              <div className="chef">
                <Link>
                  <div className="chef__image">
                    <img src={recipe.image} alt={recipe.authorName} />
                  </div>
                  <div className="details">
                    <span className="chef__name">{recipe.authorName}</span>
                    <span className="upload__time">11 Hours ago</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="reactions">
              <button>
                Add To Collection
                <span className="total__saves">
                  <span>{recipe.collectionCount}</span>
                </span>
              </button>
              <div className="reaction__like">
                <AiFillLike />
                <span className="like__count">
                  <span>{recipe.likeCount}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Item;
