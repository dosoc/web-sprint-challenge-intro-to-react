// Write your Character component here
import styled from 'styled-components'

const StyledChar = styled.div`
    border-radius: 10px;
    background-color: black;
    opacity: 0.5;
    color: white;
    margin: 1vh;
    display: flex;
    justify-content: space-evenly;

    &:hover{
        opacity: 1;
    }
`;

const Character = props => {
    return (
        <StyledChar className="character">
            <h3>Name: {props.name}</h3>
            <h3>Birth Year: {props.birth_year}</h3>
        </StyledChar>
    )
}
export default Character;