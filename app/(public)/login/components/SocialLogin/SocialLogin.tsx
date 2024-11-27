import { View } from "react-native";
import React from "react";
import Button from "@/app/components/Button";
import { router } from "expo-router";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import styles from "./styles";

const SocialLogin = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const onAuthGoogle = () => {
        router.push("/google");
    };

    const onAuthFacebook = () => {
        router.push("/facebook");
    };

    return (
        <View style={_styles.container}>
            <Button
                onPress={onAuthGoogle}
                text="Google"
                backgroundColor={theme.google}
            >
                <AntDesign
                    name="googleplus"
                    size={20}
                    color={theme.button.primary.text}
                />
            </Button>
            <Button
                onPress={onAuthFacebook}
                text="Facebook"
                backgroundColor={theme.facebook}
            >
                <FontAwesome6
                    name="facebook"
                    size={20}
                    color={theme.button.primary.text}
                />
            </Button>
        </View>
    );
};

export default SocialLogin;
