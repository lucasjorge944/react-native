import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import StarsRating from "./StarsRating";

const { width: screenWidth } = Dimensions.get("window");

type Props = {
    logo: string;
    name: string;
    distance: string;
    rating: number;
    address: string;
    card?: boolean;
};

const PlacePreview = (props: Props) => {
    const { logo, name, distance, rating, address, card } = props;
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
                        gap: Tokens.spacing[8]
                    }}
                >
                    <FontAwesome6
                        name="location-dot"
                        size={12}
                        color={theme.textInfo}
                    />
                    <Text style={styles.distance} numberOfLines={1}>
                        {distance} | {address}
                    </Text>
                </View>
                <StarsRating rating={rating} />
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
        distance: {
            color: theme.textInfo,
            fontSize: Tokens.fontSize[12],
            fontWeight: "400",
            width: 180
        }
    });

export default PlacePreview;
