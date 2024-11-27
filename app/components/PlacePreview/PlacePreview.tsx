import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import Logo from "../Logo";
import StarsRating from "../StarsRating/StarsRating";
import styles from "./styles";

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

type Props = {
    logo: string;
    name: string;
    distance: string;
    rating: number;
    address: string;
    card?: boolean;
};

export default PlacePreview;
