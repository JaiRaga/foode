import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { SafeArea } from '../../../src/components/utility/safe-area.component'

import { RestaurantsNavigator } from './restaurants.navigator'
import { MapScreen } from '../../features/map/screens/map.screen'

const Tab = createBottomTabNavigator()

// Icons for each tab
const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
}

const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
)

// displays tabs for screen change
const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name]
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	}
}

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={createScreenOptions}>
				<Tab.Screen
					name='Restaurants'
					component={RestaurantsNavigator}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name='Map'
					component={MapScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name='Settings'
					component={Settings}
					options={{ headerShown: false }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
