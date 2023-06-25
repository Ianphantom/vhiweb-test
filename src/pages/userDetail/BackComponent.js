import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

// import icon
import backArrow from "../../assets/svg/icon-back.svg";

const BackComponent = () => {
  const navigate = useNavigate();
  const goBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BackStyled className='back' data-aos='fade-left' data-aos-duration='1500'>
      <img src={backArrow} alt='icon-back' onClick={goBackButton} />
      <div className='text text-s13 text-w600'>Back To Previous</div>
    </BackStyled>
  );
};

const BackStyled = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0px;
  .text {
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #555555;
  }
  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default BackComponent;
