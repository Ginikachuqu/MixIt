// Essentials
import { useState, createContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { gsap } from "gsap";

export const EditProfileContext = createContext();

const EditProfileProvider = ({ children }) => {
  const [allergies, setAllergies] = useState([]);
  const [restrictions, setRestrictions] = useState([]);
  const [allergyContent, setAllergyContent] = useState("");
  const [showItem, setShowItem] = useState(false);

  const animateItem = (itemId) => {
    // const newItemSelector = `.allergy__item[data-item-id="${itemId}"]`
    setShowItem(true);
    gsap
      .from(itemId, {
        yPercent: 20,
        opacity: 0,
        duration: .3,
        ease: "Power3.out",
      })
      .to(itemId, {
        yPercent: 0,
        opacity: 1,
        duration: .3,
        ease: "Power3.out",
      });
  };

  const addAllergy = (e) => {
    e.preventDefault()

    const newAllergy = {
      id: uuid(),
      name: "",
    };

    setAllergies([...allergies, newAllergy]);
    
    // setIngredients((prev) => [...prev, newIngredient]);
    console.log("Allergy added!");
  };

  const addRestriction = (e) => {
    e.preventDefault()
    
    const newRestriction = {
      id: uuid(),
      name: "",
    };

    setRestrictions((prev) => [...prev, newRestriction]);
    console.log(restrictions);
    console.log("New restriction added!");
  };

  const removeAllergy = (id) => {
    setAllergies((allergies) =>
      allergies.filter((allergy) => id !== allergy.id)
    );
  };

  const removeRestriction = (id) => {
    setRestrictions((restriction) => restriction.filter((restriction) => id !== restriction.id));
  };

  const handleInputChange = (e) => {
    setAllergyContent(e.target.textContent);
    console.log(allergyContentContent);
  };

  return (
    <EditProfileContext.Provider
      value={{
        allergies,
        restrictions,
        addAllergy,
        showItem,
        removeAllergy,
        addRestriction,
        removeRestriction,
        handleInputChange,
        allergyContent
      }}
    >
      {children}
    </EditProfileContext.Provider>
  );
};

export default EditProfileProvider;
