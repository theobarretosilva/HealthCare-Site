import styled from "styled-components";

export const ApresentacaoStyled = styled.h1`
    @media (min-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        font-size: 2.3vw;
        color: #063E44;
        text-align: center;
        margin-top: 5%;
        margin-bottom: 4%;
    }

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        font-size: 5vw;
        color: #063E44;
        text-align: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    
`
export const DivEquipeStyled = styled.div`
    background: #5F9499;
    margin-top: 7%;
    padding-top: 2%;
    margin-right: 0;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 1%;
`

export const EquipeStyled = styled.h1`
    @media (min-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        font-size: 2vw;
        color: white;
        text-align: center;
        margin-bottom: 4%;
    }

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        font-size: 6.5vw;
        color: white;
        text-align: center;
        margin-bottom: 6%;
    }
`

export const DivFotosEquipeStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const DivFotosIndStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgEquipeStyled = styled.img`
    @media (min-width: 650px){
        height: 18vw;
        width: 18vw;
        max-width: 100%;
    }

    @media (max-width: 650px){
        height: 40vw;
        width: 40vw;
        max-width: 100%;
    }
`

export const PNomeEquipeStyled = styled.p`
    font-family: 'Urbanist', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: white;
`

export const RodapeStyled = styled.footer`
    @media (min-width: 650px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30%;
        padding-top: 1%;
        padding-bottom: 2%;
    }

    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30%;
        padding-top: 1%;
        padding-bottom: 5%;
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
        font-size: 24px;
        color: #063E44;
        margin-bottom: 2%;
    }

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 7vw;
        color: #063E44;
        margin-bottom: 2%;
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