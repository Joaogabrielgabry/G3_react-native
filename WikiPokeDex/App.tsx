import React from "react";
import { Routes } from "./src/Routes";
import { FavoriteProvider } from "../WikiPokeDex/src/context/FavoriteContext/index";

export default function App() {
  return <FavoriteProvider>
        <Routes />
    </FavoriteProvider>
}
