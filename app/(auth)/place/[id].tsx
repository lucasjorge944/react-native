import { View, Text, StyleSheet, Dimensions, Share } from "react-native";
import React, { useLayoutEffect } from "react";
import {
    Stack,
    useLocalSearchParams,
    useNavigation,
    useRouter
} from "expo-router";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset
} from "react-native-reanimated";
import Tokens from "@/constants/Tokens";
import Logo from "@/app/components/Logo";
import PlaceRating from "./components/PlaceRating";
import PlaceContacts from "./components/PlaceContacts";
import PlaceListInfos from "./components/PlaceListInfos";
import Places from "@/app/mocks/Places";
import ButtonIcon from "@/app/components/ButtonIcon";
import { FontAwesome6 } from "@expo/vector-icons";

const IMG_HEIGHT = 250;
const { width } = Dimensions.get("window");

const Page = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const place = Places.find((plan) => plan._id === id);
    const router = useRouter();
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);

    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);
    const imageAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
                    )
                },
                {
                    scale: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [2, 1, 1]
                    )
                }
            ]
        };
    });

    const navigation = useNavigation();

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollOffset.value,
                [0, IMG_HEIGHT / 2],
                [0, 1]
            )
        };
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: "",
            headerBackground: () => (
                <Animated.View style={[headerAnimatedStyle, styles.header]} />
            ),
            headerLeft: () => (
                <ButtonIcon filled={true} onPress={router.back}>
                    <FontAwesome6
                        name="chevron-left"
                        size={Tokens.buttonIcon.fontSize}
                    />
                </ButtonIcon>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: "row",
                        gap: Tokens.spacing[18]
                    }}
                >
                    <ButtonIcon onPress={onShare} filled={true}>
                        <FontAwesome6
                            name="share-from-square"
                            size={Tokens.buttonIcon.fontSize}
                        />
                    </ButtonIcon>
                    <ButtonIcon filled={true}>
                        <FontAwesome6
                            name="heart"
                            size={Tokens.buttonIcon.fontSize}
                        />
                    </ButtonIcon>
                </View>
            )
        });
    }, []);

    const onShare = async () => {
        try {
            await Share.share({
                message: `Gabriel te convidou para a ${place?.name}`
            });
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Animated.ScrollView style={styles.container} ref={scrollRef}>
                <Animated.Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JebsZehNqs8VKWeC_RQ6lhTj2udUZLp3Fw&s"
                    }}
                    style={[styles.mainImage, imageAnimatedStyle]}
                />
                <View style={styles.detailsContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{place?.name}</Text>
                        <Logo logo={place?.logo || ""} />
                    </View>
                    <PlaceRating rating={place?.rating || 0} />
                    <PlaceContacts contacts={place?.contacts} />
                </View>
                <View
                    style={{
                        paddingBottom: 200,
                        backgroundColor: theme.background
                    }}
                >
                    <PlaceListInfos place={place} />
                </View>
            </Animated.ScrollView>
        </View>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        header: {
            height: 100,
            backgroundColor: theme.background,
            borderBottomWidth: 1,
            borderBottomColor: theme.border.thin
        },
        mainImage: {
            width,
            height: IMG_HEIGHT
        },
        overlay: {
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 10
        },
        detailsContainer: {
            backgroundColor: theme.background,
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
