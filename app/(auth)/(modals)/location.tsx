import {
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import React, { useEffect, useRef } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Input from "@/app/components/Input";
import { useForm } from "react-hook-form";
import Tokens from "@/constants/Tokens";

type FormLocation = {
    location?: string;
};

const Location = () => {
    const inputRef = useRef<TextInput>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const dismissKeyboard = () => {
        Keyboard.dismiss();
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const { control, handleSubmit } = useForm<FormLocation>();

    const findLocation = (data: FormLocation) => {
        console.log(data);
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input
                        inputProps={{
                            placeholder: "Endereço, CEP, cidade",
                            returnKeyType: "go",
                            onSubmitEditing: handleSubmit(findLocation)
                        }}
                        formProps={{
                            name: "location",
                            control
                        }}
                        ref={inputRef}
                        icon={<FontAwesome5 name="search-location" size={20} />}
                    />
                </View>
                <View style={styles.mapContainer}></View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        padding: Tokens.spacing[12]
    },
    mapContainer: {
        flex: 1
    }
});

export default Location;
