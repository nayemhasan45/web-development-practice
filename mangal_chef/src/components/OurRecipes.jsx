const OurRecipes = ({ children }) => {
  return (
    <section id="recipes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recipes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse collection of mouth-watering recipes crafted with love and passion. 
            Each dish tells a story of tradition, innovation, and culinary excellence that will inspire your next kitchen adventure.
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default OurRecipes;