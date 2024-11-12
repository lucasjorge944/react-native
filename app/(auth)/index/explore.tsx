import { Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader, { ChipType } from "../../shared/components/ExploreHeader";
import ListNearBy from "../../shared/components/ListNearBy";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { StatusBar } from "expo-status-bar";
import Tokens from "@/constants/Tokens";
import ListTopRatings from "@/app/shared/components/ListTopRatings";

const Explore = () => {
    const [chip, setChip] = useState<ChipType>({
        _id: "1",
        icon: false,
        initialText: "Espaços"
    });
    const onChipChanged = (chip: ChipType) => {
        setChip(chip);
    };
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;

    return (
        <ScrollView
            style={{ ...styles.container, backgroundColor: theme.background }}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar style="dark"></StatusBar>
            <Stack.Screen
                options={{
                    header: () => (
                        <ExploreHeader onChipChanged={onChipChanged} />
                    )
                }}
            />
            <View
                style={{
                    gap: Tokens.spacing[24],
                    paddingBottom: Tokens.spacing[24]
                }}
            >
                <ListNearBy />
                <ListTopRatings />
            </View>
            <Text>{chip?.initialText}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Tokens.headerHeigth,
        paddingTop: Tokens.spacing[24]
    }
});

export default Explore;
