import { useEffect } from "react";
import styled from "styled-components";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

// import icon
import appleIcon from "../../assets/svg/apple-icon.svg";
import spotifyIcon from "../../assets/svg/spotify-icon.svg";

const UserInformation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <UserInformationStyled data-aos='fade-left' data-aos-duration='1500'>
      <div className='cardContainer'>
        <div className='title text-s18 text-w700'>User Information</div>
        <div className='subtitle text-s16'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          veritatis, sed culpa officiis vel error? Nam temporibus iure tenetur
          atque quos consectetur saepe aliquam nostrum! Vel at soluta nostrum
          recusandae.
        </div>
        <hr />
        <div className='follow'>
          <div className='itunes follow-btn text-s16'>
            <img src={appleIcon} alt='appleicon' />
            <div>Follow on Slash</div>
          </div>
          <div className='spotify follow-btn text-s16'>
            <img src={spotifyIcon} alt='appleicon' />
            <div>Follow on Spotify</div>
          </div>
        </div>
      </div>
    </UserInformationStyled>
  );
};

const UserInformationStyled = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
  .cardContainer {
    background: white;
    padding: 16px 16px;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
    border-radius: 8px;
    .title {
      margin-bottom: 10px;
    }
    .subtitle {
      margin-bottom: 25px;
      line-height: 25px;
    }

    .follow {
      display: flex;
      justify-content: space-between;
      gap: 25px;
      .follow-btn {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        padding: 13px 13px;
        border-radius: 8px;
        color: white;
        cursor: pointer;
        &.itunes {
          background: #303030;
        }
        &.spotify {
          background: #1ed760;
        }
      }
    }
  }

  @media (max-width: 992px) {
    margin-top: 5px;
    margin-left: 0px;
    .follow {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 5px;
    }
  }
`;

export default UserInformation;
