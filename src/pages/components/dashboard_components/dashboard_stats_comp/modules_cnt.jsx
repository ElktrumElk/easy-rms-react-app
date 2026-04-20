import { useContext, useState } from "react"
import moduleDat from "./module_data"
import CreateModules from "../../../../components/create_modules";
import fetchData from "../../../../scripts/fetchData";
import { AuthContext } from "../../../../context/auth_context_export";

export default function ModuleContainer() {

    const [batchData] = useState(fetchData({ navigate: false, type: false }).data);
    const { userRole } = useContext(AuthContext);

    return (
        <>
            {userRole !== 'Admin' && <CreateModules modules={batchData.modules} />}
        </>
    )
}

/**
 * THe module view panel at the bottom of the statistics
 * @returns
 */
export function ModuleView() {

    const [batchData] = useState(fetchData({ navigate: false, type: false }).data);

    return (
        <>
            <section className="module_sec_cnt-9">
                <div className="module_cnt-9">
                    <h2>Modules</h2>
                    {
                       batchData.modules.map((v, idx) => (
                            <div key={idx} className="module_card-9">
                                <div className="modulename-9">
                                    <h3>{v.moduleName}</h3>
                                </div>

                                <div className="cnt1-9">
                                    <span style={{color: '#213fea'}}>{v.lastUpdated}</span>
                                    <div className="module_new_file_notify-9">
                                        <span>{Math.floor(Math.random() * 10 + 1)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}