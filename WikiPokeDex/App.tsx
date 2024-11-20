import React from 'react';
import {Routes} from './src/Routes';
import { AuthProvider } from '../WikiPokeDex/src/context/AuthContext';
import { FavoriteProvider } from '../WikiPokeDex/src/context/FavoriteContext';


export default function App() {
  return <AuthProvider>
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </AuthProvider>
}
