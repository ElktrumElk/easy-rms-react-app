
import { useState } from "react";
import educationalServiceData from "../../../../accounts/db";
import fetchData from "../../../../scripts/fetchData";

export default function BatchesEnrolledContainer() {

    const [batchData] = useState(fetchData({ navigate: false, type: false }).data);

    return (
        <>
            {
                Object.keys(batchData.batchesEnrolled).map((batch, indx) => (
                    <div key={indx} className="list_sub_cnt-8">
                        <div className="list_top_sec-8">
                            <div className="res_name_cnt-8">
                                <h2>{batchData.batchesEnrolled[batch].name}</h2>

                                <div className="list_status_cnt-8">
                                    <img src="/icons/progress_ic.png" width={"20"} height={"20"} />
                                    <span>Progress</span>
                                </div>
                            </div>

                            <div className="trt_num_std_cnt-8">
                                <span><strong>{batchData.batchesEnrolled[batch].students}</strong> Students</span>
                            </div>
                        </div>

                        <div className="list_info-8">
                            <div>
                                <img src="/icons/date_ic.png" width={"20px"} height={"20px"} />
                                <span>{batchData.batchesEnrolled[batch].dateEnrolled}</span>
                            </div>

                            <div>
                                <img src="/icons/inCharge_ic.png" width={"20px"} height={"20px"} />
                                <span>{batchData.batchesEnrolled[batch].inCharge}</span>
                            </div>

                            <div>
                                <img src="/icons/modules_ic.png" width={"20px"} height={"20px"} />
                                <span><strong>{batchData.batchesEnrolled[batch].modules}</strong> Modules</span>
                            </div>
                            <div>
                                <img src="https://img.icons8.com/?size=100&id=11173&format=png&color=a4e5f6" width={"20px"} height={"20px"} />
                                <span><strong>{batchData.batchesEnrolled[batch].students}</strong> Students</span>
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