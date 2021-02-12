const BountyCard = (props) => {
    console.log(props)

    let status = props.captures ?
        <span className="green">CAPTURED</span> :
        <span className="red">STILL AT LARGE</span>

    let lastSeen = props.lastSeen ? 
        <p>Last seen: {props.lastSeen}</p> :
        null

    let ship = props.ship ?
        <p>Currently using {props.ship} as transportation</p> :
        null
    
    let hunters = props.hunters.length > 0 ? 
        props.hunters.join(', ') :
        'There are no bounty hunters on this case'

    return (
        <article className="bounty-card">
            <h3>{props.name} is {status}</h3>
            <h4>Reward for Capture: 💰{props.reward}💰</h4>
            <h5>Wanted for {props.wantedFor}</h5>
            <p>Bounty posted by: {props.client}</p>
            <p>Hunters: {hunters}</p>
            {lastSeen}
            {ship}
            <button>Register Bounty as {!props.captured ? "CLOSED" : "OPEN"}</button>
        </article>
    )
}

export default BountyCard  