import React from "react";
import Draft from "./components/Draft";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./Navbar";
import Wrapper from "./wrapper";
import Page from "./Page";

// The app component
const App = () => {
  return (
    <div>
      <Navbar />
      <Page />
      <Banner />
      <Draft />
      <Wrapper />
      <Footer />
    </div>
  );
};

export default App;
