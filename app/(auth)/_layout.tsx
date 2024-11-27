import React from "react";
import { Stack } from "expo-router";
import ModalHeader from "../components/ModalHeader";

const Layout = () => {
    return (
        <Stack initialRouteName="index">
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
