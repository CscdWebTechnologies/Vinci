import React from "react";
import Draft from "./components/Draft";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./Navbar";
import Wrapper from "./wrapper";
import Page from "./Page";
import Table from "./Table";
import Portfolio from "./Portfolio";
import Crypto from "./Crypto";

// The app component
const App = () => {
  return (
    <div>
      <Navbar />
      <Page />
	  <Table/>
	  <Portfolio/>
	  <Crypto/>
	  
      <Banner />
      <Draft />
      <Wrapper />
      <Footer />
    </div>
  );
};

export default App;
