import React, { createContext } from 'react';

export const ThemeContextHook = createContext();

export default function ThemeContext ({ children }) {
    const themeInfo = {
        isLightTheme: true,
        light: {color:'#555',ui:'#ddd',bg:'#eee'},
        dark: {color:'#ddd',ui:'#333',bg:'#555'}
    }
    return (
        <ThemeContextHook.Provider value={{...themeInfo}}>
           {children}
        </ThemeContextHook.Provider>
    )
}