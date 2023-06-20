import {useEffect, useState} from "react";
import axios from "axios";

const Pizza = () => {
    const [info,setInfo]=useState([])

    const sentRequest =async ()=>{
        try{
            const data =await axios.get('https://6491b1fe2f2c7ee6c2c8bc10.mockapi.io/Food')
            setInfo(data.data)
        }
        catch {
            console.log("error")
        }
    }

    useEffect( ()=>{
        sentRequest()

    },[])
    console.log(info)


    return (<div>
        {info.map((food)=>{
            return(
                <div key={food.id}className='child'>
                    <h2>{food.title}</h2>
                    <img src={food.imageUrl} alt=""/>
                    <p>{food.price}</p>
                </div>
            )
        })}

    </div>)
}

export default Pizza