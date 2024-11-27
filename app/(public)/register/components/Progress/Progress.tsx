import React from "react";
import { View } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import styles from "./styles";

const Progress = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    return (
        <View style={_styles.container}>
            <View style={[_styles.progress, { width: `${props.progress}%` }]} />
        </View>
    );
};

type Props = {
    progress: number;
};

export default Progress;
