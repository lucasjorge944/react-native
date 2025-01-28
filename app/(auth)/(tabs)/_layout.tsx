import { Button } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { useAuth } from "@clerk/clerk-expo";

const Layout = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const { isSignedIn } = useAuth();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.tabBar.active,
                tabBarInactiveTintColor: theme.tabBar.text,
                tabBarStyle: {
                    backgroundColor: theme.tabBar.bg
                }
            }}
        >
            <Tabs.Screen
                name="myspaces"
                redirect={!isSignedIn}
                options={{
                    tabBarLabel: "Meus Espaços",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="person-pin-circle"
                            size={28}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="explore"
                redirect={!isSignedIn}
                options={{
                    tabBarLabel: "Explorar",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="search-location"
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                redirect={!isSignedIn}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="user-circle"
                            size={size}
                            color={color}
                        />
                    ),
                    headerRight: () => <Button title="Logout" />
                }}
            />
        </Tabs>
    );
};

export default Layout;
