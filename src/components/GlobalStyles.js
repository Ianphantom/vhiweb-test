import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    a:hover{
        list-style: none;
        text-decoration: none;
    }


    .text-s14{
        font-size: 14px;
        line-height: 16px;
    }

    .text-s16{
        font-size: 16px;
        line-height: 16px;
    }

    .text-s18{
        font-size: 18px;
        line-height: 20px;
    }

    .text-s24{
        font-size: 24px;
        line-height: 30px;
    }

    .text-w400{
        font-weight: 400;
    }

    .text-w500{
        font-weight: 500;
    }

    .text-w600{
        font-weight: 600;
    }

    .text-w700{
        font-weight: 700;
    }

    .text-w800{
        font-weight: 800;
    }

    .text-grey{
        color: #646A73;
    }

`;

export default GlobalStyle;
