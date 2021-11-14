import React from 'react'
import styled from 'styled-components/native'

import { Searchbar } from 'react-native-paper'

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[2]};
	margin-top: ${(props) => props.theme.space[1]};
`

export const Search = () => {
	return (
		<SearchContainer>
			<Searchbar placeholder='Search' />
		</SearchContainer>
	)
}
