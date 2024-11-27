import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import styles from "./styles";

const MyPlan = (props: Props) => {
    const { logo, name, description, teacher, card } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    return (
        <View style={[_styles.container, card && _styles.card]}>
            <View style={_styles.logoWrapper}>
                <Image
                    source={{
                        uri: logo
                    }}
                    style={_styles.logo}
                ></Image>
            </View>
            <View
                style={{
                    gap: Tokens.spacing[4]
                }}
            >
                <Text numberOfLines={2} style={_styles.name}>
                    {name}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: Tokens.spacing[4]
                    }}
                >
                    <MaterialCommunityIcons
                        name="calendar"
                        size={12}
                        color={theme.textInfo}
                    />
                    <Text style={_styles.description} numberOfLines={1}>
                        {description}
                    </Text>
                </View>
                <Text style={_styles.description}>Professor: {teacher}</Text>
            </View>
        </View>
    );
};

type Props = {
    logo: string;
    name: string;
    description: string;
    card?: boolean;
    teacher?: string;
};

export default MyPlan;
