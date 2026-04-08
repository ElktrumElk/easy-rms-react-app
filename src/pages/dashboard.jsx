import { DashSideBar, DashboardHeader, DashboardMainPanel } from "./components/dashboard_components/dashboardComponents"
import { useState } from "react";
/**The home page of the user */

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

    
    return (
        <>
            <div id="dashboard" className={isExpand ? "p_cnt-3 side_expand" : "p_cnt-3"}>
                {/**Side bar */}
                <DashSideBar isExpand={isExpand} handleExpand={handleExpand} batchCb={setData}/>

                {/**Header */}
                <DashboardHeader />

                {/**main panel */}
                <DashboardMainPanel render_frame={mainPanelData}/>
            </div>
        </>
    )
}