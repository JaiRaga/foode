import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'

import { RestaurantInfo } from '../components/restaurant-info.component'

export const RestaurantsScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar placeholder='Search' />
			</View>
			<View style={styles.content}>
				<RestaurantInfo />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		// backgroundColor: 'orange',
		padding: 8,
		marginTop: 4,
	},
	content: {
		// height: '100%',
		flex: 1,
		padding: 16,
		backgroundColor: 'blue',
	},
	text: {
		color: 'white',
	},
})
