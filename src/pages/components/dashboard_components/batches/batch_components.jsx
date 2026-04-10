import { useRef, useState, useEffect } from "react";
import AddButton from "../super_users/addfile_button";
import DeleteFileButton from "../super_users/delete_file_btn";
import SelectFile from "../super_users/select_file_button";

/**
 * 
 * @param {Object} param0 
 * @param {Boolean} param0.selectFile - A boolean if the file select icon should be display for user select or not
 * @param {CallableFunction} param0.setSelectFile - The function of the selectfile
 * @returns 
 */
export default function BatchComponent({ data, selectFile, setSelectFile }) {

    const fileSelectedRef = useRef([])

    const HandleFileSelect = (parentIdx, childIdx) => {
        const clickedImg = fileSelectedRef.current[parentIdx]?.[childIdx];

        if (clickedImg) {
            console.log(`Clicked file: Batch ${parentIdx}, File ${childIdx}`);

            const currentSrc = clickedImg.src;
            if (currentSrc.includes('file_uncheck_ic.png')) {
                clickedImg.src = '/icons/file_check_ic.png';     // change to checked
            } else {
                clickedImg.src = '/icons/file_uncheck_ic.png';   // change to unchecked
            }
        }
    };

    useEffect(() => {
        fileSelectedRef.current = data.batchFiles.map(batch =>{
            Array(batch.files.length).fill(null);
            console.log(fileSelectedRef);
        });
    }, [data.batchFiles]);

    return (

        <>
            <div id="dash_cmp" className="cnt_a-4">

                <div id="time_root_cnt" className="stat_1-4">
                    <div className="date-4">
                        <img className="date_ic-4" src="https://img.icons8.com/?size=100&id=23&format=png&color=000000"
                            alt="date" />
                        <span><strong id="currentSecTime">Tue 15 Apr, 2026</strong></span>
                    </div>
                    <div className="toolsCnt-7">
                        <AddButton />
                        <SelectFile setSelectFile={setSelectFile} selectFile={selectFile} />
                        <DeleteFileButton />
                    </div>
                </div>

                <div id="file_cnt" className="file_cnt-4">
                    {data.batchFiles.map((dat, parentIdx) => (
                        <div key={parentIdx} id="file_1" className="group_time-4">
                            <span id="sec_date" className="sec_date-4">
                                {dat.date + dat.year}
                            </span>

                            {dat.files.map((file, childIdx) => (
                                <div key={childIdx} id="files_1" className="file_sub_cnt-4">
                                    <div className="file_name-4">

                                        {selectFile && (
                                            <img
                                                ref={(el) => {
                                                    // Safe assignment for 2D array
                                                    if (!fileSelectedRef.current[parentIdx]) {
                                                        fileSelectedRef.current[parentIdx] = [];
                                                    }
                                                    fileSelectedRef.current[parentIdx][childIdx] = el;
                                                }}
                                                src="/icons/file_uncheck_ic.png"
                                                width={30}
                                                height={30}
                                                alt="select"
                                                onClick={() => HandleFileSelect(parentIdx, childIdx)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}

                                        <img
                                            className="file_type_ic-4"
                                            src="https://img.icons8.com/?size=100&id=117561&format=png&color=000000"
                                            alt="ms_excel"
                                        />

                                        <span id="file_name">{file.name}</span>
                                    </div>

                                    <div className="time-4">
                                        <span className="file_time-4">{file.time}</span>
                                        <button className="download_btn-4">
                                            <img className="download_ic" src="https://img.icons8.com/?size=100&id=83159&format=png&color=FFFFFF" alt="download" />
                                            <span>Download</span>
                                        </button>
                                        <img className="files_download_btn-4" src="https://img.icons8.com/?size=100&id=14100&format=png&color=7a7a7a" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}