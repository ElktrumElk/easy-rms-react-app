import { useState } from "react";

/**
 * Lists of instructors
 */
export function instructorListsData() {

    /**
     * @prop {Object} param0
     * @prop {Object} param0.name - string
     */
    const [instructorlists] = useState([
        {
            name: "Abdullah Mustapha",
            number: "090834576",
            id: "inst2026001",
            type: "",
            email: "must@gmail.com"
        },
        {
            name: "Mohammed Bangura",
            number: "031248261",
            id: "inst2026002",
            type: "",
            email: "bangs@gmail.com"

        },
        {
            name: "Gabati",
            number: "076413626",
            id: "inst2026003",
            type: "",
            email: "gabat@gmail.com"

        },
        {
            name: "Rajesh Kumar",
            number: "031388705",
            id: "inst2026004",
            type: "",
            email: "rj@gmail.com"

        }
    ]);
    return instructorlists;
}
