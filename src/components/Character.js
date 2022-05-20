// Write your Character component here

const Character = props => {
    return (
        <div className="character">
            <h2>{props.name}</h2>
            <p>{props.birth_year}</p>
        </div>
    )
}
export default Character;