import styled from 'styled-components';
import { IHeaderButtonStyledProps } from './Header.types';

export const HeaderStyled = styled.header`
    background-color: #2c2c2c;
    padding: 15px 25px;
    color: #fff;
`;

export const HeaderNavStyled = styled.nav`
    display: flex;
    gap: 15px;
`;

export const HeaderButtonStyled = styled.button<IHeaderButtonStyledProps>`
    background-color: #fff;
    color: #2c2c2c;
    border: none;
    padding: 10px;
    border-radius: 5px;
    ${(props) =>
        props.isActive &&
        `
        background-color: #0D99FF;
        color: #fff;
  `}
`;
