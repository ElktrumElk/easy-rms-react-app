
/**
 * 
 * @param {Object} param0
 * @param {Array} param0.batches - List of the batches 
 * @returns 
 */
export default function BottomPanel({ batches = [] }) {
    return (
        <div className="bottom_panel-5 bottom_panel-6">
            
            <div className="batch_div-6">
                <div className="batch_title-6"> 
                    <div className="batch_name_cnt-6">
                        <img className="bottom_panel_ic-6" src="https://img.icons8.com/?size=100&id=727&format=png&color=8a2be2" alt="batch_ic"/>
                        <strong>Batch</strong>
                    </div>
                    <strong>{batches.length}</strong>
                </div>

                <ul className="batch_lists_cnt-6">
                    {
                        batches.map((batchName, idx) => (
                            <li className="batch_lists" key={idx}>{batchName}</li>
                        ))
                    }
                </ul>
                <div>
                </div>
            </div>

             <div className="batch_div-6">
                
             </div>
        </div>
    )
}