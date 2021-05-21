import React from "react";
import "./wrapper.css";

function wrapper() {
  return (
    <div className="foot">
      <div className="wrapper">
        <div>
          <h2>Earn up to $28 worth of crypto</h2>
          <p>
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself
          </p>
          <button className="btn">Start earning</button>
        </div>
        <div className="image">
          <img
            src="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default wrapper;
