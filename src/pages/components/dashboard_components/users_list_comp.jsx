import { useState } from "react"


export default function UsersComponentList() {

    const [items] = useState(["Admin", "Intructors", "Student"])
    return (
        <li id="batch_lists" className="ls-3">
            <div className="batch_list_lrg-3">
                <ul>
                    {
                        items.map((values, idx) => (
                            <li id={idx}  key={idx}>{values}</li>
                        ))
                    }
                </ul>
            </div>
        </li>
    )
}