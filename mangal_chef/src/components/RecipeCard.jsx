import { useState } from 'react';
import { useRecipeContext } from '../context/RecipeContext';

const RecipeCard = ({ recipe }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const { addToWantToCook } = useRecipeContext();

  const handleWantToCook = () => {
    addToWantToCook(recipe);
  };

  return (
    <div className="card p-6 hover:shadow-xl transition-all duration-300">
      {/* Recipe Image */}
      <div className="relative mb-4">
        <img
          src={recipe.recipe_image}
          alt={recipe.recipe_name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm font-medium text-gray-700">
          {recipe.preparing_time}
        </div>
      </div>

      {/* Recipe Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {recipe.recipe_name}
      </h3>

      {/* Short Description */}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {recipe.short_description}
      </p>

      {/* Ingredients Section */}
      <div className="mb-4">
        <button
          onClick={() => setShowIngredients(!showIngredients)}
          className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
        >
          <span>
            Ingredients ({recipe.ingredients.length} items)
          </span>
          <svg
            className={`w-4 h-4 transform transition-transform ${showIngredients ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {showIngredients && (
          <div className="mt-2 pl-2">
            <ul className="text-sm text-gray-600 space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Recipe Info */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {recipe.preparing_time}
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          {recipe.calories}
        </div>
      </div>

      {/* Want to Cook Button */}
      <button
        onClick={handleWantToCook}
        className="w-full btn-primary py-3 text-center font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default RecipeCard;