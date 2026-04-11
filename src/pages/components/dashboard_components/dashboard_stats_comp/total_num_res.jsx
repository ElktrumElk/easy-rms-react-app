import { useEffect, useState } from "react"
import BatchesEnrolledContainer from "./batches_enrolled_cnt"
import ModuleContainer from "./modules_cnt";
import AccessCourseContainer from "./access_course_cnt";

/**
 * 
 * @param {Object} param0
 * @param {Boolean} param0.viewPanel - true / false Holds the value state of the resource panel
 * @param {CallableFunction} param0.setViewPanel - The callback function to change the state of the view panel
 * @param {CallableFunction} param0.curTab - Open the exact tab when on view 
 * @param {String} param0.curTabValue - Holds the value of the current Tab state
 * @param {String} param0.tabName - Holds the value of the current Tab name
 * 
 * 
 * @returns 
 */
export default function TotalNumberResources({ viewPanel, setViewPanel, curTab, curTabValue, tabName }) {

    const [currentTab, setCurrentTab] = useState(null);


    useEffect(() => {
        setCurrentTab(curTabValue);
        console.log(currentTab)
    }, [curTabValue]);

    return (
        <>
            <section className="tnrl-8">
                <div className="Ttl_num_res_list-8">
                    <div className="higher_top-8">
                        <img className="close_add_panel-8"
                            src="/icons/close_ic.png"
                            width={"20px"}
                            height={"20px"}
                            onClick={() => { setViewPanel(!viewPanel) }}
                        />

                        <div className="top_cnt-8">
                            <h1>{tabName}</h1>
                            <button className="new_resources_btn-8">
                                <img src="/icons/plus_ic.png" width={"25"} height={"25"} />
                                <span>New Resources</span>
                            </button>
                        </div>
                        <div className="tabs-8">
                            <button className={currentTab === "BE" ? "active" : undefined}
                                onClick={() => { setCurrentTab("BE") }}
                            >
                                Batches Enrolled
                            </button>

                            <button
                                className={currentTab === "MD" ? "active" : undefined}
                                onClick={() => { setCurrentTab("MD") }}
                            >Modules</button>

                            <button
                                className={currentTab === "AC" ? "active" : undefined}
                                onClick={() => { setCurrentTab("AC") }}
                            >Accessed Course</button>
                        </div>
                    </div>


                    <div className="list_cnt-8">
                        {currentTab === "BE" && <BatchesEnrolledContainer />}
                        {currentTab === "MD" && <ModuleContainer />}
                        {currentTab === "AC" && <AccessCourseContainer />}
                    </div>

                </div>
            </section>
        </>
    )
}