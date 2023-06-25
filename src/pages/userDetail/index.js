import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// import function
import { getData } from "../../utils/apiUtils";

// import component
import BackComponent from "./BackComponent";
import UserSummary from "./UserSummary";
import UserInformation from "./UserInformation";

const UserDetail = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://reqres.in/api/users/${id}`;
        const response = await getData(url);
        setUserDetail(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <UserDetailStyled>
      <div className='container'>
        <BackComponent />
        <div className='main'>
          <div className='left-skeleton'>
            <UserSummary userDetail={userDetail} />
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

  @media (max-width: 992px) {
    .main {
      flex-direction: column;
      .left-skeleton {
        width: 100%;
      }

      .right-skeleton {
        width: 100%;
        border-left: none;
      }
    }
  }
`;

export default UserDetail;
