import { DashSideBar, DashboardHeader, DashboardMainPanel } from "./components/dashboard_components/dashboardComponents"
import { useState } from "react";




/**
 * 
 * The home page of the user 
 * 
*/

export default function Dashboard() {
    const [isExpand, setExpand] = useState(false);

    const handleExpand = () => {
        if (!isExpand) {

            setExpand(true);

        } else {
            setExpand(false);
        }
    }
    const [mainPanelData, setData] = useState(null);
    const [batchArray, setArray] = useState([]);
    const [isBottomPanelShow, setBottomPanel] = useState(false);

    return (
        <>
            <div id="dashboard" className={isExpand ? "p_cnt-3 side_expand" : "p_cnt-3"}>
                {/**Side bar */}
                <DashSideBar isExpand={isExpand} handleExpand={handleExpand} batchCb={setData} setBatchArray={setArray} />

                {/**Header */}
                <DashboardHeader bottomPanelShow={setBottomPanel} bottomPanelValue={isBottomPanelShow}/>

                {/**main panel */}
                <DashboardMainPanel render_frame={mainPanelData} batchList={batchArray} isBottomDisplay={isBottomPanelShow}/>
            </div>
        </>
    )
}