import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
import Places from "@/app/mocks/Places";
import PlacePreview from "./PlacePreview";

const ListNearBy = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    const [columns, setColumns] = useState<any[]>([]);

    const mountColumns = () => {
        const _columns: any[] = [];
        for (let i = 0; i < 4; i++) {
            _columns.push([]);
        }
        for (let i = 0; i < 8; i++) {
            _columns[i % 4].push(Places[i]);
        }
        setColumns(_columns);
    };

    useEffect(() => {
        mountColumns();
    }, []);

    return (
        <View style={_styles.mainContainer}>
            <View style={_styles.containerRow}>
                <Text style={_styles.defaultTextMain}>Perto de você</Text>
                <Text style={_styles.more}>Ver mais</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: Tokens.spacing[4],
                    paddingHorizontal: Tokens.spacing[16]
                }}
            >
                {columns.map((column, index) => (
                    <View key={index} style={{ gap: Tokens.spacing[12] }}>
                        <View style={{ gap: Tokens.spacing[16] }}>
                            {column.map((place: any) => (
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
                                    />
                                </Link>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = (theme: PalleteProps) => {
    return StyleSheet.create({
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
};

export default ListNearBy;
