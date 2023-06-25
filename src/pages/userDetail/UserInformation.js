import styled from "styled-components";

// import icon
import appleIcon from "../../assets/svg/apple-icon.svg";
import spotifyIcon from "../../assets/svg/spotify-icon.svg";
import designPodcast from "../../assets/images/design-podcast.png";

const UserInformation = () => {
  return (
    <UserInformationStyled>
      <div className='cardContainer'>
        <div className='title text-s18 text-w700'>User Information</div>
        <div className='subtitle text-s16'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          veritatis, sed culpa officiis vel error? Nam temporibus iure tenetur
          atque quos consectetur saepe aliquam nostrum! Vel at soluta nostrum
          recusandae.
        </div>
        <div className='led-preview'>
          <div>
            <img src={designPodcast} alt='design-podcast-preview' />
          </div>
          <div>
            <div className='name'>Ian Felix Jonathan</div>
            <div className='position'>Podcast Designer</div>
          </div>
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
    .led-preview {
      padding: 40px 40px;
      background: #535353;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
      .name {
        color: white;
        font-size: 21px;
        font-weight: 500;
      }
      .position {
        color: rgba(255, 255, 255, 0.7);
      }
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
`;

export default UserInformation;
