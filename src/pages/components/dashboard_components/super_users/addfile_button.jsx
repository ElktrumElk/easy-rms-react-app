
/**
 * Add Button for super users (Admin / Lecturer)
 * 
*/

import { useContext } from "react"
import { UserTheme } from "../../../../context/userThemeContext"
/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.setAddPanel - Function to flip the boolean flag 
 * @param {Boolean} param0.showAddPanel - True / false
 * @returns 
 */
export default function AddButton({setAddPanel, showAddPanel}) {

    const {colorMode} = useContext(UserTheme)
   
    return (
        <>
            <div className="tool_btn-7" onClick={() => {setAddPanel(!showAddPanel)}}>
                <img className="add_btn_ic-7" src={colorMode === "dark" ? "/icons/add_ics.png" : "/icons/add_ics_dark.png"}></img>
                <span>{showAddPanel ? "Close" : "Add"}</span>
            </div>
        </>
    )
}