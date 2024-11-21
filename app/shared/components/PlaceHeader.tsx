import {
    Text,
    SafeAreaView,
    StyleSheet,
    Platform,
    View,
    Share
} from "react-native";
import React from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import ButtonIcon from "./ButtonIcon";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
    place: any;
}

const PlaceHeader = (props: Props) => {
    const { place } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    const router = useRouter();

    const onShare = async () => {
        try {
            await Share.share({
                message: `Gabriel te convidou para a ${place.name}`
            });
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerRow}>
                <ButtonIcon filled={true} onPress={router.back}>
                    <FontAwesome6
                        name="chevron-left"
                        size={Tokens.buttonIcon.fontSize}
                    />
                </ButtonIcon>
                <View style={{ flexDirection: "row", gap: Tokens.spacing[18] }}>
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
            </View>
        </SafeAreaView>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            height: 100,
            justifyContent: "flex-end",
            paddingTop: Platform.select({
                ios: 0,
                android: 46
            })
        },
        containerRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: Tokens.spacing[16]
        }
    });
};

export default PlaceHeader;
