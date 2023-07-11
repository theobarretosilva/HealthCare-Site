import styled from "styled-components";

export const DivGeralStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 4vh 5vw 4vh 5vw;
`

export const DivTesteIndividualStyled = styled.div`
    @media (min-width: 650px){
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 15vw;
    }

    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 20vw;
    }
    
`

export const ImgTesteStyled = styled.img`
    width: 15vw;
`