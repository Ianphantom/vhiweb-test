import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundStyled className='container'>
      <img
        src='https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif'
        alt='404'
      />
    </NotFoundStyled>
  );
};

const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
