import { Icon } from "@material-ui/core";
import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

type ButtonTypes = {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  icon?: string;
};

const Button = ({ children, icon, ...props }: ButtonTypes) => {
  return (
    <StyledButton {...props}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: 1px solid red;
`;

export default Button;
