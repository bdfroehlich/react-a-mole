import {useEffect} from 'react'
import moleImg from './mole.png'

function Mole(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.displayTheMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
            <div>
                <img style={{'width': '10vw'}}
                src={moleImg}
                onClick={props.handleClick}
                alt="mole" />
            </div>
    )
}

export default Mole