import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Platform,
    Alert
} from "react-native";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import ButtonIcon from "./ButtonIcon";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

const MySpacesHeader = () => {
    const { user } = useUser();
    const { signOut } = useAuth();
    const router = useRouter();
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);
    const firstName = user?.publicMetadata.firstName as string;

    const handleSignOut = async () => {
        try {
            await signOut();
            router.replace("/signin");
        } catch (err: any) {
            console.error("Error signing out:", err);
            Alert.alert("Error", "Failed to sign out. Please try again.");
        }
    };

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
                        Olá, {firstName}
                    </Text>
                    <View style={{ flex: 1 }}></View>
                    <ButtonIcon>
                        <MaterialCommunityIcons
                            name="bell-badge"
                            size={Tokens.buttonIcon.fontSize}
                        />
                    </ButtonIcon>
                    <ButtonIcon onPress={handleSignOut}>
                        <FontAwesome5
                            name="sign-out-alt"
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
