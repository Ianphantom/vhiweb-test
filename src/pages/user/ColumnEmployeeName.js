import styled from "styled-components";

const ColumnEmployeeName = ({ avatar, first, last }) => {
  return (
    <ColumnStyled className='userImage'>
      <div>
        <img src={avatar} alt='UserPreview' />
      </div>
      <div>{`${first} ${last}`}</div>
    </ColumnStyled>
  );
};

const ColumnStyled = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    margin-right: 15px;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 5px;
    img {
      margin-right: 0px;
    }
  }
`;
export default ColumnEmployeeName;
