import styled from "styled-components";

export const Section = styled.section`
    @media (min-width: 650px){
        width: 100%;
        height: 29vw;
        margin: 0;
        padding: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        background-size: 100%;
        background-image: url(https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/imagemInicial.png?raw=true);
        background-repeat: no-repeat;
    }

    @media (max-width: 650px){
        width: 100%;
        height: 32vw;
        margin: 0;
        padding: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        background-size: 100%;
        background-image: url(https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/imagemInicial.png?raw=true);
        background-repeat: no-repeat;
    }
`

export const NomeLogoStyled = styled.h1`
    @media (min-width: 650px){
        font-family: 'Montserrat', sans-serif;
        font-size: 7vw;
        color: #033439;
        font-weight: 500;
        margin: 0;
    }

    @media (max-width: 650px){
        font-family: 'Montserrat', sans-serif;
        font-size: 8vw;
        color: #033439;
        font-weight: 500;
        margin: 0;
    }
`

export const NomeLogo2Styled = styled.h1`
    @media (min-width: 650px){
        font-family: 'Montserrat', sans-serif;
        font-size: 7vw;
        color: #00A79D;
        font-weight: 600;
        margin: 0;
    }
    
    @media (max-width: 650px){
        font-family: 'Montserrat', sans-serif;
        font-size: 8vw;
        color: #00A79D;
        font-weight: 600;
        margin: 0;
    }
`