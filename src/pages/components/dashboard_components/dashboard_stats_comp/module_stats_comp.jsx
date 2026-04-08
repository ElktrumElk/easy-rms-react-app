
export default function ModuleStats() {

    return (
        <>
            <section className="module_stat_sec-5">
                <div className="stat_cnt-5">

                    <div className="top_stat_cnt-5">
                        <h3>Modules Stats</h3>
                        <img src="https://img.icons8.com/?size=100&id=20763&format=png&color=000000" width="20px" alt="elipse" />
                    </div>

                    <div className="bar_chat-5">
                        <img id="stats_g_load" className="loading-5" src="/animations/icons8-iphone-spinner.gif" />
                        <canvas id="bar_cnt"></canvas> 
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