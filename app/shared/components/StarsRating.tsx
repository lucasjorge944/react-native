import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { AntDesign } from "@expo/vector-icons";

type Props = {
    rating: number;
};

const StarsRating = (props: Props) => {
    const { rating } = props;
    const [stars, setStars] = useState<number[]>();
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;

    useEffect(() => {
        generateArray();
    }, [rating]);

    const generateArray = () => {
        const starsArray = Array(5)
            .fill(rating)
            .map((r, i) => {
                if (r >= i + 1) return 1;
                else return 0;
            });
        setStars(starsArray);
    };
    return (
        <View style={{ flexDirection: "row" }}>
            {stars?.map((s, i) =>
                s === 1 ? (
                    <Text key={i}>
                        <AntDesign
                            name="star"
                            size={16}
                            color={theme.starsRating}
                        />
                    </Text>
                ) : (
                    <Text key={i}>
                        <AntDesign
                            name="staro"
                            size={16}
                            color={theme.starsRating}
                        />
                    </Text>
                )
            )}
        </View>
    );
};

export default StarsRating;
