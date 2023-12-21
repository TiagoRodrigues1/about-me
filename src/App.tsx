import React from "react";
import Home from "components/Home";
import About from "components/About";
import NotFound from "components/NotFound";
import NavBar from "components/NavBar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <section>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home title ="Home | Tiago Rodrigues"/>} />
        <Route path="/about" element={<About title ="About | Tiago Rodrigues" />} />
        <Route path ="*" element={<NotFound />} />
      </Routes>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;700&display=swap');
        </style>
      </head>
    </section>
  );
}

export default App;
