import React from "react";
import { Stack } from "expo-router";
import ModalHeader from "../shared/components/ModalHeader";
import { ThemeProps, useTheme } from "../context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

const Layout = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="(modals)/location"
                options={{
                    presentation: "modal",
                    title: "Minha Localização",
                    header: () => <ModalHeader />
                }}
            ></Stack.Screen>
        </Stack>
    );
};

export default Layout;
