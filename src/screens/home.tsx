import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";
import { Navigation } from "react-native-navigation";

const home = (props) => (
    <View style={styles.container}>
        <Text>home</Text>
        <Button
            title={'Profile'}
            onPress={() => Navigation.push(props.componentId, {
                component: {
                    name: 'profile-screen',

                },
            })}
        />
    </View>
)
export default home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});