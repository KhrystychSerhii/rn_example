import React from 'react';
import { View, Text, Switch } from 'react-native';

export const SettingsModalScreen = (props) => {
	return (
		<View>
			<Text>Settings Modal screen!</Text>
			<Switch value={true} />
			<Switch value={false} />
		</View>
	)
};
