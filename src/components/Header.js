import styled from "styled-components";
import { Link } from "react-router-dom";

// import images
import brandImage from "../assets/images/brand-image.png";

const Header = () => {
  return (
    <HeaderStyled>
      <div className='container'>
        <nav className='navbar navbar-expand-lg'>
          <Link className='navbar-brand' to='/'>
            <img src={brandImage} alt='Brand Preview' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon text-s24'>☰</span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <Link className='nav-item nav-link text-w600 text-s16' to='/'>
                User
              </Link>
              <Link
                className='nav-item nav-link active text-w600 text-s16'
                to='/service'
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  border-bottom: 1px solid #eceef3;
  .container {
    nav {
      padding: 20px 0px;
      .navbar-nav {
        display: flex;
        gap: 30px;
        align-items: center;
        .nav-item {
          color: #333333;
          transition: ease all 1s;
          &:hover {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export default Header;
