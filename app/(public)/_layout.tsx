import React from "react";
import { router, Stack } from "expo-router";
import ButtonIcon from "../components/ButtonIcon";
import { FontAwesome6 } from "@expo/vector-icons";
import Tokens from "@/constants/Tokens";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="login/index" options={{ headerShown: false }} />
            <Stack.Screen
                name="register"
                options={{
                    headerTitle: "",
                    headerTransparent: true,
                    headerLeft: () => {
                        return (
                            <ButtonIcon filled={true} onPress={router.back}>
                                <FontAwesome6
                                    name="chevron-left"
                                    size={Tokens.buttonIcon.fontSize}
                                />
                            </ButtonIcon>
                        );
                    }
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="signup/index"
                options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
                name="signin/index"
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
