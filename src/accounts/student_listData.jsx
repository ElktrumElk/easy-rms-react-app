import { useState } from "react";


export const studentListData = () => {
    /**
       * @prop {Object} param0
       * @prop {Object} param0.name - string
       */
    const [studentlists] = useState([
        {
            name: "Elkanah Cole",
            batch: "Batch 1 2026",
            id: "stud2026001",
            course: "Software Engineering",
        },
        {
            name: "Abdul Aziz",
            batch: 'Batch 1 2026',
            id: "stud2026002",
            course: "Software Engineering",

        },
        {
            name: "Alice Gborie",
            batch: 'Batch 1 2026',
            id: "stud2026003",
            course: "Software Engineering",

        },
        {
            name: "Bobby Firmino",
            batch: 'Batch 1 2026',
            id: "inst2026004",
            course: "Software Engineering",

        }
    ]);
    return studentlists;

}