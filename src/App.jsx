import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
