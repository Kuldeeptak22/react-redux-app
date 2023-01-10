import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://www.seekpng.com/png/detail/134-1344280_add-items-to-cart-minimalist-shopping-cart.png"
          alt=""
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price : $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
