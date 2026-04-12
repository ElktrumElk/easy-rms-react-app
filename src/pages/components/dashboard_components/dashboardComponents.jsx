import DashboardStats from "./dashboard_stats"
import Modules from "./batches/batch"
import BatchComponent from "./batches/batch_components";
import BottomPanel from "../bottomPanel";
import { useEffect, useRef, useState } from "react";
import AddFilePanel from "./super_users/panels/add_file_panel";
import UsersComponentList from "./users_list_comp";
import { DropDown } from "./little_componets/little";

/**\
 * 
 * 
 * 
 *======= The main application interface components======================
 * 
 * 
 * 
 * 
 * 
 */

/**
 * The sidebar panel
 * @param {Object} param0 
 * @param {CallableFunction} param0.batchCb - The batch Callback to update the data of the render_frame
 * @param {CallableFunction} param0.handleExpand  - Expand the side bar / Collapse the side bar
 * @param {CallableFunction} param0.setBatchArray - The setter for the batch list state
 * @param {Number} param0.externalIndex - The setter for the batch list state
 * @param {CallableFunction} param0.setClick - Trigger the back button when clicked 
 * @param {CallableFunction} param0.funcName - Trigger the back button when clicked 
 * @returns 
 */
export function DashSideBar({
    handleExpand,
    isExpand,
    batchCb,
    setBatchArray,
    externalIndex,
    setClick,
    returnHome,
    funcName,
}) {

    const [isClick, setIsClick] = useState(0);


    return (
        <>
            <div id="side_bar" className={isExpand ? "side_bar-3 expand" : "side_bar-3"}>
                <header className="side_bar_header-3">

                    <div className="logo_cnt-3">
                        <img className="logo_img-3" src="/easy_ic.png" alt="" />
                        <h1 id="app_name" className="app_name-3">Easy</h1>
                        <button onClick={() => {handleExpand(!isExpand)}}>Expand</button>
                    </div>
                </header>

                <section className="opt-3">

                    <div className="gen-3">
                        <ul id="gen_list" className="gen_list-3">

                            <li id="Home_btn" className="g_list-3" title="home" onClick={() => { returnHome(null) }}>
                                <img className="ic_1-3"
                                    src="https://img.icons8.com/?size=100&id=73&format=png&color=a9049b" />
                                <span>Home</span>
                            </li>


                            <li
                                id="batch_lrg_btn"
                                className="g_list-3" title="Modules"
                                onClick={() => {
                                    setIsClick(isClick !== 1 ? 1 : 0);
                                    handleExpand(true);
                                }}>
                                <img className="ic_1-3" src="https://img.icons8.com/?size=100&id=727&format=png&color=7a7a7a"
                                    alt="batch" />
                                <span>Modules</span>
                                {

                                    isExpand && <DropDown isClick={isClick} idx={1} />
                                }
                            </li>

                            {
                                /**Modules list at the side panel
                                 <Modules data={batchCb} moduleName={funcName} setBatchArray={setBatchArray} externalIndex={externalIndex} isClicked={setClick} />
                                 */
                            }

                            <li id="batch_lrg_btn"
                                className="g_list-3"
                                title="Modules"
                                onClick={() => {
                                    setIsClick(isClick !== 2 ? 2 : 0);
                                    handleExpand(true);
                                }}>
                                <img className="ic_1-3" src="https://img.icons8.com/?size=100&id=102261&format=png&color=7a7a7a"
                                    alt="batch" />
                                <span>Users</span>
                                {
                                    isExpand && <DropDown isClick={isClick} idx={2} />
                                }
                            </li>
                            {/**
                            <UsersComponentList />
                             * 
                             */}
                        </ul>

                    </div>
                </section>
            </div>
        </>
    )
}

/**
 * # Header
 * @param {Object} param0 
 * @param {CallableFunction} param0.bottomPanelShow - state function of the bottom panel
 * @param {Boolean} param0.bottomPanelValue - state value of the bottom panel
 * @param {Boolean} param0.isBack - The back button to return back to the previous page
 * @param {CallableFunction} param0.isBackComponent - This function to update the render frame to false to get the dashboard stats
 * @param {CallableFunction} param0.isBackFunc - function of the back
 * @param {CallableFunction} param0.setColorMode - Set the color mode to dark or white
 * @param {String} param0.colorMode.Value - Holds the value of the color mode
 * @returns 
 */
