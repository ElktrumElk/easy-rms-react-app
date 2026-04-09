

export default function BatchComponent({ data }) {

    return (

        <>
            <div id="dash_cmp" className="cnt_a-4">

                <div id="time_root_cnt" className="stat_1-4">
                    <div className="date-4">
                        <img className="date_ic-4" src="https://img.icons8.com/?size=100&id=23&format=png&color=000000"
                            alt="date" />
                        <span><strong id="currentSecTime">Tue 15 Apr, 2026</strong></span>
                    </div>
                    <div id="sort_btn" className="sort-4">
                        <img className="sort_ic-4" src="https://img.icons8.com/?size=100&id=Kb1HCEjwwuSZ&format=png&color=000000"
                            alt="filter" />
                        <span>Sort</span>
                    </div>
                </div>

                <div id="file_cnt" className="file_cnt-4">
                    {
                        data.batchFiles.map((dat, idx) => (



                            <div key={idx} id="file_1" className="group_time-4">
                                <span id="sec_date" className="sec_date-4">{dat.date + dat.year}</span>

                                {
                                    dat.files.map((file, indx) => (

                                        <div key={indx} id="files_1" className="file_sub_cnt-4">
                                            <div className="file_name-4">

                                                <img className="file_type_ic-4"
                                                    src="https://img.icons8.com/?size=100&id=117561&format=png&color=000000" alt="ms_excel" />

                                                <span id="file_name">{file.name}</span>

                                            </div>

                                            <div className="time-4">
                                                <span className="file_time-4">{file.time}</span>
                                                <button className="download_btn-4">
                                                    <img className="download_ic" src="https://img.icons8.com/?size=100&id=83159&format=png&color=FFFFFF" alt="download" />
                                                    <span>Download</span>
                                                </button>
                                                <img className="files_download_btn-4" src="https://img.icons8.com/?size=100&id=14100&format=png&color=7a7a7a" />
                                            </div>

                                        </div>

                                    ))
                                }

                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}