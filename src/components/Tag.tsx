import { useEffect, useState } from "react";
import styled from "styled-components";

const Tag = (props: { text: String }) => {
  return <TagStyled>{props.text}</TagStyled>;
};

const TagStyled = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: hsla(119, 100%, 37%, 1);
  height: 20px;
  padding: 0px 8px;
  background: hsla(117, 67%, 94%, 1);
  border-radius: 24px;
`;

export default Tag;
