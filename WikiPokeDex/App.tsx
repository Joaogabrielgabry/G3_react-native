import React from 'react';
import { Routes } from './src/Routes';
import { AuthProvider } from './src/context/AuthContext';
import { FavoriteProvider } from './src/context/FavoriteContext';
import { CategoryProvider } from './src/context/CategoryContext';



export default function App() {
  return <AuthProvider>
    <FavoriteProvider>
      <CategoryProvider>
        <Routes />
      </CategoryProvider>
    </FavoriteProvider>

  </AuthProvider>
}
