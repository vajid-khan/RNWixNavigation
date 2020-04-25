import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const leftDrawer = (props) => (
    <View style={styles.container}>
        <Text>leftDrawer</Text>
    </View>
)
export default leftDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});