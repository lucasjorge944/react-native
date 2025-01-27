import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import styles from "./styles";

const Signup = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const router = useRouter();

    // Start the sign up process
    const onSignUpPress = async () => {
        if (!isLoaded) return;

        try {
            await signUp.create({
                emailAddress,
                password
            });

            // Send verification email
            await signUp.prepareEmailAddressVerification({
                strategy: "email_code"
            });

            // Change the UI to verify the email address
            setPendingVerification(true);
        } catch (err: any) {
            Alert.alert("Error", err.errors[0].message);
        }
    };

    // Verify the email address
    const onVerifyPress = async () => {
        if (!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code
                }
            );

            await setActive({ session: completeSignUp.createdSessionId });
            router.push("/(auth)/(tabs)/myspaces");
        } catch (err: any) {
            Alert.alert("Error", err.errors[0].message);
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Sign Up" }} />

            {!pendingVerification ? (
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Create Account</Text>

                    <TextInput
                        autoCapitalize="none"
                        placeholder="Email"
                        value={emailAddress}
                        onChangeText={setEmailAddress}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSignUpPress}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.push("/login")}
                        style={styles.linkButton}
                    >
                        <Text style={styles.linkText}>
                            Already have an account? Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Verify Email</Text>

                    <TextInput
                        value={code}
                        placeholder="Code..."
                        onChangeText={setCode}
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={onVerifyPress}
                    >
                        <Text style={styles.buttonText}>Verify Email</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default Signup;
