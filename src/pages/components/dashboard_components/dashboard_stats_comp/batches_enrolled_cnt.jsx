
import { useState } from "react";

export default function BatchesEnrolledContainer() {
    const [batchesEnrroled] = useState([
        {
            batchName: "Batch 1 2026",
            inCharge: "Mr Zeshan",
            state: "In progress",
            totalStudent: 35,
            timeCreated: "Wed 5 Jan 2026",
            modules: 10,
            progress: 2,
            lastUpdate: "3 days ago"
        },
        {
            batchName: "Batch 2 2026",
            inCharge: "Mr Abdullah Mustapha",
            state: "In progress",
            totalStudent: 30,
            timeCreated: "Mon 1 Feb 2026",
            modules: 10,
            progress: 1,
            lastUpdate: "4 days ago"
        },
        {
            batchName: "Batch 3 2026",
            inCharge: "Mr Gabati",
            state: "In progress",
            totalStudent: 28,
            timeCreated: "Fri 8 Jan 2026",
            modules: 9,
            progress: 3,
            lastUpdate: "3 days ago"
        },
        {
            batchName: "Batch 4 2026",
            inCharge: "Mr Rajesh Kumar",
            state: "In progress",
            totalStudent: 25,
            timeCreated: "Wed 7 Jan 2026",
            modules: 12,
            progress: 2,
            lastUpdate: "2 days ago"
        }
    ])

    return (
        <>
            {
                batchesEnrroled.map((batch, indx) => (
                    <div key={indx} className="list_sub_cnt-8">
                        <div className="list_top_sec-8">
                            <div className="res_name_cnt-8">
                                <h2>{batch.batchName}</h2>

                                <div className="list_status_cnt-8">
                                    <img src="/icons/progress_ic.png" width={"20"} height={"20"} />
                                    <span>{batch.state}</span>
                                </div>
                            </div>

                            <div className="trt_num_std_cnt-8">
                                <span><strong>{batch.totalStudent}</strong> Students</span>
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
                ))
            }
        </>
    )
}