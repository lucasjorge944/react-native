import React from "react";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

import Search from "./Search";
import Chips from "./Chips";
import Tokens from "@/constants/Tokens";
import { ChipProps } from "@/types/Chips";
import Location from "./Location";

type Props = {
    onChipChanged: (chip: ChipProps) => void;
};

const ExploreHeader = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const onChipChanged = (chip: ChipProps) => {
        console.log("chip", chip);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
            <View style={_styles.container}>
                <Location />
                <Search />
                <Chips onChipChanged={onChipChanged} />
            </View>
        </SafeAreaView>
    );
};

const styles = (theme: PalleteProps) => {
    return StyleSheet.create({
        actionRow: {
            flexDirection: "row",
            paddingVertical: Tokens.spacing[12],
            paddingHorizontal: Tokens.spacing[12],
            gap: Tokens.spacing[12],
            width: "100%"
        },
        container: {
            height: Tokens.headerHeigth,
            paddingTop: Platform.select({
                ios: 0,
                android: 32
            }),
            backgroundColor: theme.background
        }
    });
};

export default ExploreHeader;
