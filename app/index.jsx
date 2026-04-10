import { StyleSheet, View, StatusBar, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import TopBar from "../components/TopBar.jsx";
import ImageUploadBox from "../components/ImageUploadBox.jsx";
import BackgroundImage from "../components/BackgroundImage.jsx";

export default function Page() {

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaProvider>
            <BackgroundImage>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={[styles.container, { paddingTop: insets.top }]}>
                    <View style={styles.main}>
                        <TopBar />             
                        <ImageUploadBox />
                    </View>
                </View>
            </BackgroundImage>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F7F6F4",
    },
    main: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 10,
        paddingHorizontal: 16,
    },
});
