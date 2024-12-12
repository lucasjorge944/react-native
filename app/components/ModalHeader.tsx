import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import ButtonIcon from "./ButtonIcon";

type Props = {
    title: string;
};

const ModalHeader = (props: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const router = useRouter();

    const onCloseModal = () => {
        router.back();
    };

    return (
        <View style={_styles.container}>
            <ButtonIcon onPress={onCloseModal}>
                <AntDesign name="arrowleft" size={Tokens.buttonIcon.fontSize} />
            </ButtonIcon>
            <Text
                style={{
                    fontWeight: "500",
                    fontSize: Tokens.fontSize[14],
                    color: theme.text
                }}
            >
                {props.title}
            </Text>
            <Text style={{ width: 36 }}></Text>
        </View>
    );
};

const styles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            backgroundColor: Colors.light.white[500],
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: theme.border.thin
        },
        buttonReturn: {
            width: 36,
            height: 36,
            backgroundColor: Colors.light.white[600],
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center"
        }
    });
};

export default ModalHeader;
