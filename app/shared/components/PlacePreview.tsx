import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";

const PlacePreview = ({ logo, name, distance }: PlacePreviewProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image
                    source={{
                        uri: logo
                    }}
                    style={styles.logo}
                ></Image>
            </View>
            <View style={{ width: 90 }}>
                <Text
                    numberOfLines={2}
                    style={{
                        ...styles.defaultText,
                        fontWeight: "400",
                        color: "#333",
                        lineHeight: 18, // Adjust line height to fit two lines properly
                        textAlignVertical: "center", // Centers the text vertically
                        minHeight: 40
                    }}
                >
                    {name}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 4,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <FontAwesome6
                        name="location-dot"
                        size={12}
                        color={Colors.light.gray[600]}
                    />
                    <Text style={styles.defaultText}>{distance}</Text>
                </View>
            </View>
        </View>
    );
};

type PlacePreviewProps = {
    logo: string;
    name: string;
    distance: string;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        justifyContent: "flex-start",
        width: 100
    },
    logoWrapper: {
        width: 70,
        height: 70,
        borderRadius: 15,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    logo: {
        width: 70,
        height: 70,
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    defaultText: {
        color: Colors.light.gray[600],
        fontSize: 14,
        textAlign: "center"
    }
});

export default PlacePreview;
