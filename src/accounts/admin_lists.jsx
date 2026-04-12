import { useState } from "react"

const adminLists = () => {
    const [adminlists] = useState([
        {
            name: "Rajesh Kuma",
            number: "077834576",
            id: "admin2026001",
            type: "less",
            email: "rajkum@gmail.com"
        },
        {
            name: "Madusan",
            number: "031248261",
            id: "admin2026002",
            type: "less",
            email: "madusan@gmail.com"

        },
        {
            name: "Elkanah Cole",
            number: "076413626",
            id: "admin2026003",
            type: "super",
            email: "elkanah@gmail.com"

        },
        {
            name: "Abdullah Mustapha",
            number: "031388705",
            id: "admin2026004",
            type: "super",
            email: "abdullah@gmail.com"

        }
    ]);
    return adminlists;
}

export default adminLists;