

export default function AddFilePanel() {
    return (
        <>
            <div className="add_panel_cnt-7">
                <div className="add_panel_cnt-7">
                    <span>Add file</span>
                    <img src="/icons/close_ic.png" width={"10"} height={"10"} alt="close"/>
                </div>

                <div className="add_panel_cnt-7">
                    <img />
                    <input type="file"
                        accept="application/*,text/*,.pdf,"
                        multiple={true}
                    />

                    <p>Drag and Drop your files here</p>
                </div>

                <div className="add_panel_cnt-7">
                    <div>
                        <img />
                        <span><strong>Upload with Google Drive</strong></span>
                    </div>

                    <div>
                        <img />
                        <span><strong>Upload with Dropbox</strong></span>
                    </div>
                </div>
            </div>
        </>
    )
}