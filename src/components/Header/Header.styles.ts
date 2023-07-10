import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderSyled = styled.header`
    @media (min-width: 650px){
        background: #B2E8D0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
    }
    
    @media (max-width: 650px) {
        background: #B2E8D0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        top: 0;
        left: 0;
        right: 0;
    }
`

export const LogoStyled = styled.img`
    @media (min-width: 650px){
        width: 7vw;
        height: 6.2vw;
        margin: 1.3%;
        margin-left: 4%;
    }

    @media (max-width: 650px){
        width: 17vw;
        height: 15vw;
        margin: 1.3%;
    }
`

export const UlLink = styled.div`
    @media (min-width: 650px){
        display: flex;
        flex-direction: row;
        gap: 4vw;
        margin-right: 4%;
        align-items: center;
        flex-wrap: wrap;
        list-style-type: none;
    }
    
    @media (max-width: 650px){
        display: flex;
        flex-direction: row;
        gap: 7vw;
        align-items: center;
        flex-wrap: wrap;
        list-style-type: none;
    }
`

export const NavLinkStyled = styled(NavLink)`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.3vw;
    color: #063E44;
    text-decoration: none;
`