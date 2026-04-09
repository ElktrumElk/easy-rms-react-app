import { useState, useRef } from "react";
import batchData from "./dashboard_components/batches/batch_file_data";


/**
 * Comment: The bottom pannel you can find the bottom panel import in the dashBoardComponent file at
 * the DashboardMainPanel function
 */
/**
 * 
 * @param {Object} param0
 * @param {Array} param0.batches - List of the batches 
 * @param {Boolean} param0.isDisplay - boolean. 
 * @param {Function} param0.click - boolean. 
 * @returns 
 */
export default function BottomPanel({ batches = [], isDisplay = false, click }) {

    const [showList, setShowList] = useState(false);

    const handleShowList = () => {
        setShowList(!showList);
    };

    const batchClick = useRef([]);

    /**Comment: check for the active batch that is clicked */
    const currBatch = (id) => {
        if(typeof click === 'function') {
            click(id);
        }
    };
    return (
        <div
            className={isDisplay ? "bottom_panel-5 bottom_panel-6 expand" : "bottom_panel-5 bottom_panel-6"}>

            <div className="std_info_cnt-3 border_bottom-3 student_info-6">

                <div className="std_info-3">
                    <span>Student Name</span>
                    <span>Elkanah Cole</span>
                </div>
                <div className="std_info-3">
                    <span>Student ID</span>
                    <span>Code20560028</span>
                </div>

            </div>

            <div className="batch_div-6">
                <div className="batch_title-6" onClick={handleShowList}>

                    <div className="batch_name_cnt-6">
                        <img className="bottom_panel_ic-6" src="https://img.icons8.com/?size=100&id=727&format=png&color=8a2be2" alt="batch_ic" />
                        <strong>Batch</strong>
                    </div>
                    <strong>{batches.length}</strong>
                </div>

                <ul className={showList ? "batch_lists_cnt-6 expand" : "batch_lists_cnt-6"}>
                    {
                        batches.map((batchName, idx) => (
                            <li ref={batchClick} className="batch_lists" key={idx} onClick={() => {currBatch(idx)}}>{batchName}</li>
                        ))
                    }
                </ul>
                <div>
                </div>

            </div>

            <div className="bottom_cnts-6">
                <div className="batch_name_cnt-6">
                    <img className="bottom_panel_ic-6"
                        src="https://img.icons8.com/?size=100&id=25943&format=png&color=7f7f0d"
                        alt="batch" />
                    <strong>Color Mode</strong>
                </div>

                {/**Toggle */}
                <div className="toggle_cnt-6">
                    <div className="main_btn-6">
                        <div className="main_btn_ctr-6"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}