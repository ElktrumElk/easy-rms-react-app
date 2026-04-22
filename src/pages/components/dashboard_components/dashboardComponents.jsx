import DashboardStats from "./dashboard_stats"
import Modules from "./batches/batch"
import BatchComponent from "./batches/batch_components";
import BottomPanel from "../bottomPanel";
import { useContext, useEffect, useState } from "react";
import AddFilePanel from "./super_users/panels/add_file_panel";
import UsersComponentList from "./users_list_comp";
import { DropDown } from "./little_componets/little";
import { UserLists } from "../../../components/sidebar_user_list";
import AdminLists from "../../../components/admin_lists";
import { RenderUsersListContext } from "../../../context/userListClick";
import InstructorLists from "../../../components/instructors_lists";
import { resetToDashboard } from "../../../hooks/reset_to_dahsboard";
import StudentLists from "../../../components/student_lists";
import { UserTheme } from "../../../context/userThemeContext";
import LogOutButton from "../../../components/log_out_btn";
import { AuthContext } from "../../../context/auth_context_export";

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


export function DashSideBar({
    handleExpand,
    isExpand,
    batchCb,
    setBatchArray,
    externalIndex,
    setClick,
    returnHome,
    funcName,
    setUserClick,
}) {

    const [isClick, setIsClick] = useState(0);

    const { userRole } = useContext(AuthContext);
    const { colorMode } = useContext(UserTheme)
    return (
        <>
            <div id="side_bar" className={isExpand ? "side_bar-3 expand" : "side_bar-3"}>
                <header className="side_bar_header-3">

                    <div className="logo_cnt-3">
                        <img
                            className="logo_img-3"
                            src={colorMode === 'dark' ? '/rms_logo_light.jpg' : "/rms_logo_dark.jpg"}
                            onClick={() => { handleExpand(!isExpand) }}
                        />
                        <h1 id="app_name" className="app_name-3" style={{
                            color: colorMode === 'dark' ? 'white' : '#1e319b'
                        }}>RMS</h1>
                        {

                            isExpand && <button className="expand_btn-3" onClick={() => { handleExpand(!isExpand) }}>
                                <img src={colorMode === 'dark' ? "https://img.icons8.com/?size=100&id=37224&format=png&color=FFFFFF":"https://img.icons8.com/?size=100&id=37224&format=png&color=000000"} alt="close" width={'30'} height={'30'}/>
                            </button>
                        }
                    </div>
                </header>

                <section className="opt-3">

                    <div className="gen-3">
                        <ul id="gen_list" className="gen_list-3">

                            <li
                                id="Home_btn"
                                className="g_list-3"
                                title="home"
                                onClick={() => {
                                    returnHome(null);
                                    setUserClick(null);
                                }}>

                                <img className="ic_1-3"
                                    src="https://img.icons8.com/?size=100&id=73&format=png&color=a9049b" />
                                <span>Home</span>
                            </li>

                            {
                                /**Comment: SIDE MODULE BUTTON */

                                userRole !== 'Admin' &&
                                <li
                                    id="batch_lrg_btn"
                                    className="g_list-3" title="Modules"
                                    onClick={() => {
                                        setIsClick(isClick !== 1 ? 1 : 0);
                                        handleExpand(true);
                                    }}>

                                    <img className="ic_1-3" src="https://img.icons8.com/?size=100&id=727&format=png&color=7a7a7a" alt="batch" />
                                    <span>Modules</span>
                                    {
                                        /**THis is just the drop down icon on the tabs */
                                        isExpand && <DropDown isClick={isClick} idx={1} />
                                    }
                                </li>
                            }

                            {
                                /**
                                 * Comment: This redundancy was done to call the list of modules for a mobile screen view
                                 * with out it the list of modules won't render for mobile viewers unless triggered buy the sidebar
                                 */
                                window.screen.width <= 600 ?
                                    <Modules
                                        data={batchCb}
                                        moduleName={funcName}
                                        setBatchArray={setBatchArray}
                                        externalIndex={externalIndex}
                                        isClicked={setClick}
                                    /> :
                                    /**The list of modules at the side bar */
                                    isClick === 1 &&
                                    <Modules
                                        data={batchCb}
                                        moduleName={funcName}
                                        setBatchArray={setBatchArray}
                                        externalIndex={externalIndex}
                                        isClicked={setClick}

                                    />

                            }
                            {
                                /** */
                                userRole === 'Admin' &&
                                <li
                                    id="batch_lrg_btn"
                                    className="g_list-3"
                                    title="Users"

                                    onClick={() => {
                                        setIsClick(isClick !== 2 ? 2 : 0);
                                        handleExpand(true);
                                    }}>

                                    <img className="ic_1-3" src="https://img.icons8.com/?size=100&id=102261&format=png&color=7a7a7a"
                                        alt="batch" />
                                    <span>Users</span>
                                    {
                                        /**
                                         * render the drop down icon if the side bar is been expanded
                                         * the isClick triggers that a lists has been
                                         * the idx is used to detect the right list that has been click
                                         */
                                        isExpand && <DropDown isClick={isClick} idx={2} />
                                    }
                                </li>
                            }
                            {
                                isClick === 2 &&
                                <UserLists setUserClick={setUserClick} />
                            }
                            {/**
                            <UsersComponentList />
                             * 
                             */}
                        </ul>

                    </div>
                </section>
                <LogOutButton sideBarExpand={isExpand} />

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
 * @param {String} param0.userListsComponent - holds the state to render the list component
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
    colorModeValue,
    userListsComponent
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

    const { colorMode } = useContext(UserTheme);
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
                                <img
                                    className="ic-3 ic3-3" src={colorMode === "dark" ? "https://img.icons8.com/?size=100&id=73&format=png&color=FFFFFF" : "https://img.icons8.com/?size=100&id=73&format=png&color=1E319B"}
                                    onClick={() => {
                                        resetToDashboard(isBackComponent, userListsComponent)
                                        /**isBackComponent(false);
                                        userListsComponent(null);*/
                                    }}
                                />
                        }
                        <h1 className="current-3">{isBack ? headerName : "Dashboard"}</h1>
                    </div>

                    <div className="sub_cnt-3 sa-3">

                        <div className="callender-3">
                            <img src={colorMode === 'dark' ? 'https://img.icons8.com/?size=100&id=SqCUs5XkuU76&format=png&color=FFFFFF' : "https://img.icons8.com/?size=100&id=SqCUs5XkuU76&format=png&color=000000"} width="20" height="20" />
                            <span>{callender}</span>
                        </div>
                        <input id="search" className="search_inp" placeholder="search..." />

                        <img id="searc_btn" className="ic-3 ic_2-3 ic_search-3"
                            src={colorMode === 'dark' ? '/icons/notification_light.png' : '/icons/notification_dark.png'} alt="notification" />

                        <img id="theme_tg_btn" className="ic-3 ic_2-3"
                            src={colorModeValue === "dark" ? "/icons/light_mode_ic.png" : "/icons/dark_mode_ic.png"} alt="dark" onClick={() => { colorModeValue === "dark" ? setColorMode('light') : setColorMode('dark') }} />

                        <img id="hambuger_menu" className="ic-3 ic_2-3 hamburder-3"
                            src={colorMode === "dark" ? "https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF" : "https://img.icons8.com/?size=100&id=120374&format=png&color=000000"} alt="hambugerMenu" onClick={() => { bottomPanelShow(!bottomPanelValue) }} />
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
 * @param {Boolean} param0.selectFile - Display the select file icon.
 * @param {CallableFunction} param0.setSelectFile - The callbackfunction for the select files in the module. state true / false
 * @param {Boolean} param0.showAddPanel - Holds the value of the Add panel to display or not
 * @param {Boolean} param0.setAddPanel - function to change the state of the add panel. display or not.
 * @param {CallableFunction} param0.mobileUserClick - function to render user lists for mobile users in the scrollview area
*/
export function ScrollViewArea({
    render_frame,
    batchList,
    isBottomDisplay,
    isBottomBatch,
    setColorMode,
    colorModeValue,
    selectFile,
    setSelectFile,
    showAddPanel,
    setAddPanel,
    mobileUserClick
}) {


    /**Holds the value of which user panel to render on the scrollView */
    const isUserPanel = useContext(RenderUsersListContext);
    const { colorMode } = useContext(UserTheme);

    useState(() => {
        if (colorMode === "dark") {

            document.body.style.backgroundColor = "#080808";
        } else {
            document.body.style.backgroundColor = "#f5f5f5";
        }

    }, [render_frame, colorMode])

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
                        isUserPanel === "admin" ?
                            <AdminLists />
                            :
                            isUserPanel === "instructors" ?
                                <InstructorLists />
                                :
                                isUserPanel === "student" ?
                                    <StudentLists />
                                    :
                                    <DashboardStats adminStudentView={mobileUserClick} />

                }

                <BottomPanel
                    modules={batchList}
                    isDisplay={isBottomDisplay}
                    click={isBottomBatch}
                    colorMode={setColorMode}
                    colorModeValue={colorModeValue}
                    mobileUserClick={mobileUserClick} />

                <AddFilePanel showAddPanel={showAddPanel} setAddPanel={setAddPanel} />
            </section>

        </>
    )
}

