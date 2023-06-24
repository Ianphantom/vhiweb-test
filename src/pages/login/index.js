import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

// import AOS Style
import AOS from "aos";
import "aos/dist/aos.css";

// import Component
import LoginInputContainer from "./LoginInputContainer";
import ButtonComponent from "../../components/ButtonComponent";

// import function to handle user action
import { handleChange } from "../../utils/formUtils";
import { postData } from "../../utils/apiUtils";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleFormSubmit = async () => {
    const response = await postData("https://reqres.in/api/login", formFields);
    const { responseStatus, responseData } = response;
    if (!responseStatus) {
      toast.error(responseData.error, {
        position: "top-right",
        autoClose: 5000,
        draggable: true,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LoginStyled className='container'>
      <div className='left' data-aos='zoom-in' data-aos-duration='2000'>
        <div className='title text-s24 text-w800'>Welcome to VhiWeb Test</div>
        <div className='subtitle text-s16 text-w700 text-grey'>
          Sign In With Your Email
        </div>
        <LoginInputContainer
          label={"Email"}
          type='text'
          name='email'
          placeholder='Enter Your Email Address'
          onChange={(e) => handleChange(e, formFields, setFormFields)}
        />
        <LoginInputContainer
          label={"Password"}
          type='password'
          name='password'
          placeholder='Enter Your Password'
          onChange={(e) => handleChange(e, formFields, setFormFields)}
        />
        <ButtonComponent
          className='btn btn-primary'
          label={"Login"}
          onClick={handleFormSubmit}
        />
        <div className='register text-s13 text-w500'>
          No Account Yet? <span>Sign up Now!</span>
        </div>
      </div>
      <div className='right'>
        <img
          src='https://cdn.dribbble.com/users/24711/screenshots/5371151/media/beab6129abea011a891497c3324fae61.gif'
          alt='Login Preview'
        />
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  padding: 70px 0px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  .left {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(234, 237, 250, 0.5);
    padding: 50px 50px;
    border-radius: 24px;
    box-shadow: 0px 4px 8px rgba(31, 35, 41, 0.03),
      0px 3px 6px -6px rgba(31, 35, 41, 0.05),
      0px 6px 18px 6px rgba(31, 35, 41, 0.03);

    .title {
      color: #171151;
      margin-bottom: 15px;
    }

    .subtitle {
      color: #646a73;
      margin-bottom: 30px;
    }

    .register {
      margin-top: 15px;
      text-align: center;
      color: #646a73;
      span {
        color: #3370ff;
        cursor: pointer;
      }
    }
  }

  .right {
    width: 60%;
    img {
      width: 100%;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    .right {
      display: none;
    }
    .left {
      width: 100%;
    }
  }
`;

export default Login;
