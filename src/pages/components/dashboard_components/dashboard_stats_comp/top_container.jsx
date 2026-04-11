import { useEffect, useRef, useState } from "react"
import TotalNumberResources from "./total_num_res";

export function TopContainer() {

    const [viewPanel, setViewPanels] = useState(false);
    const [ct, setCurTab] = useState(null);

    /**Name of the tab to be displayed */
    const [tb, setTb] = useState(null);

    useEffect(() => {
        console.log(ct)
    }, [ct])
    return (
        <>
            <div className="top_bar-5">
                <h2 className="overView">Overview</h2>

                <div className="top_bar_counts-5">

                    <div className="bg"></div>

                    <div className={viewPanel ? "status_card-5 top_status_card-8" : "status_card-5"}>

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Number of Resources</strong></span>
                        </div>

                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>12</span>
                            </div>

                            <div className="rating_cnt">
                                <img src="/down" />
                                <span>15%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5" onClick={() => {
                            setViewPanels(!viewPanel);
                            setTb("Batches Enrolled");
                            setCurTab("BE");

                        }}>
                            <span>View Details</span>
                        </div>

                        {
                            viewPanel &&
                            <TotalNumberResources
                                viewPanel={viewPanel}
                                setViewPanel={setViewPanels}
                                curTabValue={ct}
                                tabName={tb}
                            />

                        }

                    </div>

                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Batches Enrolled</strong></span>
                        </div>

                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>4</span>
                            </div>
                            <div className="rating_cnt">
                                <img src="/down" />
                                <span>50%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5"

                            onClick={() => {
                                setViewPanels(!viewPanel);
                                setCurTab("BE");
                                setTb("Batches Enrolled")
                            }}>
                            <span>View Details</span>
                        </div>

                    </div>
                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Access Course</strong></span>
                        </div>


                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>2</span>
                            </div>
                            <div className="rating_cnt negative">
                                <img src="/down" />
                                <span>-20%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5"
                            onClick={() => {
                                setViewPanels(!viewPanel);
                                setCurTab("AC");
                                setTb("Access Course")
                            }}
                        >
                            <span>View Details</span>
                        </div>

                    </div>

                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <span><strong>Accessed Modules</strong></span>
                        </div>


                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>6</span>
                            </div>
                            <div className="rating_cnt negative">
                                <img src="down" />
                                <span>-78%</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5"
                            onClick={() => {
                                setViewPanels(!viewPanel);
                                setCurTab("MD");
                                setTb("Modules")
                            }}>
                            <span>View Details</span>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
};

