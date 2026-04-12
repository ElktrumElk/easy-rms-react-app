

/**
 * 
 * @param {Object} param0 
 * @param {Array} param0.list - List of users
 * @param {String} param0.buttonText - Text to be display at the blue button
 * @param {String} param0.tableTitle - Title of the component or Table
 * @param {String} param0.tableUserName - what should display as the head title of names
 * @returns 
 */
export const ListTable = ({list, tableTitle, buttonText, tableUserName}) => {

    return (
        <>
            {/**main div */}
            <div className="admin_list_component-10">

                <div className="admin_top_container-10">
                    <div>
                        <h2>{tableTitle}</h2>
                    </div>
                    <div className="tools_cnt-10">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="admin_search_inp-10" />
                            
                        <button className="add_admin_btn-10">
                            <img src="/icons/add_ics.png" width={"20"} height={"20"} />
                            <span>{buttonText}</span>
                        </button>
                    </div>
                </div>

                <div className="admin_cnt-10">
                    <div className="admin_table_head-10">
                        <span>#</span>
                        <div>
                            <img />
                            <span>{tableUserName}</span>
                        </div>
                        <div className="admin_id_head-10">
                            <img />
                            <span>ID</span>
                        </div>
                        <div className="p_number-10">
                            <img />
                            <span >Phone Number</span>
                        </div>
                        <div>
                            <img />
                            <span>Action</span>
                        </div>
                    </div>

                    <div className="admin_lists_view-10">
                        {
                            list.map((admin, index) => (
                                <div key={index} className="adminRow-10">

                                    <div className="admin_num_cnt-10">
                                        <span>{index + 1}</span>
                                    </div>

                                    <div className="admin_name_cnt-10">
                                        <strong>{admin.name}</strong>
                                        <span>{admin.email}</span>
                                    </div>

                                    <div className="ids-10">
                                        <span>{admin.id}</span>
                                    </div>

                                    <div className="phone_number_cnt-10">
                                        <span >{admin.number}</span>
                                    </div>

                                    <div>
                                        <button className="action_btn-10">
                                            <img src="/icons/ellipsis.png" width={"10"} height={"10"} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

