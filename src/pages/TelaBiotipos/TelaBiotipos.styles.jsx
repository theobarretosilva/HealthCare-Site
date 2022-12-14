import styled from "styled-components"

export const RodapeStyled2 = styled.footer`
    @media (min-width: 650px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30%;
        padding-top: 1%;
        padding-bottom: 2%;
        background-color: #5F9499;
    }

    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30%;
        padding-top: 1%;
        padding-bottom: 5%;
        background-color: #5F9499;
    }
`

export const DivContatosStyled2 = styled.div`
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

export const PContatosStyled2 = styled.p`
    @media (min-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: black;
        margin-bottom: 2%;
    }

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 7vw;
        color: black;
        margin-bottom: 2%;
    }
`

export const DivContatos2Styled2 = styled.div`
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

export const ImgEmailStyled2 = styled.img`
    @media (min-width: 650px){
        width: 2.5vw;
        height: 2vw;
    }
    
    @media (max-width: 650px){
        width: 9vw;
        height: 8vw;
    }
`

export const PEmailStyled2 = styled.p`
    @media (min-width: 650px){
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 1.5vw;
        color: white;
        margin: 0;
        margin-left: 3%;
    }

    @media (max-width: 650px){
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 5vw;
        color: white;
        margin: 0;
        margin-left: 3%;
    }
`

export const ImgPhoneStyled2 = styled.img`
    @media (min-width: 650px){
        width: 9%;
        height: 5%;
    }

    @media (max-width: 650px){
        width: 8.5vw;
        height: 7vw;
    }
`

export const DivBaixeAppStyled2 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 0;
`

export const ImgQrStyled2 = styled.img`
    width: 50%;
    height: 70%;
    margin-top: 0;
`

export const LinkStyled2 = styled.a`
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