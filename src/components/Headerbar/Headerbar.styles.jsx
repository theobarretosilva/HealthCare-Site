import styled from "styled-components";

export const HeaderSyled = styled.header`
    background: #B2E8D0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;

    @media (max-width: 650px) {
        background: #B2E8D0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        top: 0;
        left: 0;
        right: 0;
    }
`

export const LogoStyled = styled.img`
    @media (min-width: 650px){
        width: 7vw;
        height: 6.2vw;
        margin: 1.3%;
        margin-left: 4%;
    }

    @media (max-width: 650px){
        width: 7vw;
        height: 6.2vw;
        margin: 1.3%;
    }
`

export const DivNavStyled = styled.div`
    @media (min-width: 650px){
        display: flex;
        flex-direction: row;
        gap: 4vw;
        margin-right: 4%;
        align-items: center;
        flex-wrap: wrap;
    }
    
    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
        gap: 2vw;
        align-items: center;
        flex-wrap: wrap;
    }
`

export const PStyled = styled.a`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.3vw;
    color: #063E44;
    cursor: pointer;
    text-decoration: none;
    margin: 0;
    padding: 0;

    :hover{
        color: black;
    }

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 2vw;
        color: #063E44;
        cursor: pointer;
        text-decoration: none;
    }
`

export const PSubStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.3vw;
    color: #063E44;
    margin: auto;
    text-decoration: underline;

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 2vw;
        color: #063E44;
        cursor: pointer;
        text-decoration: none;
    }
`