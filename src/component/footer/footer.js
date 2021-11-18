import React from "react";
import styled from "styled-components";

const Credit =styled.p`
    padding: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
`;

function Footer (){
    return(
        <Credit>Made by <a href="https://github.com/generasirabbani" target="_blank">Rafif Rabbani</a></Credit>
    )
};

export default Footer;