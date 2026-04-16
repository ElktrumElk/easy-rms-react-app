import { useContext, useEffect, useRef, useState } from "react"
import TotalNumberResources from "./total_num_res";
import fetchData from "../../../../scripts/fetchData";
import { ValidData } from "../../../../context/validData";
import { AuthContext } from "../../../../context/auth_context_export";

/**
 * 
 * @param {Object} param0 
 * @param {String} param0.viewBatchButtonClick
 * @param {CallableFunction} param0.viewBatchFunction
 * 
 * @returns 
 */
export function TopContainer({ viewBatchButtonClick, viewBatchFunction }) {

    const [viewPanel, setViewPanels] = useState(false);
    const [ct, setCurTab] = useState(null);

    const [data, setData] = useState(fetchData({ navigate: false, type: false }));
    const { userRole } = useContext(AuthContext);

    const [batchNumber, setBatchNumber] = useState(0);
    const [courseNumber, setCourseNumber] = useState(0);
    const [totalStudent, setTotalStudent] = useState(0);
    const [totalResources, setTotalResources] = useState(0);

    let startBatchNumber = 0;
    let startCourseNumber = 0;
    let startStudentNumber = 0;
    let startResources = 0;


    useEffect(() => {
        let endBatchNumber = Object.keys(data.data.batchesEnrolled).length;
        let endCourseNumber = Object.keys(data.data.courses).length;
        let endStudentNumer = 0;

        /**Caculate the total amount of children */
        Object.keys(data.data.batchesEnrolled).forEach((b, idx) => {
            endStudentNumer += data.data.batchesEnrolled[`${b}`].students
        })

        let endResources = endBatchNumber + endCourseNumber + endStudentNumer;

        const interval = setInterval(() => {

            if (userRole === "Admin") {
                if (startBatchNumber > endBatchNumber &&
                    startCourseNumber > endCourseNumber &&
                    startStudentNumber > endStudentNumer &&
                    startResources > endResources
                ) {
                    clearInterval(interval)
                } else {
                    if (startBatchNumber <= endBatchNumber) {
                        setBatchNumber(startBatchNumber);
                        startBatchNumber += 1;
                    }
                    if (startCourseNumber <= endCourseNumber) {
                        setCourseNumber(startCourseNumber);
                        startCourseNumber += 1;
                    }
                    if (startStudentNumber <= endStudentNumer) {
                        setTotalStudent(startStudentNumber)
                        startStudentNumber += 2;
                    }
                    if (startResources <= endResources) {
                        setTotalResources(startResources);
                        startResources += 2;
                    }
                }

            } else {
                //comment: just for the main time it will be replace with student login
                setBatchNumber(0);
            }
        }, 1)

        return () => clearInterval(interval);
    }, [data])


    /**Name of the tab to be displayed */
    const [tb, setTb] = useState(null);

    useEffect(() => {
        if (viewBatchButtonClick !== null) {
            setViewPanels(true);
            setTb("Batches Enrolled");
            setCurTab("BE");
            viewBatchFunction(null)
        }
    }, [viewBatchButtonClick])


    return (
        <>
            <div className="top_bar-5">
                <h2 className="overView">Overview</h2>

                <div className="top_bar_counts-5">

                    <div className="bg"></div>

                    <div className={viewPanel ? "status_card-5 top_status_card-8" : "status_card-5"}>

                        <div className="status_card_tp_cnt-5">
                            <img src="https://img.icons8.com/?size=100&id=1476&format=png&color=31f791" width={"20"} height={"20"}
                                style={{
                                    background: "#20d79d48",
                                    borderRadius: ".4rem",
                                    padding: ".5rem .5rem",
                                    boxSizing: "content-box"
                                }}
                            />
                            <span><strong>Resources</strong></span>
                        </div>

                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>{totalResources}</span>
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
                                curTab={setTb}
                                
                            />

                        }

                    </div>

                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <img src="https://img.icons8.com/?size=100&id=7890&format=png&color=0760db" width={"20"} height={"20"}
                                style={{
                                    background: "#0760db48",
                                    borderRadius: ".4rem",
                                    padding: ".5rem .5rem",
                                    boxSizing: "content-box"
                                }}
                            />
                            <span><strong>Batch</strong></span>
                        </div>

                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>{batchNumber}</span>
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

                        <div className="status_card_tp_cnt-5 ">
                            <img src="https://img.icons8.com/?size=100&id=79259&format=png&color=d7c820" width={"20"} height={"20"}
                                style={{
                                    background: "#d7c82048",
                                    borderRadius: ".4rem",
                                    padding: ".5rem .5rem",
                                    boxSizing: "content-box"
                                }}
                            />
                            <span><strong>Course</strong></span>
                        </div>


                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>{courseNumber}</span>
                            </div>

                        </div>

                        <div className="btm_cnt-5"
                            onClick={() => {
                                setViewPanels(!viewPanel);
                                setCurTab("AC");
                                setTb("Course")
                            }}
                        >
                            <span>View Details</span>
                        </div>

                    </div>

                    <div className="status_card-5">

                        <div className="status_card_tp_cnt-5">
                            <img src="https://img.icons8.com/?size=100&id=22798&format=png&color=c820d7" width={"20"} height={"20"}
                                style={{
                                    background: "#c820d748",
                                    borderRadius: ".4rem",
                                    padding: ".5rem .5rem",
                                    boxSizing: "content-box"
                                }}
                            />
                            <span><strong>{userRole === "Admin" ? "Total Student" : "Modules"}</strong></span>
                        </div>


                        <div className="status_card_mid_cnt-5">
                            <div className="num_cnt-5">
                                <span>{totalStudent}</span>
                            </div>
                        </div>

                        <div className="btm_cnt-5"
                            onClick={

                                userRole === "Admin" ? () => {
                                    /**Comment: If the current user is an admin user */
                                    setViewPanels(!viewPanel);
                                    setCurTab("BE")
                                    setTb("Batches Enrolled")
                                }
                                    :
                                    () => {
                                        setViewPanels(!viewPanel);
                                        setCurTab("MD");
                                        setTb("Modules");
                                    }
                            }>
                            <span>View Details</span>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
};

