import { useState, useRef, useEffect, useContext } from "react";
import moduleData from "./dashboard_components/batches/module_data";
import { UserLists } from "../../components/sidebar_user_list";
import { AuthContext } from "../../context/auth_context_export";
import LogOutButton from "../../components/log_out_btn";
import { ValidData } from "../../context/validData";
import fetchData from "../../scripts/fetchData";

/**
 * Comment: The bottom pannel you can find the bottom panel import in the dashBoardComponent file at
 * the DashboardMainPanel function
 */
/**
 * 
 * @param {Object} param0
 * @param {Array} param0.modules - List of the modules 
 * @param {Boolean} param0.isDisplay - boolean. 
 * @param {Function} param0.click - boolean. 
 * @param {Function} param0.colorMode - set The color mode to dark or white
 * @param {String} param0.colorModeValue = The value of the color mode to get the user saved prefer theme
 * @param {CallableFunction} param0.mobileUserClick = The function to render out the userList component on the scrollview
 * 
 *
 * @returns 
 */
export default function BottomPanel({
    modules = [],
    isDisplay = false,
    click,
    colorMode,
    colorModeValue,
    mobileUserClick
}) {


    //Comment: Handle the toggle of showing batch list
    const [showList, setShowList] = useState(false);
    const batchClick = useRef([]);
    //Comment: Handle color mode
    const [isDark, setDark] = useState(false);

    /**Handle the toggle of list */
    const handleShowList = () => {
        setShowList(!showList);
    };

    /**Comment: check for the active batch that is clicked */
    const currBatch = (id) => {
        if (typeof click === 'function') {
            click(id);
        }
    };

    /**Handle color mode toggle */
    const handleColorMode = () => {
        if (isDark) {
            colorMode("light")
            localStorage.setItem("userPreferColorTheme", "light");
        } else {
            colorMode("dark");
            localStorage.setItem("userPreferColorTheme", "dark");
        }
    }

    /**Listen for dark mode */
    useEffect(() => {
        if (colorModeValue === 'dark') {
            setDark(true);
            document.body.style.backgroundColor = "black";
        } else {
            setDark(false);
            document.body.style.backgroundColor = "#f5f5f5";
        }
    }, [colorModeValue]);

    /**State to show the userOption lists on a mobile version */
    const [mobileShowUser, setShowUsers] = useState(false);
    const { userRole, userID } = useContext(AuthContext);
    const { loginData } = useContext(ValidData);
    const [userName] = useState(fetchData({ navigate: false, type: false })?.[`${userRole === 'Admin' ? 'adminPersonalData' : 'studentPersonalData'}`]?.[`${userRole === 'Admin' ? 'name' : 'studentName'}`]);

    const [userId] = useState(
        fetchData({ navigate: false, type: false })
        ?.[`${userRole === 'Admin' ?
            'adminPersonalData' :
            'studentPersonalData'}`
        ]
        ?.[`${userRole === 'Admin' ?
            'adminId' :
            'studentId'}`
        ]
    );

    
    return (
        <div
            className={isDisplay ? "bottom_panel-5 bottom_panel-6 expand" : "bottom_panel-5 bottom_panel-6"}>

            <div className="std_info_cnt-3 border_bottom-3 student_info-6">

                <div className="std_info-3">
                    <span>{userRole} Name</span>
                    <span>{userName}</span>
                </div>

                <div className="std_info-3">
                    <span>{userRole} ID</span>
                    <span>{userID || userId}</span>
                </div>
            </div>
            {
                userRole !== "Admin" &&
                <div className="batch_div-6">
                    <div className="batch_title-6" onClick={handleShowList}>

                        <div className="batch_name_cnt-6">
                            <img className="bottom_panel_ic-6" src="https://img.icons8.com/?size=100&id=727&format=png&color=8a2be2" alt="batch_ic" />
                            <strong>Modules</strong>
                        </div>
                        <strong>{modules.length}</strong>
                    </div>

                    <ul className={showList ? "sidebar_user_list_ul-10 expand" : "sidebar_user_list_ul-10 batch_lists_cnt-6"}>
                        {
                            modules.map((batchName, idx) => (
                                <li ref={batchClick} className="sidebar_user_list_item-10" key={idx} onClick={() => { currBatch(idx) }}>{batchName}</li>
                            ))
                        }
                    </ul>
                    <div>
                    </div>

                </div>
            }
            {/**USer lists section
             * only available to the admin
             */
                userRole === "Admin" &&
                <div
                    className="bottom_cnts-6"
                    style={{
                        borderBottom: "1px solid gray",
                        paddingBottom: "1rem",
                        flexDirection: "column",
                        gap: "1rem",
                        alignItems: "flex-start"

                    }}
                    onClick={() => { setShowUsers(!mobileShowUser) }}
                >
                    <div
                        className="batch_name_cnt-6"

                    >
                        <img className="bottom_panel_ic-6"
                            src="https://img.icons8.com/?size=100&id=102261&format=png&color=7e7e7e"
                            alt="batch" />
                        <strong>Users</strong>
                    </div>
                    {/**=================USER LISTS===================== */

                        mobileShowUser &&
                        <UserLists
                            styles={{
                                padding: "0",
                                margin: 0,
                                width: "100%",
                                padding: "0"
                            }}
                            setUserClick={mobileUserClick}
                        />
                    }
                </div>
            }

            <div className="bottom_cnts-6">
                <div className="batch_name_cnt-6">
                    <img className="bottom_panel_ic-6"
                        src="https://img.icons8.com/?size=100&id=25943&format=png&color=7f7f0d"
                        alt="batch" />
                    <strong>Color Mode</strong>
                </div>

                {/**Toggle */}
                <div className="toggle_cnt-6">
                    <div className="main_btn-6" onClick={handleColorMode}>
                        <div className={isDark ? "main_btn_ctr-6 darkmode" : "main_btn_ctr-6"}></div>
                    </div>
                </div>
            </div>

            <br></br>
            <div className="bottom_cnts-6">
                <LogOutButton sideBarExpand={true} styles={{ marginInlineStart: 'auto', marginInlineEnd: 'auto' }} />
            </div>

        </div>
    )
}