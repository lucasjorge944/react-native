import React from "react";
import { Stack, Tabs } from "expo-router";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { ThemeProps, useTheme } from "../context/ThemeContext";

const Layout = () => {
    const { theme } = useTheme() as ThemeProps;
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen
                name="register"
                options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
                name="(modals)/google"
                options={{ presentation: "modal", title: "Logar com Google" }}
            ></Stack.Screen>
            <Stack.Screen
                name="(modals)/facebook"
                options={{ presentation: "modal", title: "Logar com Facebook" }}
            ></Stack.Screen>
        </Stack>
    );
};

export default Layout;
