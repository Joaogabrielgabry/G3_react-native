import React from "react";
import { Routes } from "./src/Routes";
import { FavoriteProvider } from "../WikiPokeDex/src/Context/FavoriteContext/index";
import { AuthProvider } from "../WikiPokeDex/src/Context/AuthContext/index";

export default function App() {
  return <AuthProvider>
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </AuthProvider>
  
}
