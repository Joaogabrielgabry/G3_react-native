import React from 'react';
import { Routes } from './src/Routes';
import { AuthProvider } from './src/Context/AuthContext';
import { FavoriteProvider } from './src/Context/FavoriteContext';
import { CategoryProvider } from './src/Context/CategoryContext';



export default function App() {
  return <AuthProvider>
    <FavoriteProvider>
      <CategoryProvider>
        <Routes />
      </CategoryProvider>
    </FavoriteProvider>

  </AuthProvider>
}
