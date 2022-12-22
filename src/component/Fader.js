import {useEffect, useState} from "react";
import "./Fader.css";
const Fader = ({text}) => {
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out'
    });

    useEffect(() => {
        const timeOut = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({fade: 'fade-out'})
            }else {
                setFadeProp({fade: 'fade-in'})
            }
        }, 2000)
        return () => clearTimeout(timeOut)
    },[])

    return(
        <>
            <h1 className={`${fadeProp.fade} textt`}>{text}</h1>
        </>
    )
}

export default Fader;