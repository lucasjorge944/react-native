import { TouchableOpacityProps } from "react-native";

type CustomProps = {
    onPress?: () => void;
    children: React.ReactNode;
    filled?: boolean;
};
export type Props = CustomProps & TouchableOpacityProps;