export function DashboardHeader({
    bottomPanelShow,
    bottomPanelValue,
    headerName = "Dashboard",
    isBack,
    isBackFunc = null,
    isBackComponent = null,
    setColorMode,
    colorModeValue
}) {
    const date = new Date();
    //days
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //months
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    const callender = `${day} ${date.getDate()} ${month} ${year}`;

    useEffect(() => {
        if (!isBack) {
            isBackComponent(false);
        }
    }, [isBack])

    return (
        <>
            <section className="head-3">
                <header className="head_header-3">
                    <div className="sub_cnt-3 s-3">

                        {
                            /**Check if the isBack button was dislpayed */
                            isBack ?
                                /**The back button when a the dashboard stats is change */
                                <img className="ic-3 ic3-3" src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000"
                                    onClick={() => { isBackFunc(false) }} />
                                :
                                /**The home icon at the top of the header */
                                <img className="ic-3 ic3-3" src="https://img.icons8.com/?size=100&id=73&format=png&color=a9049b" />
                        }
                        <h1 className="current-3">{isBack ? headerName : "Dashboard"}</h1>
                    </div>

                    <div className="sub_cnt-3 sa-3">

                        <div className="callender-3">
                            <img src="https://img.icons8.com/?size=100&id=SqCUs5XkuU76&format=png&color=000000" width="20" height="20" />
                            <span>{callender}</span>
                        </div>
                        <input id="search" className="search_inp" placeholder="search..." />

                        <img id="searc_btn" className="ic-3 ic_2-3 ic_search-3"
                            src="/icons/notification_dark.png" alt="notification" />

                        <img id="theme_tg_btn" className="ic-3 ic_2-3"
                            src={colorModeValue === "dark" ? "/icons/light_mode_ic.png" : "/icons/dark_mode_ic.png"} alt="dark" onClick={() => { colorModeValue === "dark" ? setColorMode('light') : setColorMode('dark') }} />

                        <img id="hambuger_menu" className="ic-3 ic_2-3 hamburder-3"
                            src="https://img.icons8.com/?size=100&id=120374&format=png&color=000000" alt="hambugerMenu" onClick={() => { bottomPanelShow(!bottomPanelValue) }} />
                    </div>
                </header>

            </section>
        </>
    )
}

/**Serves as the main panel for content changing 
 * @param {Object} param0
 * @param {Array} param0.batchList - The list of available Modules
 * @param {CallableFunction} param0.isBottomBatch - A callable function thats update the batch list rendering on the main frame
 * @param {CallableFunction} param0.setColorMode - set the useState of the colorMode to triger colorMode changes
 * @param {String} param0.colorModeValue - Value of the colorMode needs to be passed here
 * @param {Boolean} param0.selectFile - if The select icon should be display for file selection
 * @param {CallableFunction} param0.setSelectFile - The callbackfunction for the select file to change state true / false
 * @param {Boolean} param0.showAddPanel - Show Add panel
 * @param {Boolean} param0.setAddPanel - function to change the state of the add panel 
*/
export function DashboardMainPanel({ render_frame,
    batchList,
    isBottomDisplay,
    isBottomBatch,
    setColorMode,
    colorModeValue,
    selectFile,
    setSelectFile,
    showAddPanel,
    setAddPanel
}) {

    return (
        <>
            <section id='main_section' className="cont-3" >
                {
                    render_frame ?
                        <BatchComponent
                            data={render_frame}
                            selectFile={selectFile}
                            setSelectFile={setSelectFile}
                            showAddPanel={showAddPanel}
                            setAddPanel={setAddPanel}
                        />
                        :
                        <DashboardStats />
                }

                <BottomPanel modules={batchList} isDisplay={isBottomDisplay} click={isBottomBatch} colorMode={setColorMode} colorModeValue={colorModeValue} />
                <AddFilePanel showAddPanel={showAddPanel} setAddPanel={setAddPanel} />
            </section>
        </>
    )
}

