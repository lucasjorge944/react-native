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
                source={require("@/assets/images/ftv-logo.webp")}
                style={_styles.logo}
            />
            <View style={_styles.notMember}>
                <Text style={_styles.label}>Ainda não é membro?</Text>
                <Link
                    href="/(public)/register/stepOne"
                    style={_styles.register}
                >
                    Cadastre-se!
                </Link>
            </View>
        </View>
    );
};

export default Footer;
