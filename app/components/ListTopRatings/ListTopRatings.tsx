import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
import Places from "@/app/mocks/Places";
import PlacePreview from "../PlacePreview";
import styles from "./styles";
const places = Places;

const ListTopRatings = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    return (
        <View style={_styles.mainContainer}>
            <View style={_styles.containerRow}>
                <Text style={_styles.defaultTextMain}>Top BH</Text>
                <Text style={_styles.more}>Ver mais</Text>
            </View>
            <View
                style={{
                    gap: Tokens.spacing[4],
                    paddingHorizontal: Tokens.spacing[16]
                }}
            >
                <View
                    style={{
                        gap: Tokens.spacing[16],
                        flexDirection: "column"
                    }}
                >
                    {places.map((place, index) => (
                        <Link
                            key={place._id}
                            href={`/(auth)/place/${place._id}`}
                        >
                            <PlacePreview
                                name={place.name}
                                logo={place.logo}
                                distance={place.distance}
                                rating={place.rating}
                                address={place.contacts.address}
                                card={true}
                            />
                        </Link>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default ListTopRatings;
