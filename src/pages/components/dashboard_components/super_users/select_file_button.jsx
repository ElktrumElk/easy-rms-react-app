


/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.setSelectFile - A callbback function to triger the select file
 * @param {Boolean} param0.selectFile - The boolean value of the select file
 * @returns 
 */
export default function SelectFile({setSelectFile, selectFile}) {
    return (
        <>
            <div className="tool_btn-7">
                <img className="add_btn_ic-7" src="/icons/select_ic.png" alt="select" onClick={() => {setSelectFile(!selectFile)}}/>
                <span>Select</span>
            </div>
        </>
    )
}