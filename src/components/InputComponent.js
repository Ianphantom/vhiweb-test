/**
 * InputComponent is a reusable component for rendering a styled input field.
 *
 * @component
 * @example
 * return (
 *   <InputComponent
 *     type="text"
 *     placeholder="Enter your name"
 *     onChange={handleInputChange}
 *   />
 * )
 *
 * @param {...any} otherProps - Additional props to be spread onto the input element.
 * @returns {JSX.Element} - The InputComponent JSX element.
 */

import styled from "styled-components";

const InputComponent = ({ ...otherProps }) => {
  return (
    <InputComponentStyled className='text-s14 text-w400'>
      <input {...otherProps} />
    </InputComponentStyled>
  );
};

const InputComponentStyled = styled.div`
  input {
    width: 100%;
    padding: 15px 12px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    color: #8f959e;
  }
`;

export default InputComponent;
