import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";
import { Navigation } from "react-native-navigation";

const profile = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    })
    return (
        <View style={styles.container}>
            <Text>profile</Text>
            <Button
                title={'setting'}
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: 'setting-screen'
                    }
                })}
            />
        </View>
    )
}
export default profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});