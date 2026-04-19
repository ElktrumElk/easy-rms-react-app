

/**
 * 
 * @param {Object} param0 
 * @param {Array} param0.modules - Array of the modules
 * @returns 
 */
export default function CreateModules({ modules }) {

    return (
        <>
            {
                modules.map((module, indx) => (

                    <div key={indx} className="list_sub_cnt-8">
                        <div className="list_top_sec-8">
                            <div className="res_name_cnt-8">
                                <h2>{module.moduleName}</h2>

                                <div className="list_status_cnt-8" style={{
                                    backgroundColor: `${module.color}`
                                }}>
                                    <img src={module.icon} width={"20"} height={"20"} />
                                    <span>{module.state}</span>
                                </div>
                            </div>

                        </div>

                        <div className="list_info-8">
                            <div>
                                <img src="/icons/date_ic.png" width={"20px"} height={"20px"} />
                                <span>{module.timeAssign}</span>
                            </div>

                            <div>
                                <img src="/icons/inCharge_ic.png" width={"20px"} height={"20px"} />
                                <span>{module.inCharge}</span>
                            </div>
                            <div>
                                <img src="/icons/module_btch_ic.png" width={"20px"} height={"20px"} />
                                <span>{module.batch}</span>
                            </div>

                            <div>
                                <img src="/icons/modules_ic.png" width={"20px"} height={"20px"} />
                                <span><strong>{module.totalFiles}</strong> Files</span>
                            </div>
                        </div>
                        <div className="li_btm-8">
                            <div>
                                <div>*</div>
                                <span>Chapters {module.totalChapters}</span>
                                <span className="module_up_status-8">Updated {module.lastUpdated}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}