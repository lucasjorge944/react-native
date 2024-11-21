import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";

interface Props {
    logo: string;
}

const Logo = (props: Props) => {
    const { logo } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <View style={styles.logoWrapper}>
            <Image
                source={{
                    uri: logo
                }}
                style={styles.logo}
            ></Image>
        </View>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        logoWrapper: {
            width: 60,
            height: 60,
            borderRadius: Tokens.borderRadius[8],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderWidth: Tokens.borderWidth[1],
            borderColor: theme.border.thin
        },
        logo: {
            width: 60,
            height: 60,
            backgroundColor: "rgba(0,0,0,0.1)"
        }
    });
};

export default Logo;
