import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import {
    Entypo,
    FontAwesome,
    FontAwesome6,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";

type Props = {
    contacts?: {
        address?: string;
        facebook?: string;
        instagram?: string;
        phone?: string;
        website?: string;
    };
};

const PlaceContacts = (props: Props) => {
    const { contacts } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contactContainer}>
                <FontAwesome6
                    name="map-location-dot"
                    size={Tokens.fontSize[12]}
                    color={theme.textAccent}
                />
                <Text numberOfLines={1} style={styles.label}>
                    {contacts?.address}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactContainer}>
                <MaterialIcons
                    name="phone-iphone"
                    size={14}
                    color={theme.textAccent}
                />
                <Text numberOfLines={1} style={styles.label}>
                    {contacts?.phone}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactContainer}>
                <FontAwesome
                    name="facebook-square"
                    size={14}
                    color={theme.textAccent}
                />
                <Text numberOfLines={1} style={styles.label}>
                    {contacts?.facebook}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactContainer}>
                <Entypo name="instagram" size={12} color={theme.textAccent} />
                <Text numberOfLines={1} style={styles.label}>
                    {contacts?.instagram}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactContainer}>
                <MaterialCommunityIcons
                    name="web"
                    size={14}
                    color={theme.textAccent}
                />
                <Text numberOfLines={1} style={styles.label}>
                    {contacts?.website}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            flexDirection: "column",
            gap: Tokens.spacing[18],
            paddingRight: Tokens.spacing[24]
        },
        contactContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: Tokens.spacing[12]
        },
        label: {
            fontSize: Tokens.fontSize[14],
            color: theme.textInfo,
            fontWeight: "400"
        }
    });
};

export default PlaceContacts;
