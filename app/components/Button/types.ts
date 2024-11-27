import { TouchableOpacityProps } from "react-native";

type CustomProps = { text: string; backgroundColor?: string };

export type Props = CustomProps & TouchableOpacityProps;
