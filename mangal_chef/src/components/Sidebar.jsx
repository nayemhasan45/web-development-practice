import { useRecipeContext } from '../context/RecipeContext';

const Sidebar = () => {
  const {
    wantToCook,
    currentlyCooking,
    moveToPreparing,
    wantToCookTotalTime,
    wantToCookTotalCalories,
    currentlyCookingTotalTime,
    currentlyCookingTotalCalories,
  } = useRecipeContext();

  return (
    <div className="lg:sticky lg:top-20 space-y-6">
      {/* Want to Cook Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Want to Cook</h3>
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {wantToCook.length}
          </span>
        </div>
        
        {wantToCook.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No recipes selected yet</p>
        ) : (
          <div className="space-y-3">
            {wantToCook.map((recipe) => (
              <div key={recipe.recipe_id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                    {recipe.recipe_name}
                  </h4>
                  <button
                    onClick={() => moveToPreparing(recipe)}
                    className="btn-primary text-xs px-3 py-1 rounded-md ml-2 flex-shrink-0"
                  >
                    Preparing
                  </button>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{recipe.preparing_time}</span>
                  <span>{recipe.calories}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Want to Cook Totals */}
        {wantToCook.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">Total Time:</span>
              <span className="font-semibold text-primary-600">{wantToCookTotalTime} min</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="font-medium text-gray-700">Total Calories:</span>
              <span className="font-semibold text-primary-600">{wantToCookTotalCalories}</span>
            </div>
          </div>
        )}
      </div>

      {/* Currently Cooking Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Currently Cooking</h3>
          <span className="bg-secondary-100 text-secondary-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {currentlyCooking.length}
          </span>
        </div>
        
        {currentlyCooking.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No recipes being prepared</p>
        ) : (
          <div className="space-y-3">
            {currentlyCooking.map((recipe) => (
              <div key={recipe.recipe_id} className="border border-gray-200 rounded-lg p-3 bg-secondary-50">
                <div className="mb-2">
                  <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                    {recipe.recipe_name}
                  </h4>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{recipe.preparing_time}</span>
                  <span>{recipe.calories}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Currently Cooking Totals */}
        {currentlyCooking.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">Total Time:</span>
              <span className="font-semibold text-secondary-600">{currentlyCookingTotalTime} min</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="font-medium text-gray-700">Total Calories:</span>
              <span className="font-semibold text-secondary-600">{currentlyCookingTotalCalories}</span>
            </div>
          </div>
        )}
      </div>

      {/* Overall Summary */}
      {(wantToCook.length > 0 || currentlyCooking.length > 0) && (
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cooking Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">Total Recipes:</span>
              <span className="font-semibold text-gray-900">{wantToCook.length + currentlyCooking.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">Total Preparation Time:</span>
              <span className="font-semibold text-gray-900">{wantToCookTotalTime + currentlyCookingTotalTime} min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">Total Calories:</span>
              <span className="font-semibold text-gray-900">{wantToCookTotalCalories + currentlyCookingTotalCalories}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;