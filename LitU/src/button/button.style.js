import { css } from 'lit';

export const butonCss = css`
    button{
        background-color: coral;
        border: none;
        color: wheat;
        padding: 10px 15px;
        text-align: center;
        display: inline-block;
        font-size: 14px;
    }
    button:hover{
        background-color: darkgoldenrod;
    }
    button:disabled,
    button[disabled]{
        background-color: rgb(204, 204, 204);
        color: rgb(137, 137, 137);
    }
        
`;