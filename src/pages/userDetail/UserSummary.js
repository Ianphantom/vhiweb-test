import styled from "styled-components";

const UserSummary = () => {
  return (
    <UserSummaryStyled>
      <div className='cardContainer'>
        <img src='https://reqres.in/img/faces/1-image.jpg' alt='user-profile' />

        <div className='username text-s18 text-w600'>David Schwarz</div>
        <div className='username text-s14 text-w500'>ian25yola@gmail.com</div>
        <div className='support text-s14'>
          To keep ReqRes free, contributions towards server cost are appreciated
        </div>
      </div>
    </UserSummaryStyled>
  );
};

const UserSummaryStyled = styled.div`
  margin-top: 40px;
  margin-right: 40px;
  margin-bottom: 40px;

  .cardContainer {
    background: white;
    padding: 16px 16px;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
    border-radius: 8px;
    img {
      margin-bottom: 20px;
      width: 100%;
      border-radius: 8px;
    }
    .username {
      margin-bottom: 10px;
    }
    .support {
      line-height: 20px;
    }
  }
`;

export default UserSummary;
