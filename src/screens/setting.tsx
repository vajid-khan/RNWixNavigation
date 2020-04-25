import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";
import { Navigation } from "react-native-navigation";

const setting = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    })
    return (
        <View style={styles.container}>
            <Text>setting</Text>
            <Button
                title={'Back'}
                onPress={() => Navigation.pop(props.componentId)}
            />
        </View>
    )
}
export default setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});