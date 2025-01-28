import { View, Text, Image } from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import styles from "./styles";
import { PalleteProps } from "@/constants/Pallete";
import { Link } from "expo-router";

const Footer = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    return (
        <View>
            <Image
                source={require("@/assets/images/ftv-logo.png")}
                style={_styles.logo}
            />
            <View style={_styles.notMember}>
                <Text style={_styles.label}>Ja é membro?</Text>
                <Link href="/signin" style={_styles.register}>
                    Faça login!
                </Link>
            </View>
        </View>
    );
};

export default Footer;
