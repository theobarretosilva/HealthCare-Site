import styled from "styled-components";

export const SectionEquipe = styled.div`
    background: #5F9499;
    margin-top: 11vh;
    padding-top: 1vh;
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
    justify-content: space-between;
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
