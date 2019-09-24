import React from 'react';

import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Auth screens
import SignInModalScreen from './containers/Modals/SignInModalScreen';

// Signed in screens
import HomeScreen from './containers/Main/Home';
import DetailsScreen from './containers/Main/Details';

// Modals
import { AdModalScreen } from './containers/Modals/AdModalScreen';
import { NotificationsModalScreen } from './containers/Modals/NotificationsModalScreen';
import { SettingsModalScreen } from './containers/Modals/SettingsModalScreen';

// Components
import { Header } from './components/Header/Header';

const MainNavigator = createStackNavigator({
		Home: {
			screen: HomeScreen,
		},
		Details: {
			screen: DetailsScreen,
		}
	}, {
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			header: Header
		}
	}
);

export default createStackNavigator({
		Main: MainNavigator,
		Ad: {
			screen: AdModalScreen
		},
		Notifications: {
			screen: NotificationsModalScreen
		},
		Settings: {
			screen: SettingsModalScreen
		},
		SignIn: {
			screen: SignInModalScreen
		}
	},
	{
		mode: 'modal',
		headerMode: 'none',
		navigationOptions: {
			gesturesEnabled: false
		}
	}
);
