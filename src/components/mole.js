import {useEffect} from 'react'
import moleImg from '../mole.png'

function Mole(props){

    useEffect(() => {
        // console.log("show mole useEffect ran")
        let randSeconds = Math.ceil(Math.random() * 30000)
        let timer = setTimeout(() => {
            props.displayTheMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
            <div>
                <img style={{'width': '30vw'}}
                src={moleImg}
                onClick={props.handleClick}
                alt="Picture of a mole." />
            </div>
    )
}

export default Mole