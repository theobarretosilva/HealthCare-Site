import styled from "styled-components";

export const HeaderSyled = styled.header`
    background: #B2E8D0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
`

export const LogoStyled = styled.img`
    width: 90px;
    margin: 1.3%;
    margin-left: 4%;
`

export const DivNavStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 35px;
    margin-right: 4%;
`

export const PStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: #063E44;
    margin: auto;
    cursor: pointer;

    :hover{
        color: black;
    }
`

export const PSubStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: #063E44;
    margin: auto;
    text-decoration: underline;
`