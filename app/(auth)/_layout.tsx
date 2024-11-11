import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import ModalHeader from "../shared/components/ModalHeader";

const Layout = () => {
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
