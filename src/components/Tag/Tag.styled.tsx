import styled, { css } from "styled-components";
import { TagStyledProps } from "./Tag.types";

export const TagStyled = styled.span<TagStyledProps>`
  ${({ color, backgroundColor }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    text-transform: uppercase;
    color: ${color};
    height: 20px;
    padding: 0px 8px;
    background: ${backgroundColor};
    border-radius: 24px;
  `}
`;
