import camelize from 'camelize'
import { mocks, mockImages } from './mock'

export const restaurantsRequest = (location) => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location]
		if (!mock) {
			reject('Location not found')
		}
		console.log('restaurant service mock location', location)
		console.log('restaurant service mock location', mock)
		resolve(mock)
	})
}

export const restaurantsTransform = ({ results = [] }) => {
	const mappedResults = results.map((restaurant) => {
		restaurant.photos = restaurant.photos.map((p) => {
			return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
		})

		return {
			...restaurant,
			address: restaurant.vicinity,
			isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
		}
	})
	// console.log(mappedResults)
	return camelize(mappedResults)
}
