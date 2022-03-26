import { useEffect } from "react"
import moleHill from './moleHill.png'

function EmptySlot(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.displayTheMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}}
             src={moleHill}
             onClick={props.handleBadClick}
             alt="mole hill"
              />
            
        </div>
    )
}

export default EmptySlot