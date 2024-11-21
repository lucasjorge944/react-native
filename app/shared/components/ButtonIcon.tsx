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
    filled?: boolean;
};
type Props = CustomProps & TouchableOpacityProps;
const ButtonIcon = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme, props);
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                styles.container,
                props.filled ? styles.containerFilled : styles.default
            ]}
        >
            <Text
                style={[
                    styles.icon,
                    props.filled ? styles.iconFilled : styles.icon
                ]}
            >
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const createStyles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            width: 36,
            height: 36,
            borderRadius: 18,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        default: {
            backgroundColor: theme.buttonIcon.bg
        },
        containerFilled: {
            backgroundColor: theme.buttonIconFilled.bg
        },
        icon: {
            color: theme.buttonIcon.color
        },
        iconFilled: {
            color: theme.buttonIconFilled.color
        }
    });
};
export default ButtonIcon;
