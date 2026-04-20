import { DashSideBar, DashboardHeader, ScrollViewArea } from "./components/dashboard_components/dashboardComponents.jsx";
import { useEffect, useState } from "react";
import { UserTheme } from "../context/userThemeContext.jsx";
import { RenderUsersListContext } from "../context/userListClick.jsx";
/**
 * 
 * The home page of the user 
 * 
*/
export default function Dashboard() {

    /**Variable that holds the state of the sidebar (expand / collapse) */
    const [isExpand, setExpand] = useState(false);
    /**Holds the frame that is rendered on the main_panel */
    const [mainPanelData, setData] = useState(null);
    /**The List of Modules available */
    const [batchArray, setArray] = useState([]);
    /**Check for bottom panel */
    const [isBottomPanelShow, setBottomPanel] = useState(false);
    /**if the back btn is shown */
    const [isBackBtn, setBackBtn] = useState(false);
    /**This variable hook carries the bottom panel triggering of batch to be render on the main panel * */
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

    /**Get colormode */
    const [colorMode, setColorMode] = useState(localStorage.getItem("userPreferColorTheme") || 'light');

    useEffect(() => {
        if (mainPanelData === null) {
            setDashName("Dashboard");
            setDashNameSideBar("Dashboard")
            setExternalBatch(null);
            setBackBtn(false)
        }
    }, [mainPanelData])

    /**File selection */
    const [selectFile, setSelectFile] = useState(false);
    useEffect(() => {
        setSelectFile(false);

    }, [sideBatchClick, externalBatch])

    const [showAddPanel, setAddPanel] = useState(false);
    const [isUserPanel, setUserPanel] = useState(null);


    /**==========================JSX ELEMENT============================= */
    return (
        <>

            <UserTheme.Provider value={{ colorMode, showAddPanel, selectFile, dashName }} >
                <RenderUsersListContext.Provider value={isUserPanel}>
                    <div id="dashboard"
                      
                        className={
                            isExpand ? colorMode === "light" ? "p_cnt-3 side_expand" : "p_cnt-3 side_expand dash_board dark" : colorMode === "light" ? "p_cnt-3" : "p_cnt-3 dash_board dark"
                        }>

                        {/**Side barYou can find the dashSideBar from the file DashBoardComponents */}
                        <DashSideBar
                            isExpand={isExpand}
                            handleExpand={setExpand}
                            returnHome={setData}
                            batchCb={setData}
                            setBatchArray={setArray}
                            externalIndex={externalBatch}
                            setClick={isClick}
                            funcName={setDashNameSideBar}
                            setUserClick={setUserPanel}
                        />

                        <div id="main_frame_pan" className="main_frame_panel-3" >

                            {/**Header */}
                            <DashboardHeader bottomPanelShow={setBottomPanel}
                                bottomPanelValue={isBottomPanelShow}
                                headerName={dashName}
                                isBack={isBackBtn}
                                isBackFunc={setBackBtn}
                                isBackComponent={setData}
                                setColorMode={setColorMode}
                                colorModeValue={colorMode}
                                userListsComponent={setUserPanel}
                            />

                            {/**main panel */}
                            <ScrollViewArea
                                render_frame={mainPanelData}
                                batchList={batchArray}
                                isBottomDisplay={isBottomPanelShow}
                                isBottomBatch={setExternalBatch}
                                setColorMode={setColorMode}
                                colorModeValue={colorMode}
                                selectFile={selectFile}
                                setSelectFile={setSelectFile}
                                showAddPanel={showAddPanel}
                                setAddPanel={setAddPanel}
                                mobileUserClick={setUserPanel}
                            />
                        </div>
                    </div>
                </RenderUsersListContext.Provider>
            </UserTheme.Provider>
        </>
    )
}