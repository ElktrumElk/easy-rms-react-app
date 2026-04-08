
export default function Batches() {

    const batchName = ["Advance Excel", "Linux", "C++", "MS Office", "N++"];

    return (
        <>
            <li id="batch_lists" className="ls-3">
                <div className="batch_list_lrg-3">
                    <ul>
                        {
                            batchName.map((values, idx) => (

                                <li key={"batch_ls" + idx}>{values}</li>

                            ))
                        }
                    </ul>
                </div>
            </li>
        </>
    )
}