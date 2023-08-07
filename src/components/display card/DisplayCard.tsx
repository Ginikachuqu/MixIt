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
    <Link
      to={{ pathname: "/" }}
      style={{
        height: '190px',
        maxWidth: '200px',
        borderRadius: '.045rem',
      }}
    >
      <Wrapper
        style={{
          backgroundImage: `url(${recipe.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay"></div>
        <div className="wrapper__inner">
          <div className="recipe__details">
            <span className="recipe__name">
              <Link to={{ pathname: "/" }}>{recipe.name}</Link>
            </span>
            <span className="author__name">
              <Link to={{ pathname: "/" }}>{recipe.authorName}</Link>
            </span>
          </div>
          <div className="stats"></div>
        </div>
      </Wrapper>
    </Link>
  );
};

export default DisplayCard;
