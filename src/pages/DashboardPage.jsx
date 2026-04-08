import { DashSideBar, DashboardHeader, DashboardMainPanel } from "./components/dashboard_components/dashboardComponents"
import { useEffect, useState } from "react";




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
    
    /**
     * @var {Number} externalBtach --This variable hook carries the bottom panel triggering of batch to be render on the main panel 
     * 
     * */
    const [externalBatch, setExternalBatch] = useState(null);

    const [dashName, setDashName] = useState("Dashboard");
    useEffect(() => {
      setDashName(batchArray[externalBatch]);  
    }, [externalBatch])
    return (
        <>
            <div id="dashboard" className={isExpand ? "p_cnt-3 side_expand" : "p_cnt-3"}>
                {/**Side bar 
                 * You can find the dashSideBar from the file DashBoardComponents
                 * */ 
                 }
                <DashSideBar isExpand={isExpand} handleExpand={handleExpand} batchCb={setData} setBatchArray={setArray} externalIndex={externalBatch}/>

                {/**Header */}
                <DashboardHeader bottomPanelShow={setBottomPanel} bottomPanelValue={isBottomPanelShow} headerName={dashName}/>

                {/**main panel */}
                <DashboardMainPanel render_frame={mainPanelData} batchList={batchArray} isBottomDisplay={isBottomPanelShow} isBottomBatch={setExternalBatch}/>
            </div>
        </>
    )
}