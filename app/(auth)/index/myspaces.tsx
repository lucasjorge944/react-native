import { Text, ScrollView } from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

const MySpaces = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    return (
        <ScrollView style={{ backgroundColor: theme.background }}>
            <Text>Meus Espaços</Text>
        </ScrollView>
    );
};

export default MySpaces;
