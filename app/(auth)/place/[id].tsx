import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import PlaceHeader from "@/app/components/PlaceHeader";
import Animated from "react-native-reanimated";
import Tokens from "@/constants/Tokens";
import Logo from "@/app/components/Logo/Logo";
import PlaceRating from "./components/PlaceRating";
import PlaceContacts from "./components/PlaceContacts";
import PlaceListInfos from "./components/PlaceListInfos";
import Places from "@/app/mocks/Places";

const Page = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const place = Places.find((plan) => plan._id === id);
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    title: place?.name,
                    header: () => <PlaceHeader place={place} />,
                    headerTransparent: true
                }}
            />
            <Animated.ScrollView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Animated.Image
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JebsZehNqs8VKWeC_RQ6lhTj2udUZLp3Fw&s"
                        }}
                        style={styles.mainImage}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{place?.name}</Text>
                        <Logo logo={place?.logo || ""} />
                    </View>

                    <PlaceRating rating={place?.rating || 0} />
                    <PlaceContacts contacts={place?.contacts} />
                </View>
                <View>
                    <PlaceListInfos place={place} />
                </View>
            </Animated.ScrollView>
        </View>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background
        },
        imageContainer: {
            position: "relative"
        },
        mainImage: {
            width: "100%",
            height: 250
        },
        overlay: {
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 10
        },
        detailsContainer: {
            paddingHorizontal: Tokens.spacing[16],
            paddingVertical: Tokens.spacing[24],
            gap: Tokens.spacing[24]
        },
        titleContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        title: {
            fontSize: Tokens.fontSize[24],
            fontWeight: "600",
            width: "70%",
            color: theme.text
        }
    });
};

export default Page;
