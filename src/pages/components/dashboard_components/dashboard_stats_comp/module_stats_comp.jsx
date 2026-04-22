import { useContext, useState } from "react";
import BarChart from "../bar_chart";
import { AuthContext } from "../../../../context/auth_context_export";
import ChartOptPanel from "../../../../components/charts_opt_panel";

export default function ModuleStats() {

    const { userRole } = useContext(AuthContext);
    const [isChartOptionPanel, setChartOptionPanel] = useState(false);
    const [chartElipseClicked, setChartElispseClick] = useState(false)

    /**The handle dleay for cart option to display with some transition */
    const handleSetIsChart = () => {
        setChartElispseClick(!chartElipseClicked);
        if (isChartOptionPanel) {
            setTimeout(() => {
                setChartOptionPanel(false);
            }, 500)
        } else {
            setChartOptionPanel(true); 
        }
    }

    const [chartType, setChartType] = useState('BC');
    return (
        <>
            <section className="module_stat_sec-5">
                <div className="stat_cnt-5">

                    <div className="top_stat_cnt-5">
                        <h3>{userRole === "Admin" ? "Batch Statistics" : "Modules Stats"}</h3>
                        <img src="https://img.icons8.com/?size=100&id=20763&format=png&color=000000"
                            width="20px"
                            alt="elipse"
                            title="more"
                            onClick={handleSetIsChart}
                        />
                    </div>

                    {/**Chart option panel */}
                    {
                        isChartOptionPanel && <ChartOptPanel isVisible={isChartOptionPanel} isElipseClick={chartElipseClicked} setChartType={setChartType}/>
                    }

                    <div className="bar_chat-5">
                        <BarChart chartType={chartType}/>
                    </div>
                </div>

                <div className="last_viewed_file_cnt-5">
                    <div className="top_lst_viewed_sec-5">
                        <h3>Last Viewd</h3>
                    </div>

                    <div className="ic_view">
                        <img className="last_file_view_ic-5" src="https://img.icons8.com/?size=1000&id=117561&format=png&color=000000" />
                    </div>
                    <div className="nme-5">
                        <span>Sales.xlsx</span>
                    </div>
                </div>
            </section>
        </>
    )
}