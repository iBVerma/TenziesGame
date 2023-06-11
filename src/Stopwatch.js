import React from "react";


export default function Stopwatch(props){
    const [time,settime] = React.useState(0);
    const [timeron,settimeron] = React.useState(props.isOn);

    React.useEffect( () => {
        let interval = null;
        
        if(timeron){
            interval = setInterval(() => {
                settime(prev => prev+10)
            },10)

        }else{
            clearInterval(interval)

        }

        return () => clearInterval(interval)

    },[timeron])

    function handleclick(){
        settimeron(prev => !prev);
    }

    return(
        <div className="watch">
            {props.isOn ? () => settimeron(prev => !prev):() => settimeron(prev => !prev)}
            <span> 
                {("0"+Math.floor((time/60000)%60)).slice(-2)}
                :
                {("0"+Math.floor((time/1000)%60)).slice(-2)}
                :
                {("0"+((time/10)%100)).slice(-2)}
            </span>
            {/* {props.isOn ? } */}
            <button onClick={handleclick}>Start</button>
            <button onClick={handleclick}>Stop</button>
        </div>
    )
}