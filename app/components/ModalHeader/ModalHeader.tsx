import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./styles";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

const ModalHeader = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const router = useRouter();

    const onCloseModal = () => {
        router.back();
    };

    return (
        <View style={_styles.container}>
            <TouchableOpacity
                style={_styles.buttonReturn}
                onPress={onCloseModal}
            >
                <AntDesign
                    name="arrowleft"
                    size={22}
                    color={Colors.light.gray[400]}
                />
            </TouchableOpacity>
            <Text style={{ fontWeight: "500", fontSize: 14 }}>
                Minha Localização
            </Text>
            <Text style={{ width: 36 }}></Text>
        </View>
    );
};

export default ModalHeader;
