import { Navigation } from "react-native-navigation";

import Home from '../screens/home';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Setting from '../screens/setting';
import LeftDrawer from './drawer/leftDrawer';
import ForgotPassword from '../screens/forgotPassword';

export default () => {
    Navigation.registerComponent('login-screen', () => Login);
    Navigation.registerComponent('home-screen', () => Home);
    Navigation.registerComponent('profile-screen', () => Profile);
    Navigation.registerComponent('setting-screen', () => Setting);
    Navigation.registerComponent('forgot-password-screen', () => ForgotPassword);
    Navigation.registerComponent('left-drawer', () => LeftDrawer);
}

export const setAuthStack = () => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: 'transparent',
            style: 'dark'
        },
        topBar: {
            visible: false
        }
    });
    Navigation.setRoot({
        root: {
            stack: {
                options: {
                    topBar: {
                        visible: false,
                    }
                },
                children: [
                    {
                        component: {
                            name: 'login-screen',
                        }
                    }
                ]
            }
        }
    });
}

export const setAppNavigationStack = () => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: 'grey',
            style: 'light'
        },
        topBar: {
            visible: true,
            background: {
                color: 'grey'
            }
        }
    });
    Navigation.setRoot({
        root: {

            sideMenu: {
                left: {
                    component: {
                        name: 'left-drawer'
                    }
                },
                center: {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'home-screen'
                                }
                            },
                        ]
                    }
                }
            }
        }
    });
}