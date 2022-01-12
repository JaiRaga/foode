import React, { useState, useEffect } from 'react'

import { locationRequest, locationTransform } from './location.service'

export const LocationContext = React.createContext()

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState('san francisco')
	const [location, setLocation] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const onSearch = (searchKeyword = 'San Francisco') => {
		setIsLoading(true)
		setKeyword(searchKeyword)
	}

	useEffect(() => {
		if (!keyword.length) {
			// Don't do empty search
			return
		}

		locationRequest(keyword.toLowerCase())
			.then(locationTransform)
			.then((result) => {
				setIsLoading(false)
				setLocation(result)
				// console.log('location context', result)
			})
			.catch((err) => {
				setIsLoading(false)
				setError(err)
				console.log(err)
			})
	}, [keyword])

	return (
		<LocationContext.Provider
			value={{
				isLoading,
				error,
				location,
				search: onSearch,
				keyword,
			}}>
			{children}
		</LocationContext.Provider>
	)
}
