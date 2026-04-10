import BatchesEnrolledContainer from "./batches_enrolled_cnt"


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
                        <BatchesEnrolledContainer />
                    </div>

                </div>
            </section>
        </>
    )
}