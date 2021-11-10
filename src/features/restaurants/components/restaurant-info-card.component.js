import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg'

import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

import {
	RestaurantCard,
	RestaurantCardCover,
	Info,
	Address,
	Rating,
	Section,
	SectionEnd,
	Icon,
} from './restaurant-info-card.styles'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = 'Some Restaurant',
		address = '101, ram street',
		photos = [
			'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		isOpenNow = true,
		isClosedTemporarily = true,
		rating = 4,
	} = restaurant

	const ratingArray = Array.from(new Array(Math.floor(rating)))
	console.log(restaurant)
	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text>{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map((_, i) => (
							<SvgXml
								// key={`star-${placeId}-${i}`}
								xml={star}
								width={20}
								height={20}
							/>
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant='error'>CLOSED TEMPORARILY</Text>
						)}
						<Spacer position='left' size='large'>
							{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						</Spacer>
						<Spacer position='left' size='large'>
							<Icon source={{ uri: icon }} />
						</Spacer>
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	)
}
