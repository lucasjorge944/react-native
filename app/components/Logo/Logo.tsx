import React from "react";
import { View, Image } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import styles from "./styles";

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

type Props = {
    logo: string;
};

export default Logo;
