import { View, Text, Image, StyleSheet } from "react-native";

export default function TopBar() {
    return (
        <View style={styles.topbar}>
            <View style={styles.titleArea}>
                <Text style={styles.titleWord}>TextCube</Text>
                <Image source={require("../assets/icon/search.png")} style={styles.icon} />
            </View>
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    topbar: {
        height: 68,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    titleArea: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleWord: {
        fontSize: 32,
        fontWeight: "bold",
    },
    icon: {
        width: 48,
        height: 48,
    },
    line: {
        height: 1,
        backgroundColor: "#727272",
        width: "100%",
        marginTop: 8,
    }
});