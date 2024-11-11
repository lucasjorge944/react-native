import {
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Location = () => {
    const [serachTerm, setSearchTerm] = useState("");
    const inputRef = useRef<TextInput>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const onClearSerachTerm = () => {
        setSearchTerm("");
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <View>
                    <AntDesign
                        style={styles.inputIconLeft}
                        name="search1"
                        size={20}
                        color={Colors.light.gray[400]}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={Colors.light.gray[400]}
                        placeholder="Endereço, CEP, cidade"
                        onChangeText={(text: string) => setSearchTerm(text)}
                        value={serachTerm}
                        ref={inputRef}
                    ></TextInput>
                    {serachTerm && (
                        <AntDesign
                            style={styles.inputIconRight}
                            name="close"
                            size={20}
                            color={Colors.light.gray[400]}
                            onPress={onClearSerachTerm}
                        />
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    input: {
        height: 50,
        backgroundColor: Colors.light.white[500],
        color: Colors.light.gray[400],
        borderRadius: 25,
        paddingHorizontal: 50,
        fontSize: 16,
        borderColor: Colors.light.gray[300],
        borderWidth: 1
    },
    inputIconLeft: {
        position: "absolute",
        top: 15,
        left: 20,
        zIndex: 1
    },
    inputIconRight: {
        position: "absolute",
        top: 15,
        right: 20,
        zIndex: 1,
        width: 20,
        height: 40
    }
});

export default Location;
