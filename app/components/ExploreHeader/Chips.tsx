import { ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Tokens from "@/constants/Tokens";
import Chip from "../Chip";
import * as Haptics from "expo-haptics";
import { ChipProps } from "@/types/Chips";

type Props = {
    onChipChanged: (chip: ChipProps) => void;
};

const Chips = (props: Props) => {
    const [chips, setChips] = useState<ChipProps[]>([]);
    const [chipIndex, setChipIndex] = useState<number>(0);

    const scrollRef = useRef<ScrollView>(null);

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

    const onSelectChip = (index: number) => {
        setChipIndex(index);
        Haptics.selectionAsync();
        props.onChipChanged(chips[index]);
    };

    return (
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
            {chips.map((chip: ChipProps, index: number) => (
                <Chip
                    key={chip._id}
                    initialText={chip.initialText}
                    filled={chipIndex === index}
                    icon={chip.icon}
                    onPress={() => onSelectChip(index)}
                />
            ))}
        </ScrollView>
    );
};

export default Chips;
