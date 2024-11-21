import React from 'react';
import {Routes} from './src/Routes';
import { AuthProvider } from './src/Context/AuthContext';
import { FavoriteProvider } from './src/Context/FavoriteContext';



export default function App() {
  return <AuthProvider>
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </AuthProvider>
}
