


/**
 * 
 * @param {Object} param0 
 * @param {Object} param0.data - The data Object
 * @param {String} param0.datakey  
 * @returns 
 */
export default function CreateBatchCard({data, datakey}) {

    return (

        <>
            {
                Object.keys(data[`${datakey}`]).map((batch, indx) => (
                    <div key={indx} className="list_sub_cnt-8">
                        <div className="list_top_sec-8">
                            <div className="res_name_cnt-8">
                                <h2>{data[`${datakey}`][batch].name}</h2>

                                <div className="list_status_cnt-8">
                                    <img src="/icons/progress_ic.png" width={"20"} height={"20"} />
                                    <span>Progress</span>
                                </div>
                            </div>

                            <div className="trt_num_std_cnt-8">
                                <span><strong>{data[`${datakey}`][batch].students}</strong> Students</span>
                            </div>
                        </div>

                        <div className="list_info-8">
                            <div>
                                <img src="/icons/date_ic.png" width={"20px"} height={"20px"} />
                                <span>{data[`${datakey}`][batch].dateEnrolled}</span>
                            </div>

                            <div>
                                <img src="/icons/inCharge_ic.png" width={"20px"} height={"20px"} />
                                <span>{data[`${datakey}`][batch].inCharge}</span>
                            </div>

                            <div>
                                <img src="/icons/modules_ic.png" width={"20px"} height={"20px"} />
                                <span><strong>{data[`${datakey}`][batch].modules}</strong> Modules</span>
                            </div>
                            <div>
                                <img src="https://img.icons8.com/?size=100&id=11173&format=png&color=a4e5f6" width={"20px"} height={"20px"} />
                                <span><strong>{data[`${datakey}`][batch].students}</strong> Students</span>
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