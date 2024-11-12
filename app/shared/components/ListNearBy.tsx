import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import PlacePreview from "./PlacePreview";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
const columns = [
    [
        {
            _id: "126asd",
            address: "Rua Maria Beatriz, 120",
            name: "Astral Beach Sports e atividades",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOwBVpkiAp70K9UA1JfDZF1ugQTadIkQEhg&s",
            distance: "356 m",
            rating: 5
        },
        {
            _id: "121246asd",
            address: "Rua Maria Beatriz de Vasncoelesasd, 120",
            name: "Arena Errejota Sports e atividades",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYBlDPGKPWpAEaaxQrEkbxT8CNVHWZ7JBtw&s",
            distance: "423 m",
            rating: 2
        }
    ],
    [
        {
            _id: "153426asd",
            address: "Av. Mario Werneck, 1203",
            name: "4Set Arena Supernosso",
            logo: "https://files.menudino.com/cardapios/64621/logo.png",
            distance: "556 m",
            rating: 2
        },
        {
            _id: "ags79f",
            address: "Rua Maria Coutinho, 300",
            name: "Arena BH Beach Arena BH Beach",
            logo: "https://images.partners.gympass.com/image/partners/5ac9931e-c0bd-4efe-a323-b6c4b99446a9/3009e45d-ae13-425b-b88a-6a3419bafa35_Screenshot20240112033700WhatsApp.jpg",
            distance: "756 m",
            rating: 3.5
        }
    ],
    [
        {
            _id: "a8hfs9",
            address: "Rua Maria Beatriz",
            name: "Deu Praia Beach Sports",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapM7RrCA9Ormh68Il2725GeIdgZwXOlIpvg&s",
            distance: "1.1 km",
            rating: 1
        },
        {
            _id: "adsg78",
            address: "Rua Maria Beatriz, 120",
            name: "Arena Tunel",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZpLEawTzP1bKMi31_q3RNV6nf3v00eoQPw&s",
            distance: "1.8 km",
            rating: 5
        }
    ],
    [
        {
            _id: "adg97",
            address: "Rua Maria Beatriz de Vasncoelesasd, 120",
            name: "Arena do Pedrinho",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh29mOApPVyUYjqu7XoCky7CjJlAr0AyqAvQ&s",
            distance: "2.2 km",
            rating: 2
        },
        {
            _id: "asg897d12",
            address: "Rua Maria Beatriz de Vasncoelesasd, 120",
            name: "Duna Beach Sports",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9STRbbI2Lc68b4SUgECOZT8xRgaN1Oc03BQ&s",
            distance: "6.3 km",
            rating: 4
        }
    ]
];

const ListNearBy = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerRow}>
                <Text style={styles.defaultTextMain}>Perto de você</Text>
                <Text style={styles.more}>Ver mais</Text>
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
                            {column.map((place) => (
                                <PlacePreview
                                    key={place._id}
                                    name={place.name}
                                    logo={place.logo}
                                    distance={place.distance}
                                    rating={place.rating}
                                    address={place.address}
                                />
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
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

export default ListNearBy;
