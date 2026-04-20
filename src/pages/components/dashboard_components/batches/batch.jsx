import { useContext, useEffect, useMemo, useRef, useState } from "react";
import moduleData from "./module_data";
import { AuthContext } from "../../../../context/auth_context_export";
import fetchData from "../../../../scripts/fetchData";

/**
 * 
 * @param {Object} param0
 * @param {CallableFunction} param0.data - Holds the batch data
 * @param {CallableFunction} param0.setBatchArray -- Setter for the batch list state
 * @param {Boolean} param0.isExternalClicked -- external button clicked
 * @param {Number} param0.externalIndex -- external index of the batch clicked from the bottom panel
 * @param {boolean} param0.isClicked -- true / false check if the batch was click
 * @param {CallableFunction} param0.moduleName -- return the name of the batch clicked
 * @returns 
 */

export default function Modules({ data, setBatchArray, isClicked, moduleName, isExternalclicked = false, externalIndex = null }) {

    const { userRole } = useContext(AuthContext);
    const [datas] = useState(fetchData({ navigate: false, type: false }));

    /**Array of Modules */
    const listModules = useMemo(() => {
        if (userRole === 'Admin' || !datas?.data?.modules) return [];

        return datas.data.modules.map(m => m.moduleName);
    }, [datas, userRole]);



    const moduleFiles = moduleData();
    const moduleClick = useRef([]);
    const [currentClicked, setCurrentClicked] = useState(null);


    /**The cureent batch that is beign clicked */
    const CurrentBatch = (idx) => {
        if (typeof data === 'function' || typeof isClicked === 'function') {
            data(moduleFiles[idx]);
            if (typeof moduleName === 'function') {
                moduleName(listModules[idx]);
            }
            setCurrentClicked(idx);
            isClicked(idx);
        }
    };


    /**================================== */
    useEffect(() => {
        if (typeof setBatchArray === 'function' ||
            typeof isClicked === 'function'
        ) {
            setBatchArray(listModules);
        }
    }, [listModules, setBatchArray]);

    /**load the lists of listModules */
    let isInit_load = 0;


    /**Listen for changes for the external index */
    useEffect(() => {

        if (externalIndex !== null) {
            if (typeof data === 'function') {
                data(moduleFiles[externalIndex !== null || !isNaN(externalIndex) ? externalIndex : 0]);
            }
        }
    }, [externalIndex])

    return (
        <>
            <li id="batch_lists" className="ls-3">
                <div className="batch_list_lrg-3">
                    <ul>
                        {
                            listModules.map((values, idx) => (
                                <li id={idx} ref={moduleClick} className={currentClicked === idx ? 'active' : ''} key={idx} onClick={() => CurrentBatch(idx)}>{values}</li>
                            ))
                        }
                    </ul>
                </div>
            </li>
        </>
    )
}