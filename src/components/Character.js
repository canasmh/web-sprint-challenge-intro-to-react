import React, { useState } from "react";
import styled from "styled-components";

const Character = (props) => {
    const {data} = props

    const CharacterDiv = styled.div`
        width: 60%;
        display: flex;
        justify-content: space-between;
        height: auto;
        align-items: center;
        margin: 15px auto;
        background-color: #DEDEDE;
        padding: 3px 15px;
        border-radius: 15px;
        border: 2px solid #000000;
        flex-wrap: wrap;
    `

    const InfoDiv = styled.div`
      width: 60%;
      flex-basis: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      margin: 0 auto;
      text-align: left;
      overflow-y: hidden;
      padding: 2px 10%;
      
      ${props => (!props.showData ? `height: 0;` : `height: auto;`)}
      

    `;

    const CharacterP = styled.p`
      flex-basis: 50%;
    `

    const ButtonInfo = styled.button`
        padding: 8px 15px;
        border: 1px solid #090909;
        border-radius: 15px;
        color: #555555;
    `

    const [showData, setShowData] = useState(false);

    return (
        <CharacterDiv showData={showData}>
            <h2>{data.name}</h2>
            <ButtonInfo onClick={() => setShowData(!showData)}>{showData ? "Hide Data" : "Show Data"}</ButtonInfo>
            <InfoDiv showData={showData}>
                <CharacterP><strong>Birth Year: </strong> {data.birth_year}</CharacterP>
                <CharacterP><strong>Height: </strong> {data.height}</CharacterP>
                <CharacterP><strong>Gender: </strong> {data.gender}</CharacterP>
                <CharacterP><strong>Mass: </strong> {data.mass}</CharacterP>
                <CharacterP><strong>Eye Color: </strong> {data.eye_color}</CharacterP>
                <CharacterP><strong>Movies: </strong>[{data.films.join(", ")}]</CharacterP>
            </InfoDiv>
            
        </CharacterDiv>
    )
}

export default Character;