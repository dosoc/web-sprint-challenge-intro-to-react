import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    transition: 0.9s;
`

const Details = props => {
    const {char} = props;
    return (
        <StyledDetails className='details'>
            <ul>
                <li>Birth Year: {char.birth_year}</li>
                <li>Eye Color: {char.eye_color}</li>
                <li>Hair Color: {char.hair_color}</li>
                <li>Gender: {char.gender}</li>
                <li>Height: {char.height}</li>
                <li>Mass: {char.mass}</li>
            </ul>
        </StyledDetails>
    )

}
export default Details