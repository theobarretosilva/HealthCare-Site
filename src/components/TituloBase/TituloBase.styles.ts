import styled from 'styled-components'

export const TituloBase = styled.h1`
    @media (min-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        font-size: 2.3vw;
        color: #063E44;
        text-align: center;
        margin-top: 5vh;
        margin-bottom: 4vh;
    }

    @media (max-width: 650px){
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        font-size: 5.2vw;
        color: #063E44;
        text-align: center;
        margin-top: 6vh;
        margin-bottom: 4vh;
    }
`;