import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'

export const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = 'Some Restaurant',
		address = 'ram street',
		photos = [
			'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		icon,
		isOpenNow = true,
		isClosedTemporarily,
		rating = 4,
	} = restaurant
	return (
		<Card>
			<Card.Cover source={{ uri: photos[0] }} />
			<Title style={styles.title}>{name}</Title>
		</Card>
	)
}

const styles = StyleSheet.create({
	title: {
		padding: 8,
	},
})
