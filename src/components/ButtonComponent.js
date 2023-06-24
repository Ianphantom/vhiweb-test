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
  border-radius: 6px;
  .btn {
    padding: 14px 14px;
    width: 100%;
  }

  .btn-primary {
    color: white;
    background: #3370ff;
  }
`;

export default ButtonComponent;
