

export default function AddFilePanel() {
    return (
        <>
            <div className="add_panel-7">
                <div className="add_panel_cnt-7">
                    <span>Add file</span>
                    <img src="/icons/close_ic.png" width={"10"} height={"10"} alt="close"/>
                </div>

                <div className="add_panel_cnt-7">
                    <img src="/icons/drag_and_drop_blue.png" alt="drag_and_drop"/>
                    <input type="file"
                        accept="application/*,text/*,.pdf,"
                        multiple={true}
                    />

                    <p>Drag and Drop your files here</p>
                </div>

                <div className="add_panel_cnt-7 btm-7">
                    <button className="add_panel_buttons-7">
                        <img src="/icons/google_drive_ic.png"/>
                        <span><strong>Upload with Google Drive</strong></span>
                    </button>

                    <button className="add_panel_buttons-7">
                        <img />
                        <span><strong>Upload with Dropbox</strong></span>
                    </button>
                </div>
            </div>
        </>
    )
}