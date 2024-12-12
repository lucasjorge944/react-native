const black = "#000000";
const white = "#FFFFFF";

const ceruleam = {
    100: "#3F8DA7",
    200: "#2C829E",
    300: "#177694",
    400: "#006889",
    500: "#005F7D",
    600: "#005672",
    700: "#004E68",
    contrast: {
        100: black,
        200: black,
        300: white,
        400: white,
        500: white,
        600: white,
        700: white
    }
};
const orange = {
    100: "#FAB940",
    200: "#F9B22D",
    300: "#F8AA18",
    400: "#F7A101",
    500: "#E19201",
    600: "#CD8501",
    700: "#BA7901",
    contrast: {
        100: black,
        200: black,
        300: black,
        400: black,
        500: black,
        600: black,
        700: black
    }
};
const gray = {
    25: "#D8D8D8",
    50: "#C2C2C2",
    100: "#868683",
    200: "#7A7A77",
    300: "#6D6D69",
    400: "#5E5E5A",
    500: "#555552",
    600: "#4D4D4B",
    700: "#464644",
    contrast: {
        100: black,
        200: black,
        300: black,
        400: white,
        500: white,
        600: white,
        700: white
    }
};
const lavender = {
    200: "#E6ECFA",
    300: "#E4EAFA",
    400: "#E1E8FA",
    500: "#CDD3E3",
    600: "#BAC0CE",
    contrast: {
        100: black,
        200: black,
        300: black,
        400: white,
        500: white,
        600: white
    }
};

export const lightTheme = {
    background: "#F4F5F6",
    backgroundSecondary: lavender[200],
    card: {
        bg: white,
        shadow: ceruleam[100]
    },
    tabBar: {
        bg: white,
        text: ceruleam[600],
        active: orange[500]
    },
    text: ceruleam[700],
    textSecondary: gray[100],
    textInfo: gray[600],
    textAccent: orange[500],
    input: {
        background: white,
        text: gray[500],
        placeholder: gray[50],
        border: gray[400],
        borderFocused: gray[500],
        shadow: ceruleam[100]
    },
    button: {
        primary: {
            bg: ceruleam[200],
            text: white,
            shadow: ceruleam[100]
        },
        secondary: {
            bg: lavender[200],
            text: lavender.contrast[500],
            shadow: lavender[200]
        }
    },
    buttonIcon: {
        bg: "transparent",
        color: ceruleam[400]
    },
    buttonIconFilled: {
        bg: white,
        color: ceruleam[500]
    },
    chips: {
        text: ceruleam[200],
        border: ceruleam[200],
        filled: {
            bg: ceruleam[200],
            text: white
        },
        shadow: ceruleam[100]
    },
    border: {
        thin: gray[25],
        medium: gray[50]
    },
    progress: {
        background: lavender[200],
        bar: ceruleam[200]
    },
    starsRating: orange[500],
    google: "#EB4336",
    facebook: "#0866FF",
    extLink: "#3498db",
    green: "green",
    warn: "#DC1637"
};

export const darkTheme = {
    background: "#F4F5F6",
    backgroundSecondary: lavender[200],
    card: {
        bg: white,
        shadow: ceruleam[100]
    },
    tabBar: {
        bg: white,
        text: ceruleam[600],
        active: orange[500]
    },
    text: ceruleam[700],
    textSecondary: gray[100],
    textInfo: gray[600],
    textAccent: orange[500],
    input: {
        background: white,
        text: gray[500],
        placeholder: gray[50],
        border: gray[400],
        borderFocused: gray[500],
        shadow: ceruleam[100]
    },
    button: {
        primary: {
            bg: ceruleam[200],
            text: white,
            shadow: ceruleam[100]
        },
        secondary: {
            bg: lavender[200],
            text: lavender.contrast[500],
            shadow: lavender[200]
        }
    },
    buttonIcon: {
        bg: "transparent",
        color: ceruleam[400]
    },
    buttonIconFilled: {
        bg: white,
        color: ceruleam[500]
    },
    chips: {
        text: ceruleam[200],
        border: ceruleam[200],
        filled: {
            bg: ceruleam[200],
            text: white
        },
        shadow: ceruleam[100]
    },
    border: {
        thin: gray[25],
        medium: gray[200]
    },
    progress: {
        background: lavender[200],
        bar: ceruleam[200]
    },
    starsRating: orange[500],
    google: "#EB4336",
    facebook: "#0866FF",
    extLink: "#3498db",
    green: "green",
    warn: "#DC1637"
};

export type PalleteProps = typeof lightTheme;
