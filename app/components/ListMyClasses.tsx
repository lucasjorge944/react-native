import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
import MyPlaceClassPreview from "./MyPlaceClassPreview";
import { FontAwesome } from "@expo/vector-icons";
import ButtonIcon from "./ButtonIcon";
import { Link } from "expo-router";
import Classes from "@/constants/Classes";
const classes = Classes;

const ListMyClasses = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    return (
        <View style={_styles.mainContainer}>
            <View style={_styles.containerRow}>
                <Text style={_styles.defaultTextMain}>Minhas Aulas (Hoje)</Text>
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
                    {classes.map((place, index) => (
                        <Link
                            href={`/(auth)/(modals)/classInfo/${place._id}`}
                            key={place._id}
                        >
                            <MyPlaceClassPreview
                                name={place.name}
                                logo={place.logo}
                                description={place.description}
                                students={place.students}
                                checkin={place.checkin}
                                full={place.full}
                                sport={place.sport}
                                card={true}
                            />
                        </Link>
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

export default ListMyClasses;
