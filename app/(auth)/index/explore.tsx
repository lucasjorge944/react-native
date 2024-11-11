import { Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader, { ChipType } from "../../shared/components/ExploreHeader";
import ListNearBy from "../../shared/components/ListNearBy";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { StatusBar } from "expo-status-bar";

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
        >
            <StatusBar style="dark"></StatusBar>
            <Stack.Screen
                options={{
                    header: () => (
                        <ExploreHeader onChipChanged={onChipChanged} />
                    )
                }}
            />
            <ListNearBy />
            <Text>{chip?.initialText}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150,
        paddingTop: 30
    }
});

export default Explore;
