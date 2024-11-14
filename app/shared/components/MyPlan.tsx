import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";

const { width: screenWidth } = Dimensions.get("window");

type Props = {
    logo: string;
    name: string;
    description: string;
    card?: boolean;
    teacher?: string;
};

const MyPlan = (props: Props) => {
    const { logo, name, description, teacher, card } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <View style={[styles.container, card && styles.card]}>
            <View style={styles.logoWrapper}>
                <Image
                    source={{
                        uri: logo
                    }}
                    style={styles.logo}
                ></Image>
            </View>
            <View
                style={{
                    gap: Tokens.spacing[4]
                }}
            >
                <Text numberOfLines={2} style={styles.name}>
                    {name}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: Tokens.spacing[4]
                    }}
                >
                    <MaterialCommunityIcons
                        name="calendar"
                        size={12}
                        color={theme.textInfo}
                    />
                    <Text style={styles.description} numberOfLines={1}>
                        {description}
                    </Text>
                </View>
                <Text style={styles.description}>Professor: {teacher}</Text>
            </View>
        </View>
    );
};

const createStyles = (theme: PalleteProps) =>
    StyleSheet.create({
        container: {
            flexDirection: "row",
            gap: Tokens.spacing[12],
            width: screenWidth * 0.8
        },
        card: {
            backgroundColor: theme.card.bg,
            borderRadius: Tokens.borderRadius[8],
            padding: Tokens.spacing[8],
            width: screenWidth - 32,
            shadowColor: theme.card.shadow,
            ...Tokens.shadow
        },
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
        },
        name: {
            color: theme.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400",
            lineHeight: 18,
            width: "100%"
        },
        description: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[12],
            fontWeight: "400",
            width: 180
        }
    });

export default MyPlan;
