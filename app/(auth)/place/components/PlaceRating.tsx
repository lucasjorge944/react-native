import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import StarsRating from "@/app/components/StarsRating/StarsRating";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";

type Props = {
    rating: number;
};

const PlaceRating = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{props.rating}</Text>
            <StarsRating rating={props.rating || 0} />
            <Text style={styles.reviewCount}>(253 avaliações)</Text>
        </View>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        ratingContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: Tokens.spacing[4]
        },
        rating: {
            fontSize: Tokens.fontSize[16],
            color: theme.starsRating,
            marginRight: 5
        },
        reviewCount: {
            fontSize: Tokens.fontSize[14],
            color: theme.textInfo
        }
    });
};

export default PlaceRating;
