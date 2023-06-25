import styled from "styled-components";

// import component
import BackComponent from "./BackComponent";
import UserSummary from "./UserSummary";
import UserInformation from "./UserInformation";

const UserDetail = () => {
  return (
    <UserDetailStyled>
      <div className='container'>
        <BackComponent />
        <div className='main'>
          <div className='left-skeleton'>
            <UserSummary />
          </div>
          <div className='right-skeleton'>
            <UserInformation />
          </div>
        </div>
      </div>
    </UserDetailStyled>
  );
};

const UserDetailStyled = styled.div`
  background: #f0f4ff;
  .main {
    display: flex;
    .left-skeleton {
      width: 25%;
    }

    .right-skeleton {
      width: 75%;
      border-left: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
`;

export default UserDetail;
