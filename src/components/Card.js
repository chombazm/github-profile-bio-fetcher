

function Card(props) {
    return (
        <div className="github-profile">
            <img alt="chomba" src={props.avatar_url} />
            <div className="info">
            <div className="name">{props.name}.</div>
            <div className="company">{props.company}</div>
            </div>
    	</div>
    )
}

export default Card
