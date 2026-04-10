

/**
 * 
 * @param {Object} param0
 * @param {Boolean} param0.viewPanel - true / false Holds the value state of the resource panel
 * @param {CallableFunction} param0.setViewPanel - The callback function to change the state of the view panel
 * @returns 
 */
export default function TotalNumberResources({viewPanel, setViewPanel}) {

    return (
        <>
            <section className="tnrl-8">
                <div className="Ttl_num_res_list-8">
                    <div className="higher_top-8">
                        <img className="close_add_panel-8" 
                        src="/icons/close_ic.png" 
                        width={"20px"} 
                        height={"20px"} 
                        onClick={() => {setViewPanel(!viewPanel)}}
                        />

                        <div className="top_cnt-8">
                            <h1>Resources</h1>
                            <button className="new_resources_btn-8">
                                <img src="/icons/plus_ic.png" width={"25"} height={"25"} />
                                <span>New Resources</span>
                            </button>
                        </div>
                        <div className="tabs-8">
                            <button className="active">All</button>
                            <button>Batches Enrolled</button>
                            <button>Modules</button>
                            <button>Access Course</button>
                        </div>
                    </div>


                    <div className="list_cnt-8">
                        <div className="list_sub_cnt-8">
                            <div className="list_top_sec-8">
                                <div className="res_name_cnt-8">
                                    <h2>Advance Excel</h2>

                                    <div className="list_status_cnt-8">
                                        <img src="/icons/progress_ic.png" width={"20"} height={"20"} />
                                        <span>In progress</span>
                                    </div>
                                </div>
                                
                                <div className="trt_num_std_cnt-8">
                                    <span><strong>20+</strong> Students</span>
                                </div>
                            </div>

                            <div className="list_info-8">
                                <div>
                                    <img src="/icons/date_ic.png" width={"20px"} height={"20px"} />
                                    <span>Wed 5 Jan 2026</span>
                                </div>

                                <div>
                                    <img src="/icons/inCharge_ic.png" width={"20px"} height={"20px"} />
                                    <span>Mr Zeshan</span>
                                </div>

                                <div>
                                    <img src="/icons/modules_ic.png" width={"20px"} height={"20px"} />
                                    <span><strong>10</strong> Modules</span>
                                </div>
                            </div>
                            <div className="li_btm-8">
                                <div>
                                    <div>*</div>
                                    <span>Progress(2/10)</span>
                                    <span className="module_up_status-8">Updated 1 day ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}