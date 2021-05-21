import React from "react";
import "../assets/styles/banner.css";

const Banner = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="banner__texts">
          <h2>$335B</h2>
          <p>Quarterly volume traded</p>
        </div>
        <div className="banner __texts">
          <h2>100+</h2>
          <p>Countries supported</p>
        </div>
        <div className="banner __texts">
          <h2>56+M</h2>
          <p>Verified users</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
