import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import {
    useAuth as useClerkAuth,
    SignedIn,
    SignedOut
} from "@clerk/clerk-expo";

type AuthProps = {
    authState?: {
        token: string | null;
        authenticated: boolean | null;
    };
    signOut?: () => Promise<void>;
};

const TOKEN_KEY = "clerk-jwt";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const { isLoaded, isSignedIn, getToken, signOut } = useClerkAuth();
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken = async () => {
            if (isLoaded && isSignedIn) {
                const token = await getToken();
                if (token) {
                    await SecureStore.setItemAsync(TOKEN_KEY, token);
                    setAuthState({
                        token: token,
                        authenticated: true
                    });
                }
            } else if (isLoaded && !isSignedIn) {
                await SecureStore.deleteItemAsync(TOKEN_KEY);
                setAuthState({
                    token: null,
                    authenticated: false
                });
            }
        };
        loadToken();
    }, [isLoaded, isSignedIn]);

    const value = {
        signOut,
        authState
    };

    if (!isLoaded) {
        return null;
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
