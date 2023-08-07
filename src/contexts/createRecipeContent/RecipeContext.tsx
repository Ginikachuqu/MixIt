// Essentials
import { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [procedure, setProcedure] = useState([]);
  const [ingredientContent, setIngredientContent] = useState("");

  const addIngredient = () => {
    const newIngredient = {
      id: uuid(),
      name: "",
    };

    setIngredients([...ingredients, newIngredient]);
    // setIngredients((prev) => [...prev, newIngredient]);
    console.log(ingredients);
    console.log("Ingredient added!");
  };

  const addStep = () => {
    const newStep = {
      id: uuid(),
      name: "",
    };

    setProcedure((prev) => [...prev, newStep]);
    console.log(procedure);
    console.log("New step added!");
  };

  const removeIngredient = (id) => {
    setIngredients((ingredients) =>
      ingredients.filter((ingredient) => id !== ingredient.id)
    );
  };

  const removeStep = (id) => {
    setProcedure((procedure) => procedure.filter((step) => id !== step.id));
  };

  const handleInputChange = (e) => {
    setIngredientContent(e.target.textContent);
    console.log(ingredientContent);
  };

  return (
    <RecipeContext.Provider
      value={{
        ingredients,
        procedure,
        addIngredient,
        removeIngredient,
        addStep,
        removeStep,
        handleInputChange,
        ingredientContent
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
