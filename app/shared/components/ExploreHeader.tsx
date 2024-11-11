import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Animated,
    Dimensions,
    ScrollView
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Colors from "@/constants/Colors";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import Chip from "./Chip";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import { NotificationFeedbackType } from "expo-haptics";

const { width: screenWidth } = Dimensions.get("window");

interface Props {
    onChipChanged: (chip: ChipType) => void;
}

const ExploreHeader = ({ onChipChanged }: Props) => {
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const scrollRef = useRef<ScrollView>(null);
    const [serachTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const widthAnim = useRef(new Animated.Value(screenWidth * 1 - 24)).current;
    const [chips, setChips] = useState<ChipType[]>([]);
    const [chipIndex, setChipIndex] = useState<number>(0);
    useEffect(() => {
        setChips([
            {
                _id: "1",
                initialText: "Espaços",
                icon: false
            },
            {
                _id: "2",
                initialText: "Atividades",
                icon: true
            },
            {
                _id: "3",
                initialText: "Aulas",
                icon: false
            },
            {
                _id: "4",
                initialText: "Futvolei",
                icon: false
            },
            {
                _id: "5",
                initialText: "Beachtenis",
                icon: false
            },
            {
                _id: "6",
                initialText: "Voley",
                icon: false
            }
        ]);
        setChipIndex(0);
    }, []);
    const expandWidth = () => {
        Animated.timing(widthAnim, {
            toValue: screenWidth * 1 - 24,
            duration: 150,
            useNativeDriver: false
        }).start();
    };
    const shrinkWidth = () => {
        Animated.timing(widthAnim, {
            toValue: screenWidth * 0.8 - 6,
            duration: 150,
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
    const onClearSerachTerm = () => {
        setSearchTerm("");
    };
    const onReturn = () => {
        setTimeout(() => {
            setIsFocused(false);
        }, 500);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };
    const onSelectChip = (index: number) => {
        setChipIndex(index);
        Haptics.selectionAsync();
        console.log("bef", chips[chipIndex]);
        onChipChanged(chips[index]);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View
                style={{
                    ...styles.container,
                    backgroundColor: "white"
                }}
            >
                <View
                    style={{ ...styles.actionRow, justifyContent: "flex-end" }}
                >
                    {isFocused && (
                        <TouchableOpacity
                            style={styles.buttonReturn}
                            onPress={onReturn}
                        >
                            <AntDesign
                                name="arrowleft"
                                size={25}
                                color={Colors.light.gray[400]}
                            />
                        </TouchableOpacity>
                    )}
                    <Animated.View style={{ width: widthAnim }}>
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
                                placeholder="Quadras, atividades, aulas"
                                onChangeText={(text: string) =>
                                    setSearchTerm(text)
                                }
                                value={serachTerm}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
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
                    </Animated.View>
                </View>
                <ScrollView
                    ref={scrollRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 10,
                        paddingHorizontal: 12,
                        paddingTop: 6
                    }}
                >
                    {chips.map((chip: ChipType, index: number) => (
                        <Chip
                            key={chip._id}
                            initialText={chip.initialText}
                            filled={chipIndex === index}
                            icon={chip.icon}
                            onPress={() => onSelectChip(index)}
                        />
                    ))}
                </ScrollView>

                <View style={styles.myLocationContainer}>
                    <Ionicons
                        name="location-outline"
                        style={styles.myLocationIcon}
                    />
                    <Link
                        href={"/(modals)/location"}
                        style={styles.myLocationText}
                    >
                        Minha Localização
                    </Link>
                    <FontAwesome6 name="chevron-down" size={10} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150
    },
    actionRow: {
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 12,
        width: "100%"
    },
    buttonReturn: {
        width: 50,
        height: 50,
        backgroundColor: Colors.light.white[600],
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 12,
        top: 8
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
    },
    myLocationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        width: "100%",
        height: 34,
        borderTopColor: Colors.light.white[700],
        borderTopWidth: 1,
        borderBottomColor: Colors.light.white[700],
        backgroundColor: Colors.light.white[500],
        borderBottomWidth: 1
    },
    myLocationText: {
        color: Colors.light.gray[600],
        fontSize: 14
    },
    myLocationIcon: {
        color: Colors.light.gray[600],
        fontSize: 14
    }
});

export type ChipType = {
    _id: string;
    initialText: string;
    icon?: boolean;
};

export default ExploreHeader;
