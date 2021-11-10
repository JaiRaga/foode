import styled from 'styled-components/native'
import { Card } from 'react-native-paper'

export const RestaurantCard = styled(Card)``

export const RestaurantCardCover = styled(Card.Cover)``

export const Info = styled.View`
	padding: ${(props) => props.theme.space[2]};
`

export const Address = styled.Text`
	font-family: ${(props) => props.theme.fonts.heading};
	text-transform: capitalize;
	padding: ${(props) => props.theme.space[1]} 0px;
`

export const Title = styled.Text`
	font-family: ${(props) => props.theme.fonts.body}
	font-size: ${(props) => props.theme.fontSizes.body};
	color: ${(props) => props.theme.colors.ui.primary};
`

export const Rating = styled.View`
	flex-direction: row;
	padding: ${(props) => props.theme.space[2]} 0px;
`

export const Section = styled.View`
	flex-direction: row;
	align-items: center;
`

export const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	padding-right: ${(props) => props.theme.space[1]};
`

export const Icon = styled.Image`
	width: 15px;
	height: 15px;
`
