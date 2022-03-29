import { useEffect } from "react"
import molehill from '../molehill.png'

function EmptySlot(props){

    useEffect(() => {
        // console.log("empty slot useEffect ran")
        let randSeconds = Math.ceil(Math.random() * 30000)
        let timer = setTimeout(() => {
            props.displayTheMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
             src={molehill}
             onClick={props.handleBadClick}
             alt="empty mole hill"
              />
            
        </div>
    )
}

export default EmptySlot