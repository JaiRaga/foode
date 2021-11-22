import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'

import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { Search } from '../components/search.component'

import { RestaurantContext } from '../../../services/restaurants/restaurants.context'

const RestaurantListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`
const RestaurantList = styled(FlatList)``

const Loading = styled(ActivityIndicator)`
	flex: 1;
`

export const RestaurantsScreen = () => {
	const { restaurants, isLoading, error } = useContext(RestaurantContext)
	console.log('Restaurant screen', restaurants)
	return (
		<SafeArea>
			<Search />
			{isLoading ? (
				<Loading animating={true} color={Colors.blue800} size='large' />
			) : (
				<RestaurantList
					data={restaurants}
					renderItem={({ item }) => {
						return (
							<Spacer position='bottom' size='large'>
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						)
					}}
					keyExtractor={(item) => item.name}
				/>
			)}
		</SafeArea>
	)
}
