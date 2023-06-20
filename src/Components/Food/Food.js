import {useEffect, useState} from "react";

const Food = ({food,setFood}) => {
    // name = 'moon'

    useEffect(()=>{
        setFood()
    },[])
    console.log(food, 'food')
    return (<div>
    </div>)
}

export default Food