import React, { useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import styled from 'styled-components'
import { Search } from '../components/search.component'
import { LocationContext } from '../../../services/location/location.context'
import { RestaurantContext } from '../../../services/restaurants/restaurants.context'
import { MapCallout } from '../components/map-callout.component'

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`

const SomeText = styled.Text``

export const MapScreen = ({ navigation }) => {
	const { location } = useContext(LocationContext)
	const { restaurants = [] } = useContext(RestaurantContext)

	const [latDelta, setLatDelta] = useState(0)

	const { lat, lng, viewport } = location

	useEffect(() => {
		const northeastLat = viewport.northeast.lat
		const southwestLat = viewport.southwest.lat
		setLatDelta(northeastLat - southwestLat)
	}, [location, viewport])

	return (
		<>
			<Search />
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}>
				{restaurants.map((restaurant) => {
					return (
						<MapView.Marker
							key={restaurant.name}
							title={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng,
							}}>
							<MapView.Callout
								onPress={() =>
									navigation.navigate('RestaurantDetail', { restaurant })
								}>
								<MapCallout restaurant={restaurant} />
							</MapView.Callout>
						</MapView.Marker>
					)
				})}
			</Map>
		</>
	)
}
