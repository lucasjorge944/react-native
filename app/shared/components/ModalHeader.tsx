import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ModalHeader = () => {
    const router = useRouter();

    const onCloseModal = () => {
        router.back();
    };

    return (
        <View
            style={{
                backgroundColor: Colors.light.white[500],
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: Colors.light.white[700]
            }}
        >
            <TouchableOpacity
                style={styles.buttonReturn}
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

const styles = StyleSheet.create({
    buttonReturn: {
        width: 36,
        height: 36,
        backgroundColor: Colors.light.white[600],
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default ModalHeader;
