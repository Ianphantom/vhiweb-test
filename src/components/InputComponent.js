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
