import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Plans from "@/app/shared/mocks/Plans";
import Tokens from "@/constants/Tokens";
import Chip from "@/app/shared/components/Chip";
import Button from "@/app/shared/components/Button";

const Page = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const plan = Plans.find((plan) => plan._id === id);
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const styles = createStyles(theme);
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: `${plan?.name.slice(0, 20)}...`,
                    headerTransparent: true,
                    headerBackTitle: "Voltar",
                    headerStyle: {
                        backgroundColor: theme.background
                    }
                }}
            />
            <View style={styles.planContainer}>
                <Chip initialText="ATIVO" filled={true} />
                <Text style={styles.plan}>{plan?.description}</Text>
                <Text style={styles.price}>{plan?.price}</Text>
            </View>
            <Button text="ALTERAR PLANO" onPress={() => {}} />
        </View>
    );
};

const createStyles = (theme: PalleteProps) => {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.background,
            flex: 1,
            paddingTop: Platform.select({
                ios: 100,
                android: 90
            }),
            gap: Tokens.spacing[16],
            paddingHorizontal: Tokens.spacing[16]
        },
        planContainer: {
            flexDirection: "column",
            alignItems: "flex-start",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: theme.border.thin,
            borderRadius: Tokens.borderRadius[8],
            padding: Tokens.spacing[24],
            gap: Tokens.spacing[12]
        },
        plan: {
            color: theme.text,
            fontSize: Tokens.fontSize[16],
            fontWeight: "500"
        },
        price: {
            color: theme.text,
            fontSize: Tokens.fontSize[20],
            fontWeight: "600"
        }
    });
};

export default Page;
