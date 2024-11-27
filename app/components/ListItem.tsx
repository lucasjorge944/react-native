import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { Ionicons } from "@expo/vector-icons";
import Tokens from "@/constants/Tokens";

const ListItem = (props: Props) => {
    const { title, subtitle, color } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme, props);
    return (
        <View style={_styles.container}>
            <TouchableOpacity style={_styles.item}>
                <View style={_styles.textContainer}>
                    <Text
                        numberOfLines={1}
                        style={[
                            _styles.title,
                            { color: color || theme.textInfo }
                        ]}
                    >
                        {title}
                    </Text>
                    <Text style={_styles.subtitle}>{subtitle}</Text>
                </View>
                <Ionicons
                    name="chevron-forward"
                    size={Tokens.fontSize[20]}
                    color={theme.textInfo}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        item: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: Tokens.spacing[16],
            borderBottomWidth: 1,
            borderBottomColor: theme.border.thin,
            paddingHorizontal: Tokens.spacing[16]
        },
        textContainer: {
            flexDirection: "column",
            width: "80%",
            gap: Tokens.spacing[8]
        },
        title: {
            fontSize: Tokens.fontSize[16],
            fontWeight: "500"
        },
        subtitle: {
            fontSize: Tokens.fontSize[12],
            color: theme.textSecondary,
            fontWeight: "300"
        }
    });
};

type Props = {
    title: string;
    subtitle: string;
    color?: string;
};

export default ListItem;
