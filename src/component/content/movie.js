import React, {useState} from "react";
import styled from "styled-components";

const Main = styled.div`
    color: #2d2d2d;
    width: 210px;
    text-align: center;
`;

const Poster = styled.img`
    display: ${(props) => {
        if(props.display){
            return "inline-block";
        } else{
            return "none";
        }
    }};
`;

const Title = styled.h2`
`;

const Summary = styled.p`
    text-align: justify;
    margin-bottom: 10px;
    width: 210px;
    background-color: lightgray;
    padding: 10px;
    display: ${(props) => {
        if(props.display){
            return "inline-block";
        } else{
            return "none";
        }
    }};
`;

const AddToWishlist = styled.button`
    padding: 5px;
    margin: 5px;
`;

const Source = styled.a`
    text-align: center;
`;

function MovieObject (props){
    const[showSummary, setShowSummary] = useState(false);

    function alternateShowSummary (){
        setShowSummary((prevShowSummary) => !prevShowSummary);
    }

    return (
        <Main>
            <Summary display={showSummary} onClick={alternateShowSummary} >Description: {props.summary}</Summary>
            <Poster display={!showSummary} onClick={alternateShowSummary} src={`${props.posterPath}`} />
            <Title>{props.title}</Title>
            <Source href={props.source} target="_blank">Link to MyAnimeList Page</Source>
            <AddToWishlist onClick={() => {props.addToWishlist(props.title)}} >Add to Wishlist</AddToWishlist>
        </Main>
    )
}

export default MovieObject;