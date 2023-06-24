import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled className='text-w500 text-s14 text-grey'>
      <div className='container'>
        <div className='left'>
          &#169; Copyright &#169; IanFelixJS. All Rights Reserved Copyright
        </div>
        <div className='right'>
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
          <div>Pricing</div>
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  padding: 30px 0px;
  border-top: 1px solid #eceef3;
  .container {
    display: flex;
    justify-content: space-between;

    .right {
      display: flex;
      gap: 20px;
    }
  }

  @media (max-width: 992px) {
    .container {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      .left {
        text-align: center;
      }
    }
  }
`;

export default Footer;
