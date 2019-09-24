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
			navigationOptions: ({ screenProps, navigation }) => ({ header: <Header navigation={navigation} screenProps={screenProps} showBackButton={false} /> })
		},
		Details: {
			screen: DetailsScreen,
			navigationOptions: ({ screenProps, navigation }) => ({ header: <Header navigation={navigation} screenProps={screenProps} /> })
		}
	}, {
	initialRouteName: 'Home'
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
