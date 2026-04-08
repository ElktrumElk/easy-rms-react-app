import { useEffect, useRef, useState } from "react";
import batchData from "./batch_file_data";

/**
 * 
 * @param {Object} param0
 * @param {CallableFunction} param0.data - Holds the batch data
 * @param {CallableFunction} param0.setBatchArray -- Setter for the batch list state
 * @param {Boolean} param0.isExternalClicked -- external button clicked
 * @param {Number} param0.externalIndex -- external index
 * @returns 
 */
export default function Batches({ data, setBatchArray, isExternalclicked = false, externalIndex = null }) {
    const [items] = useState([
        "Advance Excel",
        "Linux",
        "C++",
        "MS Office",
        "N++"
    ]);

    const batchFiles = batchData();
    const batchClick = useRef([]);

    const CurrentBatch = (idx) => {
        if (typeof data === 'function') {
            data(batchFiles[idx]);
        }
    };

    useEffect(() => {
        if (typeof setBatchArray === 'function') {
            setBatchArray(items);
        }
    }, [items, setBatchArray]);

    /**Listen for changes for the external index */
    useEffect(() => {
        if (externalIndex !== null) {
    
            if (typeof data === 'function') {
                data(batchFiles[externalIndex !== null || !isNaN(externalIndex) ? externalIndex : 0]);
            }
        }
    }, [externalIndex])

    return (
        <>
            <li id="batch_lists" className="ls-3">
                <div className="batch_list_lrg-3">
                    <ul>
                        {
                            items.map((values, idx) => (
                                <li id={idx} ref={batchClick} key={idx} onClick={() => CurrentBatch(idx)}>{values}</li>
                            ))
                        }
                    </ul>
                </div>
            </li>
        </>
    )
}