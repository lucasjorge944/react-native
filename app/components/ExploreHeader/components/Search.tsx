import { View, Text, Animated, Dimensions, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import ButtonIcon from "@/app/components/ButtonIcon";
import Input from "@/app/components/Input";
import { PalleteProps } from "@/constants/Pallete";
import Tokens from "@/constants/Tokens";
import { AntDesign } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import styles from "../styles";

const { width: screenWidth } = Dimensions.get("window");

const Search = () => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const _styles = styles(theme);

    const [isFocused, setIsFocused] = useState(false);
    const { control } = useForm();

    const inputRef = useRef<TextInput>(null);

    const widthAnim = useRef(new Animated.Value(screenWidth * 1 - 24)).current;

    const expandWidth = () => {
        Animated.timing(widthAnim, {
            toValue: screenWidth * 1 - 24,
            duration: Tokens.animations.duration[200],
            useNativeDriver: false
        }).start();
    };

    const shrinkWidth = () => {
        Animated.timing(widthAnim, {
            toValue: screenWidth * 0.84 - 6,
            duration: Tokens.animations.duration[200],
            useNativeDriver: false
        }).start();
    };

    const handleFocus = () => {
        setIsFocused(true);
        shrinkWidth();
    };

    const handleBlur = () => {
        expandWidth();
        setTimeout(() => {
            setIsFocused(false);
        }, 500);
    };

    const onReturn = () => {
        expandWidth();
        setTimeout(() => {
            setIsFocused(false);
        }, 500);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    return (
        <View
            style={{
                ..._styles.actionRow,
                justifyContent: "flex-end",
                alignItems: "center"
            }}
        >
            {isFocused && (
                <ButtonIcon>
                    <AntDesign
                        name="arrowleft"
                        size={Tokens.fontSize[30]}
                        onPress={onReturn}
                    />
                </ButtonIcon>
            )}
            <Animated.View style={{ width: widthAnim }}>
                <Input
                    inputProps={{
                        placeholder: "Quadras, atividades, aulas",
                        onFocus: handleFocus,
                        onBlur: handleBlur
                    }}
                    icon={<AntDesign name="search1" size={20} />}
                    ref={inputRef}
                    formProps={{
                        name: "name",
                        control,
                        rules: {
                            required: "Nome é obrigatório."
                        }
                    }}
                ></Input>
            </Animated.View>
        </View>
    );
};

export default Search;
