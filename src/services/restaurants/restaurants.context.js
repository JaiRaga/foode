import React, {
	createContext,
	useState,
	useEffect,
	useMemo,
	useContext,
} from 'react'

import { LocationContext } from '../location/location.context'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const { location } = useContext(LocationContext)

	const retrieveRestaurants = (loc) => {
		setIsLoading(true)
		setRestaurants([])

		setTimeout(() => {
			restaurantsRequest(loc)
				.then(restaurantsTransform)
				.then((results) => {
					// console.log('1 restaurant context restaurants', results)
					setIsLoading(false)
					setRestaurants(results)
					// console.log('2 restaurant context restaurants', results)
				})
				.catch((error) => {
					setIsLoading(false)
					setError(error)
				})
		}, 2000)
	}

	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`
			// console.log('restaurant context location string', locationString)
			retrieveRestaurants(locationString)
		}
	}, [location])

	return (
		<RestaurantContext.Provider
			value={{
				restaurants,
				isLoading,
				error,
			}}>
			{children}
		</RestaurantContext.Provider>
	)
}
