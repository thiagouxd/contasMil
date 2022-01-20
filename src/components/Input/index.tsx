import styled from "styled-components";

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  margin-bottom: 24px;
  border-radius: 8px;
  margin-top: 16px;
`;
