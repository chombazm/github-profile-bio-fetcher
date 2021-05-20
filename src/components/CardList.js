import Card from './Card';

function CardList(props) {
    // console.log(props)
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    )
}

export default CardList

