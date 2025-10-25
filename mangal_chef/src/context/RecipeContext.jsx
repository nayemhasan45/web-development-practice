import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const RecipeContext = createContext();

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider');
  }
  return context;
};

export const RecipeProvider = ({ children }) => {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const addToWantToCook = (recipe) => {
    // Check if recipe already exists in wantToCook
    const exists = wantToCook.some(item => item.recipe_id === recipe.recipe_id);
    
    if (exists) {
      toast.warning(`${recipe.recipe_name} is already in your Want to Cook list!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setWantToCook(prev => [...prev, recipe]);
    toast.success(`${recipe.recipe_name} added to Want to Cook!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const moveToPreparing = (recipe) => {
    // Remove from wantToCook
    setWantToCook(prev => prev.filter(item => item.recipe_id !== recipe.recipe_id));
    
    // Add to currentlyCooking
    setCurrentlyCooking(prev => [...prev, recipe]);
    
    toast.info(`${recipe.recipe_name} moved to Currently Cooking!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Calculate total preparation time
  const getTotalPreparationTime = (recipes) => {
    return recipes.reduce((total, recipe) => {
      const time = parseInt(recipe.preparing_time);
      return total + (isNaN(time) ? 0 : time);
    }, 0);
  };

  // Calculate total calories
  const getTotalCalories = (recipes) => {
    return recipes.reduce((total, recipe) => {
      const calories = parseInt(recipe.calories);
      return total + (isNaN(calories) ? 0 : calories);
    }, 0);
  };

  const wantToCookTotalTime = getTotalPreparationTime(wantToCook);
  const wantToCookTotalCalories = getTotalCalories(wantToCook);
  const currentlyCookingTotalTime = getTotalPreparationTime(currentlyCooking);
  const currentlyCookingTotalCalories = getTotalCalories(currentlyCooking);

  const value = {
    wantToCook,
    currentlyCooking,
    addToWantToCook,
    moveToPreparing,
    wantToCookTotalTime,
    wantToCookTotalCalories,
    currentlyCookingTotalTime,
    currentlyCookingTotalCalories,
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};