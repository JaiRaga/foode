import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'

import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

import { RestaurantContext } from '../../../services/restaurants/restaurants.context'

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[2]};
	margin-top: ${(props) => props.theme.space[1]};
`

const RestaurantListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`
const RestaurantList = styled(FlatList)``

export const RestaurantsScreen = () => {
	const { restaurants, isLoading, error } = useContext(RestaurantContext)

	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar placeholder='Search' />
			</SearchContainer>
			{isLoading ? (
				<ActivityIndicator
					animating={true}
					color={Colors.blue800}
					size='large'
				/>
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
