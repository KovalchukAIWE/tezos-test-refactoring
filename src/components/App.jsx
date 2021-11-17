import React from "react";
import { BrowserRouter } from "react-router-dom";
import Provider from "../context/BlocksContext";
import Navigation from "../router";
import Footer from "./Footer";

const App = () => (
  <BrowserRouter>
    <Provider>
      <Navigation />
      <Footer />
    </Provider>
  </BrowserRouter>
);

export default App;
