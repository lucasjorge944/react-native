import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { PalleteProps } from "@/constants/Pallete";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import Tokens from "@/constants/Tokens";
import MyPlan from "./MyPlan";
import { Link } from "expo-router";
import Plans from "../mocks/Plans";
const columns = [Plans];

const ListMyPlans = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerRow}>
                <Text style={styles.defaultTextMain}>Meus Planos</Text>
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

const createStyles = (theme: PalleteProps) =>
    StyleSheet.create({
        mainContainer: {
            gap: Tokens.spacing[16]
        },
        containerRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: Tokens.spacing[16]
        },
        defaultTextMain: {
            color: theme.text,
            fontSize: Tokens.fontSize[16],
            fontWeight: "500"
        },
        more: {
            color: theme.text,
            fontSize: Tokens.fontSize[14],
            fontWeight: "400"
        }
    });

export default ListMyPlans;
