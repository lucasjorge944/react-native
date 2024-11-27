import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import ButtonIcon from "./ButtonIcon";

const MySpacesHeader = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
            <View style={_styles.container}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        style={{
                            color: theme.text,
                            fontSize: Tokens.fontSize[20],
                            fontWeight: 500
                        }}
                    >
                        Olá, Lucas Jorge
                    </Text>
                    <View style={{ flex: 1 }}></View>
                    <ButtonIcon>
                        <MaterialCommunityIcons
                            name="bell-badge"
                            size={Tokens.buttonIcon.fontSize}
                        />
                    </ButtonIcon>
                    <ButtonIcon>
                        <FontAwesome5
                            name="cog"
                            size={Tokens.buttonIcon.fontSize}
                        />
                    </ButtonIcon>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            height: Tokens.headerMySpacesHeight,
            backgroundColor: theme.background,
            paddingHorizontal: Tokens.spacing[12],
            paddingTop: Platform.select({
                ios: 0,
                android: 40
            })
        }
    });
};

export default MySpacesHeader;
