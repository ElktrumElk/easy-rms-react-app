import { useRef } from "react"

export function TopContainer() {

    const expand = useRef([]);
    return (
        <>
            <div className="top_bar-5">
                <h2 className="overView">Overview</h2>

                <div className="top_bar_counts-5">

                    <div className="bg"></div>
                    <div className="status_card-5 top_status_card-8">

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Number of Resources</strong></span>
                        </div>

                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>740</span>
                            </div>

                            <div className="rating_cnt">
                                <img src="/down"/>
                                <span>15%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5">
                            <span>View Details</span>
                        </div>

                    </div>

                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Batches Enrolled</strong></span>
                        </div>

                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>2</span>
                            </div>
                            <div className="rating_cnt">
                                <img src="/down" />
                                <span>50%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5">
                            <span>View Details</span>
                        </div>

                    </div>
                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Recently Access</strong></span>
                        </div>


                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>0</span>
                            </div>
                            <div className="rating_cnt negative">
                                <img src="/down" />
                                <span>-20%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5">
                            <span>View Details</span>
                        </div>

                    </div>

                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Accessed Modules</strong></span>
                        </div>


                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>53</span>
                            </div>
                            <div className="rating_cnt negative">
                                <img src="down" />
                                <span>-78%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5">
                            <span>View Details</span>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
};

