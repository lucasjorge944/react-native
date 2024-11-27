import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import Logo from "./Logo";
import StarsRating from "./StarsRating";

const PlacePreview = (props: Props) => {
    const { logo, name, distance, rating, address, card } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    return (
        <View style={[_styles.container, card && _styles.card]}>
            <Logo logo={logo} />
            <View
                style={{
                    gap: Tokens.spacing[4]
                }}
            >
                <Text numberOfLines={2} style={_styles.name}>
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
                    <Text style={_styles.distance} numberOfLines={1}>
                        {distance} | {address}
                    </Text>
                </View>
                <StarsRating rating={rating} />
            </View>
        </View>
    );
};

const styles = (theme: PalleteProps) => {
    const { width: screenWidth } = Dimensions.get("window");
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            gap: Tokens.spacing[12],
            width: screenWidth * 0.8
        },
        card: {
            backgroundColor: theme.card.bg,
            borderRadius: Tokens.borderRadius[8],
            padding: Tokens.spacing[8],
            width: screenWidth - 32
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
};

type Props = {
    logo: string;
    name: string;
    distance: string;
    rating: number;
    address: string;
    card?: boolean;
};

export default PlacePreview;
