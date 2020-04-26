// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import messaging from '@react-native-firebase/messaging';

import { Navigation } from "react-native-navigation";
import regiserRoutes, { setAuthStack } from './src/router/registerRoutes';
regiserRoutes();

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

Navigation.events().registerAppLaunchedListener(setAuthStack);