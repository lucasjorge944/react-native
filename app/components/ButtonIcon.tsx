import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet
} from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

const ButtonIcon = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                _styles.container,
                props.filled ? _styles.containerFilled : _styles.default
            ]}
        >
            <Text
                style={[
                    _styles.icon,
                    props.filled ? _styles.iconFilled : _styles.icon
                ]}
            >
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

type CustomProps = {
    onPress?: () => void;
    children: React.ReactNode;
    filled?: boolean;
};
type Props = CustomProps & TouchableOpacityProps;

const styles = (theme: PalleteProps) => {
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
