import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import Tokens from "@/constants/Tokens";
import { useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

type Props = {
    initialText: string;
    filled?: boolean;
    icon?: boolean;
    onPress?: () => void;
};

const Chip = (props: Props) => {
    const hookTheme = useTheme();
    const theme = hookTheme.theme as PalleteProps;
    const { initialText, filled, icon, onPress } = props;
    const [text, setText] = useState(initialText);
    useEffect(() => {
        if (initialText) setText(initialText);
    }, [initialText]);
    const styles = createStyles(theme, props);
    return (
        <TouchableOpacity
            style={[
                styles.container,
                filled ? styles.containerFilled : styles.containerBorderd
            ]}
            onPress={onPress}
        >
            <Text style={[filled ? styles.textFilled : styles.textBordered]}>
                {text}
            </Text>
            {icon && (
                <FontAwesome6
                    name="chevron-down"
                    size={12}
                    style={
                        filled
                            ? { color: theme.chips.filled.text }
                            : { color: theme.chips.text }
                    }
                />
            )}
        </TouchableOpacity>
    );
};

const createStyles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            height: 36,
            paddingHorizontal: Tokens.spacing[12],
            minWidth: 50,
            borderRadius: Tokens.borderRadius[4],
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: Tokens.spacing[4],
            shadowColor: theme.chips.shadow,
            ...Tokens.shadow
        },
        containerFilled: { backgroundColor: theme.chips.filled.bg },
        containerBorderd: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: theme.chips.border
        },
        textFilled: {
            color: theme.chips.filled.text
        },
        textBordered: {
            color: theme.chips.text
        }
    });
};

export default Chip;
