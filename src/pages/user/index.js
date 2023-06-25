import styled from "styled-components";
import UserListTable from "./UserListTable";

const User = () => {
  return (
    <UserStyled className='container'>
      <UserListTable />
    </UserStyled>
  );
};

const UserStyled = styled.div`
  padding: 40px 0px;
`;

export default User;
