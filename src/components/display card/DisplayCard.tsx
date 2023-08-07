// Essentials
import { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper } from "./DisplayCard.styles";

// Icons

// interface IAppProps {
// }

const DisplayCard: React.FunctionComponent<IAppProps> = ({ recipe }) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${recipe.image})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="wrapper__inner">
        <div className="recipe__details">
            <span className="recipe__name">
                <Link to={{pathname: '/'}}>{recipe.name}</Link>
            </span>
            <span className="author__name">
                <Link to={{pathname: '/'}}>{recipe.authorName}</Link>
            </span>
        </div>
        <div className="stats"></div>
      </div>
    </Wrapper>
  );
};

export default DisplayCard;
