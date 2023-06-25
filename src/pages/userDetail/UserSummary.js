import styled from "styled-components";

const UserSummary = ({ userDetail }) => {
  return (
    <UserSummaryStyled>
      {userDetail.data && (
        <div className='cardContainer'>
          <div>
            <img src={userDetail.data.avatar} alt='user-profile' />
          </div>
          <div>
            <div className='username text-s18 text-w600'>{`${userDetail.data.first_name} ${userDetail.data.last_name}`}</div>
            <div className='username text-s13 text-w500'>
              {userDetail.data.email}
            </div>
            <div className='support text-s14'>{userDetail.support.text}</div>
          </div>
        </div>
      )}
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

  @media (max-width: 992px) {
    margin-right: 0px;
    .cardContainer {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        margin-bottom: 0px;
      }
    }
  }

  @media (max-width: 576px) {
    margin-right: 0px;
    .cardContainer {
      display: block;
      img {
        margin-bottom: 20px;
      }
    }
  }
`;

export default UserSummary;
