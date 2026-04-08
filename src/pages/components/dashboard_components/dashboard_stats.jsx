import ModuleStats from "./dashboard_stats_comp/module_stats_comp";
import RecentFileComponent from "./dashboard_stats_comp/recent_file_cmp";
import { TopContainer } from "./dashboard_stats_comp/top_container";

/**The whole section of the dashboard statistics */
export default function DashboardStats() {

    return (
        <>
            <div id="main_page" className="home_screen">
                {/**Top cnt */}
                <TopContainer />

                {/**module stats component */}
                <ModuleStats />

                {/**Recent file sec */}
                <RecentFileComponent />
            </div>
        </>
    )
} 