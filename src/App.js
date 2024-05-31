import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemon/:name" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
