
import { useContext, useEffect } from "react"
import { UserTheme } from "../../../../context/userThemeContext"
/**
 * The drop down arrow
 * just the arrow icon on the right of every drop down lists
 * @param {Object} param0 
 * @param {Number} param0.isClick
 * @param {Number} param0.idx
 * @returns 
 */
export const DropDown = ({isClick, idx}) => {

    /**ColorMode */
    const {colorMode} = useContext(UserTheme);
    useEffect(() => {
        if (colorMode !== null) {

            localStorage.setItem("userPreferColorTheme", colorMode)
        }
    }, [colorMode])

    return (
        <>
            <img className={isClick === idx ? "Drop_down_arrow-3 active": "Drop_down_arrow-3"} src={colorMode === "dark" ? "/icons/drop_down_white.png" : "/icons/dd_arrow_dark.png"} alt="drop_down" />
        </>
    )
}