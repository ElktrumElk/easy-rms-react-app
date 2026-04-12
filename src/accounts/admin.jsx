import { useState } from "react"

const admins = () => {
    const [adminlists] = useState([
        {
            name: "Rajesh Kuma",
            number: "077834576",
            id: "admin2026001",
            type: "less"
        },
        {
            name: "Madusan",
            number: "031248261",
            id: "admin2026002",
            type: "less"
        },
        {
            name: "Elkanah Cole",
            number: "076413626",
            id: "admin2026003",
            type: "super"
        },
        {
            name: "Abdullah Mustapha",
            number: "031388705",
            id: "admin2026004",
            type: "super"
        }
    ]);
    return adminlists;
}