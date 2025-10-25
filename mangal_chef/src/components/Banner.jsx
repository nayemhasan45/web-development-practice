const Banner = () => {
  return (
    <section 
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-96 md:h-[500px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Amazing Recipes
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            From traditional classics to modern fusion dishes, explore our collection of carefully curated recipes that will transform your cooking experience and delight your taste buds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3 rounded-lg font-semibold">
              Explore Now
            </button>
            <button className="btn-secondary text-lg px-8 py-3 rounded-lg font-semibold">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;