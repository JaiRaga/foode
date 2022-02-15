import React, { useContext, useState } from 'react'
import { FlatList, Pressable, TouchableOpacity } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'

import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { Search } from '../components/search.component'
import { FavouritesBar } from '../../../components/favourites/favourite-bar.component'

import { RestaurantContext } from '../../../services/restaurants/restaurants.context'
import { FavouritesContext } from '../../../services/favourites/favourites.context'

const RestaurantListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`
const RestaurantList = styled(FlatList)``

const Loading = styled(ActivityIndicator)`
	flex: 1;
`

export const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading, error } = useContext(RestaurantContext)
	const { favourites } = useContext(FavouritesContext)
	const [isToggled, setIsToggled] = useState(false)

	return (
		<SafeArea>
			<Search
				isFavouritesToggled={isToggled}
				onFavouritesToggle={() => setIsToggled(!isToggled)}
			/>
			{isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
			{isLoading ? (
				<Loading animating={true} color={Colors.blue800} size='large' />
			) : (
				<RestaurantList
					data={restaurants}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('RestaurantDetail', { restaurant: item })
								}>
								<Spacer position='bottom' size='medium'>
									<RestaurantInfoCard restaurant={item} />
								</Spacer>
							</TouchableOpacity>
						)
					}}
					keyExtractor={(item) => item.name}
				/>
			)}
		</SafeArea>
	)
}
