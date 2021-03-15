import React from 'react';
import Lockin from './Lockin'
import EditRoster from './EditRoster'

const TeamRoster = props => {
    const mapChampions = props.champions.map((champion, i) => (
        <div key ={i}>
        <Lockin
        
        champion={champion}
        nameFn={props.lockinFn}
         />
        
        <EditRoster
        champion={champion}
        deleteFn={props.deleteFn}
        nameFn={props.nameFn}
         />
         </div>
    ))

    return (
        <div>
            <h1>Current Team</h1>
            <div className='champion-roster'>                
                {mapChampions}
            </div>
        </div>
    )
}

export default TeamRoster