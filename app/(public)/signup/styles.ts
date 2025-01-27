import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    inputContainer: {
        gap: 15,
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 16
    },
    button: {
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    linkButton: {
        alignItems: "center",
        marginTop: 10
    },
    linkText: {
        color: "#000",
        fontSize: 14,
        textDecorationLine: "underline"
    }
});

export default styles;
