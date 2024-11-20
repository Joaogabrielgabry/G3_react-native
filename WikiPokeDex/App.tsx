import React from "react";
import { Routes } from "./src/Routes";
import { FavoriteProvider } from "../WikiPokeDex/src/context/FavoriteContext/index";
import { AuthProvider } from "../WikiPokeDex/src/context/AuthContext/index";

export default function App() {
  return <AuthProvider>
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </AuthProvider>
  
}
