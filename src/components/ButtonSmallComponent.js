/**
 * ButtonSmallComponent is a reusable component for rendering a styled small button.
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

const ButtonSmallComponent = ({ label, ...otherProps }) => {
  return (
    <ButtonStyled>
      <div {...otherProps}>{label}</div>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  font-weight: 400;
  font-size: 11.375px;

  .buttons {
    border-radius: 6px;
    padding: 4px 16px;
    width: 100%;
  }

  .buttons-primary {
    color: white;
    background: #3370ff;
  }
`;

export default ButtonSmallComponent;
