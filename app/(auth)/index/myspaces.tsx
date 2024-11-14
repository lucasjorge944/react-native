import { Text, ScrollView, SafeAreaView, Platform, View } from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import ListMyClasses from "@/app/shared/components/ListMyClasses";
import { Stack } from "expo-router";
import MySpacesHeader from "@/app/shared/components/MySpacesHeader";
import ListMyReservations from "@/app/shared/components/ListMyReservations";
import ListMyPlans from "@/app/shared/components/ListMyPlans";

const MySpaces = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <ScrollView
            style={{
                flex: 1,
                marginTop: Tokens.headerMySpacesHeight,
                backgroundColor: theme.background
            }}
            showsVerticalScrollIndicator={false}
        >
            <Stack.Screen
                options={{
                    header: () => <MySpacesHeader />
                }}
            />
            <View
                style={{
                    gap: Tokens.spacing[24],
                    paddingBottom: Tokens.spacing[24]
                }}
            >
                <ListMyPlans />
                <ListMyClasses />
                <ListMyReservations />
            </View>
        </ScrollView>
    );
};

const createStyles = (theme: PalleteProps) => {
    return {
        container: {}
    };
};

export default MySpaces;
