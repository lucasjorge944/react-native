import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Animated,
    Dimensions,
    ScrollView,
    Platform
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";
import Chip from "./Chip";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";
import Input from "./Input";
import ButtonIcon from "./ButtonIcon";
import Tokens from "@/constants/Tokens";

const { width: screenWidth } = Dimensions.get("window");

interface Props {
    onChipChanged: (chip: ChipType) => void;
}

const ExploreHeader = (props: Props) => {
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
                icon: false
            },
            {
                _id: "3",
                initialText: "Aulas",
                icon: true
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
    const onClearSerachTerm = () => {
        setSearchTerm("");
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
    const onSelectChip = (index: number) => {
        setChipIndex(index);
        Haptics.selectionAsync();
        console.log("bef", chips[chipIndex]);
        props.onChipChanged(chips[index]);
    };
    const styles = createStyles(theme, props);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
            <View
                style={{
                    ...styles.container,
                    backgroundColor: theme.background
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: Tokens.spacing[12],
                        width: "100%"
                    }}
                >
                    <Link
                        href={"/(auth)/(modals)/location"}
                        style={{ marginTop: Tokens.spacing[8] }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: Tokens.spacing[8]
                            }}
                        >
                            <MaterialIcons
                                name="my-location"
                                size={20}
                                color={theme.text}
                            />
                            <Text
                                style={{
                                    fontSize: Tokens.fontSize[12],
                                    color: theme.text
                                }}
                            >
                                Rua Papoula Vermelha,120
                            </Text>
                        </View>
                    </Link>
                    <View style={{ flex: 1 }}></View>
                    <ButtonIcon>
                        <MaterialCommunityIcons
                            name="bell-badge"
                            size={Tokens.fontSize[20]}
                        />
                    </ButtonIcon>
                    <ButtonIcon>
                        <FontAwesome5 name="cog" size={Tokens.fontSize[20]} />
                    </ButtonIcon>
                </View>
                <View
                    style={{
                        ...styles.actionRow,
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
                            placeholder="Quadras, atividades, aulas"
                            onChangeText={(text: string) => setSearchTerm(text)}
                            value={serachTerm}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            iconLeft="search1"
                            refInput={inputRef}
                        ></Input>
                    </Animated.View>
                </View>
                <ScrollView
                    ref={scrollRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: Tokens.spacing[12],
                        paddingHorizontal: Tokens.spacing[12],
                        paddingTop: Tokens.spacing[8]
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
            </View>
        </SafeAreaView>
    );
};

const createStyles = (theme: PalleteProps, props: Props) => {
    return StyleSheet.create({
        container: {
            height: Tokens.headerHeigth,
            paddingTop: Platform.select({
                ios: 0,
                android: 32
            })
        },
        actionRow: {
            flexDirection: "row",
            paddingVertical: Tokens.spacing[12],
            paddingHorizontal: Tokens.spacing[12],
            gap: Tokens.spacing[12],
            width: "100%"
        }
    });
};

export type ChipType = {
    _id: string;
    initialText: string;
    icon?: boolean;
};

export default ExploreHeader;
