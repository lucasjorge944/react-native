import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import Tokens from "@/constants/Tokens";
import MyPlaceClassPreview from "./MyPlaceClassPreview";
import ButtonIcon from "./ButtonIcon";
const places = [
    {
        _id: "126a5sd14",
        address: "Rua Maria Beatriz, 120",
        name: "Astral Beach Sports e atividades",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOwBVpkiAp70K9UA1JfDZF1ugQTadIkQEhg&s",
        description: "Hoje às 19:00",
        checkin: true,
        students: "4/4",
        sport: "Futvolei"
    },
    {
        _id: "126as456d",
        address: "Rua Maria Beatriz, 120",
        name: "Astral Beach Sports e atividades",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOwBVpkiAp70K9UA1JfDZF1ugQTadIkQEhg&s",
        description: "Hoje às 20:00",
        checkin: true,
        students: "6/6",
        sport: "Beach Tenis"
    }
];

const ListMyReservations = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    return (
        <View style={_styles.mainContainer}>
            <View style={_styles.containerRow}>
                <Text style={_styles.defaultTextMain}>
                    Minhas Reservas (Hoje)
                </Text>
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
                            sport={place.sport}
                            card={true}
                        />
                    ))}
                </View>
            </View>
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
};

export default ListMyReservations;
