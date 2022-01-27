import { Icon } from "@material-ui/core";
import styled from "styled-components";

type TitleProps = {
  hasBackButton?: boolean;
  title: string;
  subtitle?: string;
};

const Header = ({ hasBackButton, title, subtitle }: TitleProps) => {
  return (
    <Container>
      {hasBackButton && (
        <BackButton>
          <Icon className="icon">arrow_back</Icon>
        </BackButton>
      )}
      <TextContainer>
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </TextContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  margin-left: 16px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const BackButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 28px;
  margin-right: 12px;
  color: white;
`;

const TextContainer = styled.div`
  .title {
    color: white;
    font-weight: bold;
    font-size: 28px;
    margin: 0;
  }

  .subtitle {
    color: white;
    font-size: 12px;
    margin: 0;
  }
`;
