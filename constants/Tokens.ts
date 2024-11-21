import { Platform } from "react-native";

export default {
    spacing: {
        2: 2,
        4: 4,
        8: 8,
        12: 12,
        16: 16,
        18: 18,
        24: 24
    },
    fontSize: {
        12: 12,
        14: 14,
        16: 16,
        18: 18,
        20: 20,
        24: 24,
        30: 30,
        36: 36,
        48: 48
    },
    fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        "400": "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900"
    },
    borderRadius: {
        4: 4,
        8: 8,
        12: 12,
        16: 16
    },
    borderWidth: {
        1: 1,
        2: 2,
        4: 4,
        8: 8
    },
    opacity: {
        0: 0,
        25: 0.25,
        50: 0.5,
        75: 0.75,
        100: 1
    },
    animations: {
        duration: {
            100: 100,
            200: 200,
            300: 300,
            400: 400,
            500: 500,
            600: 600,
            700: 700,
            800: 800,
            900: 900
        }
    },
    shadow: {
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5
    },
    headerHeigth: Platform.select({
        ios: 170,
        android: 200
    }),
    headerMySpacesHeight: Platform.select({
        ios: 50,
        android: 85
    }),
    buttonIcon: {
        fontSize: 18
    }
};
