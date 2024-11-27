import { Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ListNearBy from "../../components/ListNearBy";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import ListTopRatings from "@/app/components/ListTopRatings";
import { ChipProps } from "@/types/Chips";
import ExploreHeader from "@/app/components/ExploreHeader/ExploreHeader";

const Explore = () => {
    const [chip, setChip] = useState<ChipProps>({
        _id: "1",
        icon: false,
        initialText: "Espaços"
    });
    const onChipChanged = (chip: ChipProps) => {
        setChip(chip);
    };
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;

    return (
        <ScrollView
            style={{ ...styles.container, backgroundColor: theme.background }}
            showsVerticalScrollIndicator={false}
        >
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
