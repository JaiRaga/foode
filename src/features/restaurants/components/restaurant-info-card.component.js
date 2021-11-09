import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg'

import star from '../../../../assets/star'
import open from '../../../../assets/open'

const RestaurantCard = styled(Card)``

const RestaurantCardCover = styled(Card.Cover)``

const Info = styled.View`
	padding: ${(props) => props.theme.space[2]};
`

const Address = styled.Text`
	font-family: ${(props) => props.theme.fonts.heading};
	text-transform: capitalize;
	padding: ${(props) => props.theme.space[1]} 0px;
`

const Title = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body}
	font-size: ${(props) => props.theme.fontSizes.body};
	color: ${(props) => props.theme.colors.ui.primary};
`

const Rating = styled.View`
	flex-direction: row;
	padding: ${(props) => props.theme.space[2]} 0px;
`

const Section = styled.View`
	flex-direction: row;
	align-items: center;
`

const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`

const Closed = styled.View``

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
	console.log(ratingArray)
	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Section>
					<Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant='label' style={{ color: 'red' }}>
								CLOSED TEMPORARILY
							</Text>
						)}
						<View style={{ paddingLeft: 16 }} />
						{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						<View style={{ paddingLeft: 16 }} />
						<Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	)
}
