import styled, { css } from "styled-components";

type TagTypes = {
  status: "success" | "alert" | "attention";
  text: string;
};

type StatusProps = {
  status: "success" | "alert" | "attention";
};

const Tag = ({ status, text }: TagTypes) => {
  return <TagStyled status={status}>{text}</TagStyled>;
};

const TagStyled = styled.span<StatusProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  height: 20px;
  padding: 0px 8px;
  border-radius: 24px;
  ${({ status }) => css`
    color: ${generateColor(status)?.color};
    background: ${generateColor(status)?.backgroundColor};
  `}
`;

const generateColor = (status: string) => {
  if (status === "success") {
    const successColors = {
      backgroundColor: "#E7FAE6",
      color: "#04BB00",
    };
    return successColors;
  } else if (status === "alert") {
    const alertColors = {
      backgroundColor: "#FAE6E6",
      color: "#FF0D0D",
    };
    return alertColors;
  } else if (status === "attention") {
    const attentionColors = {
      backgroundColor: "#FAF2E6",
      color: "#FF800B",
    };
    return attentionColors;
  }
};

export default Tag;
