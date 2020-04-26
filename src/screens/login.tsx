import React, { useEffect } from "react";
import {
    View,
    Text,
    Alert,
    Button,
    StyleSheet,
} from "react-native";

import { setAppNavigationStack } from '../router/registerRoutes'
import messaging from '@react-native-firebase/messaging';

import { Navigation } from 'react-native-navigation'

const login = (props) => {

    useEffect(() => {
        requestUserPermission();
    }, []);

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        return unsubscribe;
    }, []);

    async function requestUserPermission() {
        const settings = await messaging().requestPermission();

        if (settings) {
            console.log('Permission settings:', settings);
        }
    }


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