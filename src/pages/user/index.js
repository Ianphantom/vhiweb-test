import styled from "styled-components";
import UserListTable from "./UserListTable";

const User = () => {
  return (
    <UserStyled>
      <div className='container'>
        <UserListTable />
      </div>
    </UserStyled>
  );
};

const UserStyled = styled.div`
  padding: 40px 0px;
  background: #f0f4ff;
`;

export default User;
