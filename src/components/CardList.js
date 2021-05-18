import Card from './Card';

function CardList(props) {
    // console.log(props)
    return (
        <div>
            {props.profiles.map(profile => <Card {...profile} />)}
        </div>
    )
}

export default CardList

