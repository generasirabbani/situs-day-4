import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
`;

const Title = styled.p`
    text-align: center;
    padding: 10px;
`;

const DeleteButton = styled.button`
    background-color: white;
    padding: 5px;
    margin: 5px 0px;
`;

function Wishlisted (props){
    return(
        <Main>
            <Title> - {props.title}</Title>
            <DeleteButton onClick={() => {props.removeFromWishlist(props.title)}}>Delete</DeleteButton>
        </Main>
    )
}

export default Wishlisted;