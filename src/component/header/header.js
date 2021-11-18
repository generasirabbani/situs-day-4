import React from "react";
import styled from "styled-components";

import logo from "./logo.png";

const Main = styled.div`
    background-color: #cdd3df;
    display: flex;
    flex-direction: column;
    font-family: 'Vollkorn';
    align-items: center;
    font-weight: 900;
    color: #1d439b;
    padding: 10px;
    gap: 10px;
`;

const Title = styled.h1`
`;

const Logo = styled.img`
    max-width: 40px;
`;

function Header (){
    return (
        <Main>
            <Title><Logo src={logo}/> Top 20 Anime Movies <Logo src={logo}/></Title>
            <p>Sourced from <a href="https://myanimelist.net/topanime.php?type=movie" target="_blank">MyAnimeList</a></p>
        </Main>
    )
};

export default Header;