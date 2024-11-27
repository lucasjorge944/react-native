import { View } from "react-native";
import React from "react";
import ListItem from "@/app/components/ListItem";
import { ThemeProps, useTheme } from "@/app/context/ThemeContext";
import { PalleteProps } from "@/constants/Pallete";

type Props = {
    place: any;
};

const PlaceListInfos = (props: Props) => {
    const { place } = props;
    const hookTheme = useTheme() as ThemeProps;
    const theme = hookTheme.theme as PalleteProps;
    const items = [
        {
            title: "Alugar espaço",
            subtitle: "Aluguel de quadras para futvolei, volei e mais..."
        },
        {
            title: "Aulas",
            subtitle: "Venha fazer das nossas turmas"
        },
        {
            title: `Sobre ${place.name}`,
            subtitle: "Conheça mais sobre o espaço"
        },
        { title: "Aberto", subtitle: "Fecha às 23h00", color: theme.green }
    ];
    return (
        <View>
            {items.map((item, index) => (
                <ListItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    color={item.color}
                />
            ))}
        </View>
    );
};

export default PlaceListInfos;
