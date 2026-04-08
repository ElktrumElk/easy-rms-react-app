import { useRef, useState } from "react";
import batchData from "./batch_file_data";

export default function Batches({ cb }) {


    const [items] = useState(
        ["Advance Excel", "Linux", "C++", "MS Office", "N++"]
    )

    const batchFiles = batchData();
    const batchClick = useRef([]);


    const CurrentBatch = (idx) => {
        //console.log(batchFiles[idx]);
        if (typeof cb === 'function') {
            cb(batchFiles[idx]);
        
        }
    }

    return (
        <>
            <li id="batch_lists" className="ls-3">
                <div className="batch_list_lrg-3">
                    <ul>
                        {
                            items.map((values, idx) => (

                                <li id={idx} ref={batchClick} key={idx} onClick={() => { CurrentBatch(idx) }}>{values}</li>

                            ))
                        }
                    </ul>
                </div>
            </li>
        </>
    )
}