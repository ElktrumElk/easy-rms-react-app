import adminLists from "../accounts/admin_lists"



const InstructorComponent = () => {
    const aList = adminLists();

    return (
        <>
            {/**main div */}
            <div className="admin_list_component-10">

                <div className="admin_top_container-10">
                    <div>
                        <span>Instructors List</span>
                    </div>
                    <div className="tools_cnt-10">
                        <input />
                        <button>
                            <img />
                            <span>Add new Admin</span>
                        </button>
                    </div>
                </div>

                <div className="admin_table_head-10">
                    <div>
                        <span>#</span>
                        <div>
                            <img />
                            <span>Admin</span>
                        </div>
                        <div>
                            <img />
                            <span>ID</span>
                        </div>
                        <div>
                            <img />
                            <span>Phone Number</span>
                        </div>
                        <div>
                            <img />
                            <span>Action</span>
                        </div>
                    </div>
                    <div className="admin_lists_view-10">
                        { 
                            aList.map((admin, index) => {
                                <div className="adminRow-10">

                                    <div className="admin_num_cnt-10">
                                        <span>{index}</span>
                                    </div>

                                    <div className="admin_name_cnt-10">
                                        <span>{admin.name}</span>
                                        <span>{admin.email}</span>
                                    </div>

                                    <div>
                                        <span>{admin.id}</span>
                                    </div>

                                     <div>
                                        <span>{admin.number}</span>
                                    </div>

                                     <div>
                                        <img />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}