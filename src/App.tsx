import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const openCartHandler = () => {
    setIsCartOpen(true);
  };
  const closeCartHandler = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      {isCartOpen && <Cart closeCartHandler={closeCartHandler} />}
      <Header openCartHandler={openCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
