import styled from "styled-components";

type TypeButton = {
  type: "button" | "submit" | "reset" | undefined;
  children: string;
  disabled?: boolean;
  onClick?: any;
};

const Button = ({ children, ...props }: TypeButton) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  font-family: "Inter";
  border-radius: 8px;
  background: #000;
  border: 0;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #222;
  }
  &:disabled {
    background: #444;
    color: #777;
    cursor: no-drop;
  }
`;
