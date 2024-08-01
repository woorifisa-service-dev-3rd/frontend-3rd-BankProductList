import { useState } from "react";
import Bankheaderfilter from "./Bankheaderfilter";


const Bankheader = ({ categoryfilter, setdata }) => {

    const [value, setvalue] = useState();

    const inscontent = (event) => {
        const data1 = event.target.value;
        console.log(data1);
        return setvalue(data1);
    }

    const rslcontent = () => {
        return setdata(value);
    }

    return (
        <>
            <div >
                <div className="flex flex-row justify-center">
                    <input type="text" className=" w-96 rounded border-2 border-blue-400" onChange={inscontent} />
                    <button className="w-20 h-14 p-4 ml-1 rounded bg-blue-500 text-white font-bold cursor-pointer" onClick={rslcontent}>입력</button>
                    <Bankheaderfilter categoryfilter={categoryfilter} />
                </div>
            </div>


        </>
    )
}

export default Bankheader;