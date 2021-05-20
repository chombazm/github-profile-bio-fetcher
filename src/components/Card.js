

function Card(props) {
    return (
        <fieldset>
            <legend>
                {props.name}
            </legend>
        <div className="profile">
            <div className="picture-thumb">
                <img alt={props.name} src={props.avatar_url} />
            </div>
            <div className="info">
            <div className="name">{props.name} says -</div>
            <p>
                <i>
                {props.bio}
                </i>
            </p>
            </div>
    	</div>
        </fieldset>
    )
}

export default Card
