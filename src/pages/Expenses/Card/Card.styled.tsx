import styled from "styled-components";

export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  background: #565656;
  border-radius: 0 8px 8px 0px;
  margin-right: 24px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #333;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    margin: 0;
    margin-right: 16px;
    color: white;
    font-size: 14px;
  }
`;
