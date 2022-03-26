import { useEffect } from "react"
import moleHill from '../moleHill.png'

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
             src={moleHill}
             onClick={props.handleBadClick}
             alt="Picture of empty mole hill."
              />
            
        </div>
    )
}

export default EmptySlot