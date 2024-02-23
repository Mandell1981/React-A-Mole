import React, {useEffect} from 'react'
import moleHillImg from '../Components/molehill.png'


function EmptySlot (props) {

    useEffect(() => {
        const randomSeconds = Math.floor(Math.random() * 10) + 1;
        let timer;

    timer = setTimeout(() => {
        props.toggle(true)
    }, randomSeconds * 1000)
    
    return () => {
clearTimeout(timer)
    }  
 },)
 return (
    <div>
        <img style={{'width': '30vw'}} src={moleHillImg} />
    </div>
 )
}

export default EmptySlot