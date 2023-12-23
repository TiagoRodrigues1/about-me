import React from "react";
import Home from "components/Home";
import About from "components/About";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

import { Route, Routes } from "react-router-dom";


/* TODO: 
        - Change icon and button color of theme switch
        - See what is happening with the event of the button. Sometimes the data-toggle-dark value is null
*/

function App() {
  return (
    <section>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;700&display=swap');
        </style>
      </head>
      <section className="section-body">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home title="Home | Tiago Rodrigues" />} />
        <Route
          path="/about"
          element={<About title="About | Tiago Rodrigues" />}
        />
        <Route path="*" element={<Home title="Home | Tiago Rodrigues" />} />
      </Routes>
      <Footer />
      </section>
    </section>
  );
}

export default App;
