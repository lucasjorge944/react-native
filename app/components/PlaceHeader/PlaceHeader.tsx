import React from "react";
import { SafeAreaView, View, Share } from "react-native";
import { useRouter } from "expo-router";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { FontAwesome6 } from "@expo/vector-icons";
import ButtonIcon from "../ButtonIcon";
import styles from "./styles";

type Props = {
    place: any;
};

const PlaceHeader = (props: Props) => {
    const { place } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
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
        <SafeAreaView style={_styles.container}>
            <View style={_styles.containerRow}>
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

export default PlaceHeader;
