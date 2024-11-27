import { useEffect } from "react";
import "react-native-reanimated";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Slot, SplashScreen, useRouter, useSegments } from "expo-router";
import { ThemeProvider } from "./context/ThemeContext";
import { StatusBar } from "expo-status-bar";
SplashScreen.preventAutoHideAsync();
const InitialLayout = () => {
    const { authState, onLogout } = useAuth();
    const segments = useSegments();
    const router = useRouter();
    useEffect(() => {
        const inTabsGroup = segments[0] === "(auth)";
        if (authState?.authenticated && !inTabsGroup) {
            router.replace("/(auth)/(tabs)/myspaces");
        } else if (!authState?.authenticated) {
            router.replace("/login");
        }
        setTimeout(SplashScreen.hideAsync, 2000);
    }, [authState]);

    return <Slot />;
};

const RootLayoutNav = () => {
    return (
        <ThemeProvider>
            <StatusBar style="dark"></StatusBar>
            <AuthProvider>
                <InitialLayout />
            </AuthProvider>
        </ThemeProvider>
    );
};
export default RootLayoutNav;
