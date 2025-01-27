import { useEffect } from "react";
import "react-native-reanimated";
import { Slot, SplashScreen, useRouter, useSegments } from "expo-router";
import { ThemeProvider } from "./context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import tokenCache from "./utils/clerk";

SplashScreen.preventAutoHideAsync();
const InitialLayout = () => {
    const { isSignedIn } = useAuth();
    const segments = useSegments();
    const router = useRouter();
    console.log(isSignedIn);
    useEffect(() => {
        const inTabsGroup = segments[0] === "(auth)";
        if (isSignedIn && !inTabsGroup) {
            router.replace("/(auth)/(tabs)/myspaces");
        } else if (!isSignedIn) {
            router.replace("/login");
        }
        setTimeout(SplashScreen.hideAsync, 2000);
    }, [isSignedIn]);

    return <Slot />;
};

const RootLayoutNav = () => {
    return (
        <ClerkProvider
            publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
            tokenCache={tokenCache}
        >
            <ClerkLoaded>
                <ThemeProvider>
                    <StatusBar style="dark"></StatusBar>
                    <InitialLayout />
                    {/* <AuthProvider>
                    <InitialLayout />
                </AuthProvider> */}
                </ThemeProvider>
            </ClerkLoaded>
        </ClerkProvider>
    );
};
export default RootLayoutNav;
