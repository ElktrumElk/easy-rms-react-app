import { useRef, useState, useEffect, useContext } from "react";
import AddButton from "../super_users/addfile_button";
import DeleteFileButton from "../super_users/delete_file_btn";
import SelectFile from "../super_users/select_file_button";
import { AuthContext } from "../../../../context/auth_context_export";

/**
 * 
 * @param {Object} param0 
 * @param {Boolean} param0.selectFile - A boolean if the file select icon should be display for user select or not
 * @param {CallableFunction} param0.setSelectFile - The function of the selectfile
 * @param {Boolean} param0.showAddPanel - True / false. triggers the show panel
 * @param {CallableFunction} param0.setAddPanel - the function to change the showAddPanel value
 * @returns 
 */
export default function BatchComponent({
    data,
    selectFile,
    setSelectFile,
    showAddPanel,
    setAddPanel
}) {

    const fileSelectedRef = useRef([])
    const [deletBtn, showDeleteBtn] = useState(false)


    document.getElementById('main_section').style.overflowY = 'hidden'


    let i = 0;
    const HandleFileSelect = (parentIdx, childIdx) => {
        const clickedImg = fileSelectedRef.current[parentIdx]?.[childIdx];

        if (clickedImg) {
            console.log(`Clicked file: Modules ${parentIdx}, File ${childIdx}`);

            const currentSrc = clickedImg.src;
            if (currentSrc.includes('file_uncheck_ic.png')) {
                clickedImg.src = '/icons/file_check_ic.png';     // change to checked
                i += 1;
                //console.log("t 1", i) //debugging
                showDeleteBtn(true)

            } else {
                clickedImg.src = '/icons/file_uncheck_ic.png';   // change to unchecked
                if (i > 0) {
                    i -= 1;
                    //console.log("t 2", i); //debugging
                    showDeleteBtn(true)
                } else {

                    showDeleteBtn(false)
                    //console.log("f 1", i); //debugging
                }

            }
        }
    };

    useEffect(() => {
        fileSelectedRef.current = data.batchFiles.map(batch =>
            Array(batch.files.length).fill(null)
        );

    }, [data.batchFiles]);

    /**Listen if the select button is really active */
    useEffect(() => {
        if (!selectFile) {
            showDeleteBtn(false);
            i = 0;
        }
    }, [selectFile]);

    const [extensionIcons] = useState({
        pdf: '/icons/file_format_extentions/pdf.png',
        doc: '/icons/file_format_extentions/document.png',
        docx: '/icons/file_format_extentions/word.png',
        txt: 'https://cdn-icons-png.flaticon.com/512/337/337945.png',
        xlsx: '/icons/file_format_extentions/ms_excel.png',
        xls: 'https://cdn-icons-png.flaticon.com/512/337/337947.png',
        csv: '/icons/file_format_extentions/csv.png',
        rtf: 'https://cdn-icons-png.flaticon.com/512/337/337945.png',
        odt: 'https://cdn-icons-png.flaticon.com/512/337/337932.png',
        pptx: '/icons/file_format_extentions/powerPoint.png',

        // Default fallback (unknown extensions treated as txt)
        default: 'https://cdn-icons-png.flaticon.com/512/337/337945.png'
    });

    /**This holds the role of the User currenlty logged in*/
    const { userRole } = useContext(AuthContext);
    return (
        <>
            <div id="dash_cmp" className="cnt_a-4" >

                <div id="time_root_cnt" className="stat_1-4">
                    <div className="date-4">
                        <img className="date_ic-4" src="https://img.icons8.com/?size=100&id=23&format=png&color=000000"
                            alt="date" />
                        <span><strong id="currentSecTime">Tue 15 Apr, 2026</strong></span>
                    </div>

                    <div className="toolsCnt-7">

                        {/**Add only instructor previllege. Select and delete both instructor and admin previllege */}

                        {userRole === "Instructor" && <AddButton setAddPanel={setAddPanel} showAddPanel={showAddPanel} />}
                        {userRole === "Instructor" || userRole === "Admin" && <SelectFile setSelectFile={setSelectFile} selectFile={selectFile} />}
                        {deletBtn && <DeleteFileButton />}

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
                                            src={extensionIcons[file.name.split('.', 2)[1]] ? extensionIcons[file.name.split('.', 2)[1]] : extensionIcons['default']}
                                            alt="ms_excel"
                                        />

                                        <span id="file_name">{file.name}</span>
                                    </div>

                                    <div className="time-4">

                                        <button className="download_btn-4">
                                            <img className="download_ic" src="https://img.icons8.com/?size=100&id=83159&format=png&color=FFFFFF" alt="download" />
                                            <span>Download</span>
                                        </button>
                                        <img className="files_download_btn-4" src="https://img.icons8.com/?size=100&id=14100&format=png&color=7a7a7a" />
                                    </div>

                                    <div className="bottom_left-8">
                                        <span className="file_time-4">{file.time}</span>
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