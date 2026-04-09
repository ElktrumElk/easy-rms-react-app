import { BackBtn } from "./components/buttons";
import { DashSideBar, DashboardHeader, DashboardMainPanel } from "./components/dashboard_components/dashboardComponents"
import { useEffect, useState } from "react";




/**
 * 
 * The home page of the user 
 * 
*/

export default function Dashboard() {

    /**Variable that holds the state of the sidebar (expand / collapse) */
    const [isExpand, setExpand] = useState(false);
    /**Handle the expand and collapse of the sidebar */
    const handleExpand = () => {
        if (!isExpand) {
            setExpand(true);

        } else {
            setExpand(false);
        }
    }

    /**Holds the frame that is rendered on the main_panel */
    const [mainPanelData, setData] = useState(null);
    /**The List of batches available */
    const [batchArray, setArray] = useState([]);
    /**Check for bottom panel */
    const [isBottomPanelShow, setBottomPanel] = useState(false);
    /**if the back btn is shown */
    const [isBackBtn, setBackBtn] = useState(false);
    /**
     * @var {Number} externalBtach --This variable hook carries the bottom panel triggering of batch to be render on the main panel 
     * 
     * */
    const [externalBatch, setExternalBatch] = useState(null);
    /**Set the name of the dash board */
    const [dashName, setDashName] = useState("Dashboard");
    const [dashNameSideBar, setDashNameSideBar] = useState("Dashboard")
    /**Check for sidebar clicked */
    const [sideBatchClick, isClick] = useState(null);

    /**===================USEEFFECT=================================== */
    /**Listen for changes of the components in the main panel*/
    useEffect(() => {
        if (externalBatch !== null) {
            setDashName(batchArray[externalBatch]);
            setBackBtn(true);
        }
        else {
            setDashName(dashNameSideBar); // set the dashname for the clicked of the sidebar
            setBackBtn(true);
        }

    }, [externalBatch, sideBatchClick]);

    useEffect(() => {
        if (mainPanelData === null) {
            setDashName("Dashboard");
            setDashNameSideBar("Dashboard")
            setExternalBatch(null);
            setBackBtn(false)
        }
    })

    const [colorMode, setColorMode] = useState("light")

    return (
        <>
            <div id="dashboard" className={
                isExpand ? "p_cnt-3 side_expand" : colorMode === "light" ? "p_cnt-3" : "p_cnt-3 dash_board dark"
                }>

                {/**Side bar 
                 * You can find the dashSideBar from the file DashBoardComponents
                 * */
                }
                <DashSideBar
                    isExpand={isExpand}
                    handleExpand={handleExpand}
                    returnHome={setData}
                    batchCb={setData}
                    setBatchArray={setArray}
                    externalIndex={externalBatch}
                    setClick={isClick}
                    funcName={setDashNameSideBar}

                />

                {/**Header */}
                <DashboardHeader bottomPanelShow={setBottomPanel}
                    bottomPanelValue={isBottomPanelShow}
                    headerName={dashName}
                    isBack={isBackBtn}
                    isBackFunc={setBackBtn}
                    isBackComponent={setData} />

                {/**main panel */}
                <DashboardMainPanel render_frame={mainPanelData} batchList={batchArray} isBottomDisplay={isBottomPanelShow} isBottomBatch={setExternalBatch} setColorMode={setColorMode}/>
            </div>
        </>
    )
}