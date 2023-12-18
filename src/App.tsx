import React from "react";
import NavBar from "components/NavBar";
import Home from "components/Home";


function App() {
  return (
    <section>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;700&display=swap');
        </style>
      </head>
      <NavBar />
      <Home/>
    </section>
  );
}

export default App;
