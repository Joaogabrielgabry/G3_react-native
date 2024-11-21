import React from 'react';
import {Routes} from './src/Routes';
import { AuthProvider } from './src/context/AuthContext';
import { FavoriteProvider } from './src/context/FavoriteContext';



export default function App() {
  return <AuthProvider>
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </AuthProvider>
}
