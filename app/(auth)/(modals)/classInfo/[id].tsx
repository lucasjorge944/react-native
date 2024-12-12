import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Classes from "@/constants/Classes";

const ClassInfo = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const myClass = Classes.find((myClass) => myClass._id === id);
    return (
        <View>
            <Text>ClassInfo</Text>
        </View>
    );
};

export default ClassInfo;
