
/**
 * Add Button for super users (Admin / Lecturer)
 * 
*/

/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.setAddPanel - Function to flip the boolean flag 
 * @param {Boolean} param0.showAddPanel - True / false
 * @returns 
 */
export default function AddButton({setAddPanel, showAddPanel}) {

    return (
        <>
            <div className="tool_btn-7" onClick={() => {setAddPanel(!showAddPanel)}}>
                <img className="add_btn_ic-7" src="https://img.icons8.com/?size=100&id=24717&format=png&color=7a7a7a"></img>
                <span>{showAddPanel ? "Close" : "Add"}</span>
            </div>
        </>
    )
}