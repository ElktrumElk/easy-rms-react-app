import { useState } from "react"


export default function ModuleContainer() {

    const [modules] = useState([
        {
            moduleName: "Advance Excel",
            inCharge: "Mr Zeshan",
            state: "Current",
            batch: "Batch 1 2026",
            totalFiles: 14,
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 2 days ago",
            totalChapters: 10,


        },
        {
            moduleName: "HTML / CSS",
            inCharge: "Mr Abdullah",
            state: "Draft",
            batch: "Batch 1 2026",
            totalFiles: 19,
            timeAssign: "Mon 11 Jan 2026",
            lastUpdated: "10th Feb 2026",
            totalChapters: 10,

        },
        {
            moduleName: "Linux",
            inCharge: "Mr Rajesh Kuma",
            state: "Finnished",
            batch: "Batch 3 2026",
            totalFiles: 20,
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 2 days ago",
            totalChapters: 10,
        },
        {
            moduleName: "MS Office",
            inCharge: "Mr Bangura",
            state: "Current",
            totalFiles: 25,
            batch: "Batch 4 2026",
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 1 days ago",
            totalChapters: 10,

        },
        {
            moduleName: "Logic Building",
            inCharge: "Mr Bangura",
            state: "Completed",
            totalFiles: 10,
            batch: "Batch 1 2026",
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 2 days ago",
            totalChapters: 10,

        },
        {
            moduleName: "Advance Excel",
            inCharge: "Mr Zeshan",
            state: "Current",
            totalFiles: 15,
            timeAssign: "Mon 9 Jan 2026",
            lastUpdated: " 3 days ago",
            totalChapters: 10,
            batch: "Batch 2 2026",
        },
    ]);

    return (
        <>
            {
                <div key={indx} className="list_sub_cnt-8">
                    <div className="list_top_sec-8">
                        <div className="res_name_cnt-8">
                            <h2>{batch.batchName}</h2>

                            <div className="list_status_cnt-8">
                                <img src="/icons/progress_ic.png" width={"20"} height={"20"} />
                                <span>{batch.state}</span>
                            </div>
                        </div>

                    </div>

                    <div className="list_info-8">
                        <div>
                            <img src="/icons/date_ic.png" width={"20px"} height={"20px"} />
                            <span>{batch.timeCreated}</span>
                        </div>

                        <div>
                            <img src="/icons/inCharge_ic.png" width={"20px"} height={"20px"} />
                            <span>{batch.inCharge}</span>
                        </div>

                        <div>
                            <img src="/icons/modules_ic.png" width={"20px"} height={"20px"} />
                            <span><strong>{batch.modules}</strong> Modules</span>
                        </div>
                    </div>
                    <div className="li_btm-8">
                        <div>
                            <div>*</div>
                            <span>Progress({batch.progress}/{batch.modules})</span>
                            <span className="module_up_status-8">Updated {batch.lastUpdate}</span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}