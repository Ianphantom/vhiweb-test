import FormInputComponent from "../../components/FormInputComponent";
import styled from "styled-components";

const LoginInputContainer = ({ ...otherProps }) => {
  return (
    <LoginInputContainerStyled>
      <FormInputComponent {...otherProps} />
    </LoginInputContainerStyled>
  );
};

const LoginInputContainerStyled = styled.div`
  margin-bottom: 15px;
`;

export default LoginInputContainer;
