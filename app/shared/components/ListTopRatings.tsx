import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import PlacePreview from "./PlacePreview";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
import Places from "../mocks/Places";
import { Link } from "expo-router";
const places = Places;

const ListTopRatings = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerRow}>
                <Text style={styles.defaultTextMain}>Top BH</Text>
                <Text style={styles.more}>Ver mais</Text>
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

const createStyles = (theme: PalleteProps) =>
    StyleSheet.create({
        mainContainer: {
            gap: Tokens.spacing[16]
        },
        containerRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: Tokens.spacing[16]
        },
        defaultTextMain: {
            color: theme.text,
            fontSize: Tokens.fontSize[16],
            fontWeight: "500"
        },
        more: {
            color: theme.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400"
        }
    });

export default ListTopRatings;
