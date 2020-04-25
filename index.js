// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import { Navigation } from "react-native-navigation";
import regiserRoutes, { setAuthStack } from './src/router/registerRoutes';
regiserRoutes();

Navigation.events().registerAppLaunchedListener(setAuthStack);