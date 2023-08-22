// Essentials
import { useState, useEffect, useRef, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";

// Components

// Contexts
import { RecipeContext } from "../../contexts/createRecipeContent/RecipeContext";

// Icons
import { AiFillCamera, AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineBars4 } from "react-icons/hi2";

// Styles
import { Wrapper, Title, Ingredient, Steps } from "./RecipeCreator.styles";

// interface IRecipeCardProps {
// }

const RecipeCreator: React.FunctionComponent<IRecipeCreatorProps> = (props) => {
  const [files, setFiles] = useState([])
  const {
    ingredients,
    procedure,
    addIngredient,
    removeIngredient,
    addStep,
    removeStep,
    handleInputChange,
    ingredientContent,
  } = useContext(RecipeContext);

  const onDrop = useCallback((acceptedFiles) => {
    
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
  });

  return (
    <Wrapper>
      <main className="main__content">
        <div className="editor">
          <div className="image__uploader">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="drop__text">
                  <div className="icon">
                    <AiFillCamera />
                  </div>
                  <p>Upload meal photo</p>
                  <span>Show others your finished dish</span>
                </div>
              ) : (
                <div className="drop__text">
                  <div className="icon">
                    <AiFillCamera />
                  </div>
                  <p>Upload meal photo</p>
                  <span>Show others your finished dish</span>
                </div>
              )}
            </div>
          </div>

          <Title>
            <div className="title__content">
              <div className="title">
                <h1
                  contentEditable
                  suppressContentEditableWarning={true}
                  dir="auto"
                  spellCheck="true"
                  data-placeholder="My Favourite Jollof Rice Recipe"
                ></h1>
              </div>
              <div className="desc">
                <p
                  contentEditable
                  suppressContentEditableWarning={true}
                  dir="auto"
                  data-placeholder="Tell us a bit more about this delightful dish! What sparked your inspiration to cook it? What makes it an extraordinary culinary experience for you? Share your favorite way to enjoy it! Don't forget to mention and tag others with the '@' symbol to invite them into this delightful conversation."
                  spellCheck="true"
                ></p>
              </div>
            </div>

            <div className="recipe__servings">
              <div className="servings">
                <span>Serves</span>
                <div>
                  <span
                    contentEditable
                    suppressContentEditableWarning={true}
                    data-placeholder="2 people"
                  ></span>
                </div>
              </div>
              <div className="servings cook__time">
                <span>Cook time</span>
                <div>
                  <span
                    contentEditable
                    suppressContentEditableWarning={true}
                    data-placeholder="45mins"
                  ></span>
                </div>
              </div>
            </div>
          </Title>

          <Ingredient>
            <div className="ingredient__content">
              <div className="ingredient__content-header">
                <h1>Ingredients</h1>
              </div>
              <div className="ingredient__content-body">
                {ingredients.map((ingredient) => (
                  <div key={ingredient.id} className="ingredient__item">
                    <div className="drag__icon">
                      <HiOutlineBars4 />
                    </div>
                    <div className="ingredient__name">
                      <p
                        contentEditable
                        suppressContentEditableWarning={true}
                        onInput={handleInputChange}
                        data-placeholder="250g of flour"
                      >
                        {ingredient.name}
                      </p>
                    </div>
                    <div className="remove__icon">
                      <AiOutlineClose
                        onClick={() => removeIngredient(ingredient.id)}
                      />
                    </div>
                  </div>
                ))}

                <div className="controls">
                  <button onClick={addIngredient} className="add__ingredient">
                    <AiFillPlusCircle />
                    <span>Ingredient</span>
                  </button>
                </div>
              </div>
            </div>
          </Ingredient>

          <Steps>
            <div className="steps__content">
              <div className="steps__content-header">
                <h1>Procedure</h1>
              </div>
              <div className="steps__content-body">
                {procedure.map((step, index: number) => (
                  <div key={step.id} className="steps__item">
                    <div className="drag__icon">
                      <div className="counter__container">
                        <span>{index + 1}</span>
                      </div>
                      <HiOutlineBars4 />
                    </div>
                    <div className="steps__name">
                      <p
                        contentEditable
                        suppressContentEditableWarning={true}
                        data-placeholder="Mix the flour on water until they thicken"
                      >
                        {step.name}
                      </p>
                    </div>
                    <div className="remove__icon">
                      <AiOutlineClose onClick={() => removeStep(step.id)} />
                    </div>
                  </div>
                ))}

                <div className="controls">
                  <button onClick={addStep} className="add__step">
                    <AiFillPlusCircle />
                    <span>Step</span>
                  </button>
                </div>
              </div>
            </div>
          </Steps>

          {/* Publish Recipe*/}
          <button className="publish__button">
            <FaTelegramPlane />
            <span>Post Recipe</span>
          </button>
        </div>
      </main>
    </Wrapper>
  );
};

export default RecipeCreator;
