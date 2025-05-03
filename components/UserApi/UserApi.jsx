import { use, useEffect, useState } from "react"

export const UserApi = () => {
    const [data,setData] = useState([])
    const [isLoad, setIsload] = useState(false);

    // useEffect(() => {
    //      const testApi = async () => {
    //         const otvet = await fetch('http://localhost:3000/test_one');
    //         const data = await otvet.json();
    //         console.log(data);
    //         setData(data)
    //         setIsload(!isLoad)
    //      }   
    //         testApi();
    // },[])
    return <>
        <div>{isLoad? data[0].text : 'netunihuya...'}</div>
    </>
}