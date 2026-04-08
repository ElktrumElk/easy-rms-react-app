import { useState } from "react"
import DashboardStats from "./dashboard_stats"
import Batches from "./batches/batch"
import BatchComponent from "./batches/batch_components";

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
 * @param {*} param0 
 * @returns 
 */
export function DashSideBar({ handleExpand, isExpand, batchCb}) {
    return (
        <>
            <div id="side_bar" className={isExpand ? "side_bar-3 expand" : "side_bar-3"}>
                <header className="side_bar_header-3">

                    <div className="logo_cnt-3">
                        <img className="logo_img-3" src="/easy_ic.png" alt="" />
                        <h1 id="app_name" className="app_name-3">Easy</h1>
                    </div>
                </header>

                <section className="opt-3">
                    <div id="g_2" className="heading">
                        <h2 className="g-3">General</h2>
                    </div>

                    <div className="gen-3">
                        <ul id="gen_list" className="gen_list-3">

                            <li id="Home_btn" className="g_list-3" title="home">
                                <img className="ic_1-3"
                                    src="https://img.icons8.com/?size=100&id=73&format=png&color=a9049b" />
                                <span>Home</span>
                            </li>


                            <li id="batch_lrg_btn" className="g_list-3" title="Batch" onClick={handleExpand}>
                                <img className="ic_1-3" src="https://img.icons8.com/?size=100&id=727&format=png&color=7a7a7a"
                                    alt="batch" />
                                <span>Batch</span>
                            </li>

                            {/**Batch list */}
                            <Batches cb={batchCb} />

                        </ul>

                    </div>
                </section>
            </div>
        </>
    )
}

export function DashboardHeader() {
    const date = new Date();

    //days
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //months
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    const callender = `${day} ${date.getDate()} ${month} ${year}`;


    return (
        <>
            <section className="head-3">
                <header className="head_header-3">
                    <div className="sub_cnt-3 s-3">
                        <img className="ic-3 ic3-3" src="https://img.icons8.com/?size=100&id=73&format=png&color=a9049b" />
                        <h1 className="current-3">{"Dashboard"}</h1>
                    </div>

                    <div className="sub_cnt-3 sa-3">

                        <div className="callender-3">
                            <img src="https://img.icons8.com/?size=100&id=SqCUs5XkuU76&format=png&color=000000" width="20" height="20" />
                            <span>{callender}</span>
                        </div>
                        <input id="search" className="search_inp" placeholder="search..." />

                        <img id="searc_btn" className="ic-3 ic_2-3 ic_search-3"
                            src="https://img.icons8.com/?size=100&id=132&format=png&color=7a7a7a" alt="search" />

                        <img id="theme_tg_btn" className="ic-3 ic_2-3"
                            src="https://img.icons8.com/?size=100&id=45474&format=png&color=7a7a7a" alt="dark" />

                        <img id="hambuger_menu" className="ic-3 ic_2-3 hamburder-3"
                            src="https://img.icons8.com/?size=100&id=120374&format=png&color=000000" alt="search" />
                    </div>
                </header>



                <div id="menu_pan" className="menu_pan_bg">

                    <div id="menu_card" className="menu_panel-3">

                        <div className="inp_div_cnt">
                            <input id="search_1" className="inp_search-3" type="search" placeholder="search" />
                        </div>

                        <div className="std_info_cnt-3 border_bottom-3">

                            <div className="std_info-3">
                                <span>Student Name</span>
                                <span>Elkanah Cole</span>
                            </div>
                            <div className="std_info-3">
                                <span>Student ID</span>
                                <span>Code20560028</span>
                            </div>

                        </div>

                        <div className="std_info_cnt-3">
                            <div id="batch_btn" className="std_info-3 batch_drop_down">
                                <div className="drop_panel_btcn-3"><img style={{ color: "#03a1cd" }} className="drop_down_ic-3"
                                    src="https://img.icons8.com/?size=100&id=727&format=png&color=03a1cd"
                                    alt="batch" /><strong>Batches</strong></div>
                                <span id="batch_number">3</span>
                            </div>

                            <div id="btch_list" className="batch_list-3">
                                <ul>
                                    <li className="border_bottom-3">
                                        <span>Advance Excel</span>
                                        <span>6 files</span>
                                    </li>

                                    <li className="border_bottom-3">
                                        <span>Linux</span>
                                        <span>14 files</span>
                                    </li>

                                    <li className="border_bottom-3">
                                        <span>C++</span>
                                        <span>10 files</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="std_info_cnt-3">
                            <div className="std_info-3">
                                <div className="drop_panel_btcn-3"><img style={{ color: "#5a3292" }} className="drop_down_ic-3"
                                    src="https://img.icons8.com/?size=100&id=25943&format=png&color=5a3292"
                                    alt="batch" /><strong>Color Mode: Light</strong></div>
                                <div id="tg_btn_mobile" className="color_tg_inp-3">
                                    <div id="tg_ctr" className="cl_tg_ctr-3"></div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

/**Serves as the main panel for content changing */
export function DashboardMainPanel({ render_frame }) {
    return (
        <>
            <section className="cont-3">
                {
                    render_frame ? <BatchComponent data={render_frame}/> : <DashboardStats /> 
                }
            </section>
        </>
    )
}

