// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

import Details from './Details'

const StyledChar = styled.div`
    border-radius: 10px;
    background-color: black;
    opacity: 0.7;
    color: white;
    margin: 1vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &:hover {
        opacity: 1;
    }
    }
`;

const Character = props => {
    const [ active, setActive ] = useState(false);
    const toggleDetails = () => {
        setActive(!active)
    };

    const {char} = props;
    return (
        <StyledChar className="character">
            <h3>{char.name}</h3>
            <button onClick={toggleDetails}>{!active?'details':'close'}</button>
            {active && <Details char={char} close={toggleDetails}/>}
        </StyledChar>
    )
}
export default Character;