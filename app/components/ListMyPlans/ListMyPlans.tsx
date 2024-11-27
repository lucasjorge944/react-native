import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
import Plans from "@/app/mocks/Plans";
import MyPlan from "../MyPlan";
import styles from "./styles";
const columns = [Plans];

const ListMyPlans = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    return (
        <View style={_styles.mainContainer}>
            <View style={_styles.containerRow}>
                <Text style={_styles.defaultTextMain}>Meus Planos</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: Tokens.spacing[4],
                    paddingHorizontal: Tokens.spacing[16]
                }}
            >
                {columns.map((column, index) => (
                    <View key={index} style={{ gap: Tokens.spacing[12] }}>
                        <View style={{ gap: Tokens.spacing[16] }}>
                            {column.map((place) => (
                                <Link
                                    href={`/(auth)/plan/${place._id}`}
                                    key={place._id}
                                >
                                    <MyPlan
                                        name={place.name}
                                        logo={place.logo}
                                        description={place.description}
                                        teacher={place.teacher}
                                    />
                                </Link>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ListMyPlans;
