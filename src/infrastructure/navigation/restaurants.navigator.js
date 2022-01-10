import React from 'react'
import { Text } from 'react-native'
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack'

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen'
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			headerMode='none'
			screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}>
			<RestaurantStack.Screen
				name='Restaurants'
				component={RestaurantsScreen}
				options={{ headerShown: false }}
			/>
			<RestaurantStack.Screen
				name='RestaurantsDetail'
				component={RestaurantDetailScreen}
				// options={{ headerShown: false }}
			/>
		</RestaurantStack.Navigator>
	)
}