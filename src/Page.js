import React from "react";
import "./page.css";
import Image from "./Image";

function Page() {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="landing__writeup">
          <a href="/" class="btc_arrow">
            <p>
              <i class="fab fa-btc"></i>
            </p>
            <p>Jump Start Your Portfolio</p>
            <p>
              <i class="fas fa-arrow-right"></i>
            </p>
          </a>
          <h1>
            Jump start <br /> your crypto <br /> portfolio
          </h1>
          <p class="paragraph">
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </p>
          <form>
            <div className="forms">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="forms">
              <input type="submit" placeholder="Get started" />
            </div>
          </form>
          <a href="/" className="terms">
            * Terms apply
          </a>
        </div>

        <div className="Image">
          <Image />
        </div>
      </div>
    </div>
  );
}

export default Page;
