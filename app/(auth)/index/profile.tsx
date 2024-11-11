import { View, Text } from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

const Profile = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    return (
        <View style={{ backgroundColor: theme.background, flex: 1 }}>
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;
