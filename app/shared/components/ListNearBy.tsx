import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import PlacePreview from "./PlacePreview";
const places = [
    {
        _id: "126asd",
        name: "Astral Beach Sports e atividades",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOwBVpkiAp70K9UA1JfDZF1ugQTadIkQEhg&s",
        distance: "356 m"
    },
    {
        _id: "121246asd",
        name: "Arena Errejota Sports e atividades",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYBlDPGKPWpAEaaxQrEkbxT8CNVHWZ7JBtw&s",
        distance: "423 m"
    },
    {
        _id: "153426asd",
        name: "4Set Arena Supernosso",
        logo: "https://files.menudino.com/cardapios/64621/logo.png",
        distance: "556 m"
    },
    {
        _id: "ags79f",
        name: "Arena BH Beach Arena BH Beach",
        logo: "https://images.partners.gympass.com/image/partners/5ac9931e-c0bd-4efe-a323-b6c4b99446a9/3009e45d-ae13-425b-b88a-6a3419bafa35_Screenshot20240112033700WhatsApp.jpg",
        distance: "756 m"
    },
    {
        _id: "a8hfs9",
        name: "Deu Praia Beach Sports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapM7RrCA9Ormh68Il2725GeIdgZwXOlIpvg&s",
        distance: "1.1 km"
    },
    {
        _id: "adsg78",
        name: "Arena Tunel",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZpLEawTzP1bKMi31_q3RNV6nf3v00eoQPw&s",
        distance: "1.8 km"
    },
    {
        _id: "adg97",
        name: "Arena do Pedrinho",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh29mOApPVyUYjqu7XoCky7CjJlAr0AyqAvQ&s",
        distance: "2.2 km"
    },
    {
        _id: "asg897d12",
        name: "Duna Beach Sports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9STRbbI2Lc68b4SUgECOZT8xRgaN1Oc03BQ&s",
        distance: "6.3 km"
    }
];
const ListNearBy = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerRow}>
                <Text style={{ ...styles.defaultTextMain, fontWeight: "600" }}>
                    Perto de você
                </Text>
                <Text
                    style={{
                        ...styles.defaultTextMain,
                        textDecorationLine: "underline"
                    }}
                >
                    Ver tudo
                </Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 4, paddingHorizontal: 12 }}
            >
                {places.map((place) => (
                    <PlacePreview
                        key={place._id}
                        name={place.name}
                        distance={place.distance}
                        logo={place.logo}
                    ></PlacePreview>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        gap: 24
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24
    },
    defaultTextMain: {
        color: Colors.light.gray[600],
        fontSize: 16
    }
});

export default ListNearBy;
