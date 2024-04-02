const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="../public/images/flipkart.png" alt="Flipkart" />
            <img src="../public/images/amazon.png" alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="shoe">
        <img src="../public/images/shoe_image.png" alt="shoe-img" />
      </div>
      <div className="hero-img "></div>
    </main>
  );
};
export default Hero;
