import { useContext, useEffect, useMemo, useRef, useState } from "react";
import modulesFiles from "../../../../accounts/modules";
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

    const batchKey = datas?.data?.batchId || 'b01';
    const currentModules = useMemo(() => modulesFiles({ batchKey }), [batchKey]);
    const moduleClick = useRef([]);
    const [currentClicked, setCurrentClicked] = useState(null);

    /**Array of Modules */
    const listModules = useMemo(() => {
        if (userRole === 'Admin') return [];
        return currentModules.modules.map(m => m.name);
    }, [currentModules, userRole]);


    /**The cureent batch that is beign clicked */
    const CurrentBatch = (idx) => {
        const selected = currentModules.modules[idx];

        if (!selected) return;

        if (typeof data === 'function' || typeof isClicked === 'function') {
            data({
                moduleKey: selected.moduleKey,
                moduleName: selected.name,
                batchFiles: selected.filesByDate
            });

            if (typeof moduleName === 'function') {
                moduleName(listModules[idx]);
            }
            setCurrentClicked(idx);
            isClicked(idx);
        }
    };


    /**==================SET THE LISTS OF Batches================ */
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
            const selected = currentModules.modules[externalIndex];
            if (selected && typeof data === 'function') {
                data({
                    moduleKey: selected.moduleKey,
                    moduleName: selected.name,
                    batchFiles: selected.filesByDate
                });
            }
        }
    }, [externalIndex, currentModules, data]);

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