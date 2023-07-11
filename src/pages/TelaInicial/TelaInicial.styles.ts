import styled from "styled-components";

export const SectionEquipe = styled.div`
    @media (min-width: 650px){
        background: #5F9499;
        margin: 11vh 0 0 0;
        padding: 1vh 10vw 2vh 10vw;
    }

    @media (max-width: 650px){
        background: #5F9499;
        margin: 11vh 0 0 0;
        padding: 1vh 10vw 2vh 10vw;
        
    }
    
`

export const DivFotosEquipeStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
`

export const DivFotosIndStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
