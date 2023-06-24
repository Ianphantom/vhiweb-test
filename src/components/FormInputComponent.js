/**
 * FormInputComponent is a reusable component that combines a label and an input field.
 *
 * @component
 * @example
 * return (
 *   <FormInputComponent
 *     label="Username"
 *     type="text"
 *     placeholder="Enter your username"
 *     onChange={handleInputChange}
 *   />
 * )
 *
 * @param {string} label - The label for the input field.
 * @param {string} type - The type of the input field (e.g., "text", "password").
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {...any} rest - Additional props to be spread onto the InputComponent.
 * @returns {JSX.Element} - The FormInputComponent JSX element.
 */

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
