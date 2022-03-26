import { useState } from 'react'
import Mole from './mole'
import EmptySlot from './emptySlot'

function MoleContainer(props) {

    // state variable to determine the status of the mole in the container - mole shown or mole hidden
    let [theMole, displayTheMole] = useState(false)

    //function to handle clicking on mole - hiding the mole - and adding 1 to score
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        displayTheMole(false)
    }

    const handleBadClick = (e) => {
        if (props.score > 0){
        props.setScore(props.score + -1)
        }
    }

    let displayMole = theMole ? <Mole displayTheMole={displayTheMole} handleClick={handleClick} /> : <EmptySlot displayTheMole={displayTheMole} handleBadClick={handleBadClick} />

    return (
            <div>
                {displayMole}
            </div>
    )
}

export default MoleContainer