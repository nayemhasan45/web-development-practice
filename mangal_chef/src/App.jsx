import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RecipeProvider } from './context/RecipeContext';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import RecipeCard from './components/RecipeCard';
import Sidebar from './components/Sidebar';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load recipes from JSON file
    const loadRecipes = async () => {
      try {
        const response = await fetch('/src/data/recipes.json');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error loading recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  return (
    <RecipeProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Banner />
        
        <OurRecipes>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recipe Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.recipe_id} recipe={recipe} />
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </OurRecipes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">🍽️ Mangal Chef</h3>
              <p className="text-gray-300 mb-6">
                Discover amazing recipes and transform your cooking experience
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#recipes" className="text-gray-300 hover:text-white transition-colors">
                  Recipes
                </a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#search" className="text-gray-300 hover:text-white transition-colors">
                  Search
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                © 2024 Mangal Chef. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </RecipeProvider>
  );
}

export default App;
