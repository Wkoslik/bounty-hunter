import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BountyCard from '../partials/BountyCard'

const Bounties = (props) => {
    //Set bounties state will hold all bounties
    const [bounties, setBounties] = useState([])

    //useEffect and axios to call our homemade organic api
    useEffect(() => {
        //TODO: Query bounty hunter server
        console.log('Calling the server')
        setBounties([
            {
                name: 'Han Solo',
                wantedFor: 'Owing money',
                client: 'Jabba the Hut',
                reward: 1000000,
                ship: 'Millennium Falcon',
                hunters: ['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
                captured: false,
                lastSeen: 'yesterday'
            }
        ])
    }, [])

    // if bounties.length > 0map the bounties, bounty car for each, otherwise h3 "no bounties"
    let bountyList = bounties.length > 0 ? bounties.map(bounty => <BountyCard {...bounty} key={bounty.name} />) : <h3>There are no bounties</h3>

    return (
        <section>
            <h2>List of Bounties</h2>
            <div className="bounties-container">
                {bountyList}
            </div>
            <Link to='/bounties/new'>Add a New Bounty</Link>
        </section>
    )
}

export default Bounties