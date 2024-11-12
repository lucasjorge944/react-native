import {
    View,
    Text,
    TouchableOpacityProps,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
type CustomProps = {
    onPress?: () => void;
    children: React.ReactNode;
};
type Props = CustomProps & TouchableOpacityProps;
const ButtonIcon = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme, props);
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.icon}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const createStyles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            width: 36,
            height: 36,
            borderRadius: 8,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.buttonIcon.bg
        },
        icon: {
            color: theme.buttonIcon.color
        }
    });
};
export default ButtonIcon;
