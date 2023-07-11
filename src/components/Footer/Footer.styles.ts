import styled from "styled-components";

export const RodapeStyled = styled.footer`
    @media (min-width: 650px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30vw;
        padding-top: 2vh;
        padding-bottom: 6vh;
    }

    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30vw;
        padding-top: 2vh;
        padding-bottom: 6vh;
    }
`

export const DivContatosStyled = styled.div`
    @media (min-width: 650px){
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const PContatosStyled = styled.p`
    @media (min-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1.7vw;
        color: #063E44;
        margin-bottom: 1vh;
    }

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 7vw;
        color: #063E44;
        margin-bottom: 1vh;
    }
`

export const DivContatos2Styled = styled.div`
    @media (min-width: 650px){
        display: flex;
        flex-direction: row;
        margin-top: 3%;
    }
    
    @media (max-width: 650px){
        display: flex;
        flex-direction: row;
        margin-top: 3%;
        justify-content: center;
        align-items: center;
    }
`

export const ImgEmailStyled = styled.img`
    @media (min-width: 650px){
        width: 2.5vw;
        height: 2vw;
    }
    
    @media (max-width: 650px){
        width: 9vw;
        height: 8vw;
    }
`

export const PEmailStyled = styled.p`
    @media (min-width: 650px){
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 1.5vw;
        color: #0C5C64;
        margin: 0;
        margin-left: 3%;
    }

    @media (max-width: 650px){
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 5vw;
        color: #0C5C64;
        margin: 0;
        margin-left: 3%;
    }
`

export const ImgPhoneStyled = styled.img`
    @media (min-width: 650px){
        width: 9%;
        height: 5%;
    }

    @media (max-width: 650px){
        width: 8.5vw;
        height: 7vw;
    }
`

export const DivBaixeAppStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 0;
`

export const ImgQrStyled = styled.img`
    width: 50%;
    height: 70%;
    margin-top: 0;
`

export const LinkStyled = styled.a`
    @media (min-width: 650px){
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 1.5vw;
        color: #0C5C64;
        margin: 0;
        margin-left: 3%;
        text-decoration: underline;
    }

    @media (max-width: 650px){
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 6vw;
        color: #0C5C64;
        margin: 0;
        margin-left: 3%;
        margin-top: 1%;
        text-decoration: underline;
    }
`