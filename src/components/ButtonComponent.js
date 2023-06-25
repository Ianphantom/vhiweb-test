/**
 * ButtonComponent is a reusable component for rendering a styled button.
 *
 * @component
 * @example
 * return (
 *   <ButtonComponent
 *     label="Click Me"
 *     onClick={handleButtonClick}
 *     className="btn-primary"
 *   />
 * )
 *
 * @param {string} label - The label for the button.
 * @param {...any} otherProps - Additional props to be spread onto the button element.
 * @returns {JSX.Element} - The ButtonComponent JSX element.
 */

import styled from "styled-components";

const ButtonComponent = ({ label, ...otherProps }) => {
  return (
    <ButtonStyled>
      <div {...otherProps}>{label}</div>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  .buttons {
    border-radius: 6px;
    padding: 14px 14px;
    width: 100%;
  }

  .buttons-primary {
    color: white;
    background: #3370ff;
  }
`;

export default ButtonComponent;
