import styled from "styled-components";
import {dark} from "./color";

export const size = {
	s: 12,
	m: 15,
	l: 18,
	xl: 22,
	xxl: 25
};
export const weight = {
	s: 100,
	m: 500,
	l: 900
};
export const StyledText = styled.Text`
	color: ${dark.enabled};
	${
	props => props.bold ? `
			font-weight: ${weight.l}
		` : ``
	}
	font-size: ${
	props => props.large ? size.l : size.m
	}
`;
