import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

import { setAppNavigationStack } from '../router/registerRoutes'

import { Navigation } from 'react-native-navigation'

const login = (props) => {
    return (
        <View style={styles.container}>
            <Text>login</Text>
            <Button
                title={'login'}
                onPress={() => setAppNavigationStack()}
            />
            <View style={{ height: 100 }} />
            <Button
                title={'forgot password?'}
                onPress={() => {
                    Navigation.push(props.componentId, {
                        component: {
                            name: 'forgot-password-screen'
                        }
                    })
                }}
            />
        </View>
    )
}
export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});