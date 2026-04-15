import { useContext, useState } from "react";
import GreetingContainer from "./dashboard_stats_comp/greeting_cnt";
import ModuleStats from "./dashboard_stats_comp/module_stats_comp";
import { ModuleView } from "./dashboard_stats_comp/modules_cnt";
import RecentFileComponent from "./dashboard_stats_comp/recent_file_cmp";
import { TopContainer } from "./dashboard_stats_comp/top_container";
import { AuthContext } from "../../../context/auth_context_export";

/**The whole section of the dashboard statistics */
export default function DashboardStats() {
    const [isViewBatch, setViewbatch] = useState(null)
    const { userRole } = useContext(AuthContext);
    return (
        <>
            <div id="main_page" className="home_screen">
                {/**Greetings */}
                <GreetingContainer isViewBatch={setViewbatch} />

                {/**Top cnt */}
                <TopContainer
                    viewBatchButtonClick={isViewBatch}
                    viewBatchFunction={setViewbatch}
                />

                {/**module stats component */}
                <ModuleStats />

                {/**Recent file sec */}
                <RecentFileComponent />

                {
                    /***/
                    userRole !== "Admin" &&
                    <ModuleView />
                }
            </div>
        </>
    )
} 