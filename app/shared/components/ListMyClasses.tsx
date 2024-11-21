import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
import MyPlaceClassPreview from "./MyPlaceClassPreview";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonIcon from "./ButtonIcon";
const places = [
    {
        _id: "126a5sd14",
        address: "Rua Maria Beatriz, 120",
        name: "Astral Beach Sports e atividades",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOwBVpkiAp70K9UA1JfDZF1ugQTadIkQEhg&s",
        description: "Hoje às 19:00",
        checkin: true,
        students: "7/10",
        rating: 5,
        sport: "Futvolei"
    },
    {
        _id: "126as456d",
        address: "Rua Maria Beatriz, 120",
        name: "Astral Beach Sports e atividades",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOwBVpkiAp70K9UA1JfDZF1ugQTadIkQEhg&s",
        description: "Hoje às 20:00",
        checkin: true,
        students: "4/10",
        rating: 5,
        sport: "Futvolei"
    },
    {
        _id: "126as124d",
        address: "Rua Maria Beatriz, 120",
        name: "Astral Beach Sports e atividades",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOwBVpkiAp70K9UA1JfDZF1ugQTadIkQEhg&s",
        description: "Hoje às 21:00",
        checkin: false,
        students: "2/7",
        rating: 5,
        sport: "Futvolei"
    },
    {
        _id: "adsg78123",
        address: "Rua Maria Beatriz, 120",
        name: "FT5 Beach Sports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9A71D2Jvey0PaFQf2o2C9NeOqMWvGCg2HA&s",
        description: "Hoje às 19:00",
        checkin: false,
        students: "2/4",
        rating: 5,
        sport: "Futvolei"
    },
    {
        _id: "adsg784515",
        address: "Rua Maria Beatriz, 120",
        name: "FT5 Beach Sports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9A71D2Jvey0PaFQf2o2C9NeOqMWvGCg2HA&s",
        description: "Hoje às 20:00",
        checkin: false,
        full: true,
        students: "7/7",
        rating: 5,
        sport: "Futvolei"
    },
    {
        _id: "ad1236sg78",
        address: "Rua Maria Beatriz, 120",
        name: "FT5 Beach Sports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9A71D2Jvey0PaFQf2o2C9NeOqMWvGCg2HA&s",
        description: "Hoje às 21:00",
        checkin: false,
        students: "4/5",
        rating: 5,
        sport: "Futvolei"
    }
];

const ListMyClasses = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerRow}>
                <Text style={styles.defaultTextMain}>Minhas Aulas (Hoje)</Text>
                <ButtonIcon>
                    <FontAwesome
                        name="filter"
                        size={Tokens.buttonIcon.fontSize}
                    />
                </ButtonIcon>
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
                        <MyPlaceClassPreview
                            key={place._id}
                            name={place.name}
                            logo={place.logo}
                            description={place.description}
                            students={place.students}
                            checkin={place.checkin}
                            full={place.full}
                            sport={place.sport}
                            card={true}
                        />
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
            alignItems: "center",
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

export default ListMyClasses;
