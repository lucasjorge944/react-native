import Colors from "@/constants/Colors";
import { ActivityIndicator, View } from "react-native";

const StartPage = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <ActivityIndicator
                size="large"
                color={Colors.light.orange[500]}
            ></ActivityIndicator>
        </View>
    );
};

export default StartPage;
