import InputComponent from "./InputComponent";
import styled from "styled-components";

const FormInputComponent = ({ label, type, placeholder, ...rest }) => {
  return (
    <FormComponentContainer className='text-s14 text-w500'>
      <div className='label'>{label}</div>
      <InputComponent type={type} placeholder={placeholder} {...rest} />
    </FormComponentContainer>
  );
};

const FormComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .label {
    color: #001737;
  }
`;

export default FormInputComponent;
