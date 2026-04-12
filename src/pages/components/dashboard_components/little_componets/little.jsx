
import { useContext } from "react"
import { UserTheme } from "../../../../context/userThemeContext"
/**
 * 
 * @param {Object} param0 
 * @param {Number} param0.isClick
 * @param {Number} param0.idx
 * @returns 
 */
export const DropDown = ({isClick, idx}) => {
    const {colorMode} = useContext(UserTheme);
  
    return (
        <>
            <img className={isClick === idx ? "Drop_down_arrow-3" : "Drop_down_arrow-3 active"} src={colorMode === "dark" ? "/icons/dd_arrow_dark.png" : "/icons/drop_down_white.png"} alt="drop_down" />
        </>
    )
}