import React from "react";
import { View, SafeAreaView } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Location from "./components/Location";
import Search from "./components/Search";
import Chips from "./components/Chips";
import { Props } from "./types";
import { ChipProps } from "../Chip";
import styles from "./styles";

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

export default ExploreHeader;
