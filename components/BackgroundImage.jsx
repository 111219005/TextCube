import { ImageBackground, StyleSheet } from "react-native";

export default function BackgroundImage({ children }) {
    return (
        <ImageBackground
            source={require("../assets/image/background.png")}
            style={styles.image}
            resizeMode="cover"
        >
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: "#F7F6F4",
    }
});
