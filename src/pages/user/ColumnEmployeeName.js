import styled from "styled-components";

const ColumnEmployeeName = ({ avatar, first, last }) => {
  return (
    <ColumnStyled className='userImage'>
      <img src={avatar} alt='UserPreview' />
      {`${first} ${last}`}
    </ColumnStyled>
  );
};

const ColumnStyled = styled.div`
  img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;
export default ColumnEmployeeName;
