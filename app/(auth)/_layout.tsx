import React from "react";
import { Stack } from "expo-router";
import ModalHeader from "../components/ModalHeader";

const Layout = () => {
    return (
        <Stack initialRouteName="(tabs)">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="(modals)/location"
                options={{
                    presentation: "modal",
                    title: "Minha Localização",
                    header: () => <ModalHeader title="Minha Localização" />
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="(modals)/classInfo/[id]"
                options={{
                    presentation: "modal",
                    header: () => <ModalHeader title="Detalhes da Aula" />
                }}
            ></Stack.Screen>
        </Stack>
    );
};

export default Layout;
