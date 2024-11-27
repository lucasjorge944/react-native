import { lightTheme, darkTheme, PalleteProps } from "@/constants/Pallete";
import React, { createContext, useContext, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

export type ThemeProps = {
    theme?: PalleteProps;
    colorScheme?: ColorSchemeName;
    toggleTheme: (theme: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeProps>({ toggleTheme: () => {} });

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: any) => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(
        colorScheme === "dark" ? lightTheme : darkTheme
    );

    const toggleTheme = async (theme: "light" | "dark") => {
        setTheme(theme === "dark" ? darkTheme : lightTheme);
    };

    const value = {
        theme,
        colorScheme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
