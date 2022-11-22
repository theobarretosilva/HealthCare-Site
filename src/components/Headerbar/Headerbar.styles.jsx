import styled from "styled-components";

export const HeaderSyled = styled.header`
    background: #B2E8D0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
`

export const LogoStyled = styled.img`
    width: 7vw;
    height: 7vw;
    margin: 1.3%;
    margin-left: 4%;
`

export const DivNavStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 35px;
    margin-right: 4%;
    align-items: center;
    flex-wrap: wrap;
`

export const PStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.5vw;
    color: #063E44;
    cursor: pointer;
    text-decoration: none;

    :hover{
        color: black;
    }
`

export const PSubStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.5vw;
    color: #063E44;
    margin: auto;
    text-decoration: underline;
`