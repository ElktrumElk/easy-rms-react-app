

export default function BatchComponent({ data }) {

    return (

        <>
            <div id="dash_cmp" class="cnt_a-4">

                <div id="time_root_cnt" class="stat_1-4">
                    <div class="date-4">
                        <img class="date_ic-4" src="https://img.icons8.com/?size=100&id=23&format=png&color=000000"
                            alt="date" />
                        <span><strong id="currentSecTime">Tue 15 Apr, 2026</strong></span>
                    </div>
                    <div id="sort_btn" class="sort-4">
                        <img class="sort_ic-4" src="https://img.icons8.com/?size=100&id=Kb1HCEjwwuSZ&format=png&color=000000"
                            alt="filter" />
                        <span>Sort</span>
                    </div>
                </div>


            </div>
        </>
    )
}