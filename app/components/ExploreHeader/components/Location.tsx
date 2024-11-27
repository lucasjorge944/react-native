import { View, Text } from "react-native";
import React from "react";
import ButtonIcon from "@/app/components/ButtonIcon";
import Tokens from "@/constants/Tokens";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome5
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

const Location = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: Tokens.spacing[12],
                width: "100%"
            }}
        >
            <Link
                href={"/(auth)/(modals)/location"}
                style={{ marginTop: Tokens.spacing[8] }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: Tokens.spacing[8]
                    }}
                >
                    <MaterialIcons
                        name="my-location"
                        size={20}
                        color={theme.text}
                    />
                    <Text
                        style={{
                            fontSize: Tokens.fontSize[12],
                            color: theme.text
                        }}
                    >
                        Rua Papoula Vermelha,120
                    </Text>
                </View>
            </Link>
            <View style={{ flex: 1 }}></View>
            <ButtonIcon>
                <MaterialCommunityIcons
                    name="bell-badge"
                    size={Tokens.buttonIcon.fontSize}
                />
            </ButtonIcon>
            <ButtonIcon>
                <FontAwesome5 name="cog" size={Tokens.buttonIcon.fontSize} />
            </ButtonIcon>
        </View>
    );
};

export default Location;
