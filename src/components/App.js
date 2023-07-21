import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Step 1: Initialize the state for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Step 2: Toggle the state when the button is clicked
  };

  const appClass = isDarkMode ? "App dark" : "App light"; // Step 3: Set the class based on the state

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
