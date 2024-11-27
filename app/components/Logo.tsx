import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";

const Logo = (props: Props) => {
    const { logo } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    return (
        <View style={_styles.logoWrapper}>
            <Image
                source={{
                    uri: logo
                }}
                style={_styles.logo}
            ></Image>
        </View>
    );
};

const styles = (theme: PalleteProps) => {
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

type Props = {
    logo: string;
};

export default Logo;
