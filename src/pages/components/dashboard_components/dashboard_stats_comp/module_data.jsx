import { useState } from "react";
/**
 * The data of the module available
 * this is a demo file
 * @returns {Object}
 */

export default function moduleDat() {
    /**
     * @var {Object} modules
     */
    const modules = useState([
        {
            moduleName: "Advance Excel",
            inCharge: "Mr Zeshan",
            state: "Current",
            icon: "/icons/progress_ic.png",
            color: "#efdf0977",
            batch: "Batch 1 2026",
            totalFiles: 14,
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 2 days ago",
            totalChapters: 10,


        },
        {
            moduleName: "HTML / CSS",
            inCharge: "Mr Abdullah",
            state: "Draft",
            icon: '/icons/draft_ic.png',
            color: "#00c0eb77",
            batch: "Batch 1 2026",
            totalFiles: 19,
            timeAssign: "Mon 11 Jan 2026",
            lastUpdated: "10th Feb 2026",
            totalChapters: 10,

        },
        {
            moduleName: "Linux",
            inCharge: "Mr Rajesh Kuma",
            state: "Completed",
            icon: "/icons/progress_ic.png",
            color: "#00ff2f77",
            batch: "Batch 3 2026",
            totalFiles: 20,
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 2 days ago",
            totalChapters: 10,
        },
        {
            moduleName: "MS Office",
            inCharge: "Mr Bangura",
            state: "Current",
            icon: "/icons/progress_ic.png",
            color: "#efdf0977",
            totalFiles: 25,
            batch: "Batch 4 2026",
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 1 days ago",
            totalChapters: 10,

        },
        {
            moduleName: "Logic Building",
            inCharge: "Mr Bangura",
            state: "Completed",
            icon: "/icons/progress_ic.png",
            color: "#00ff2f77",
            totalFiles: 10,
            batch: "Batch 1 2026",
            timeAssign: "Mon 9 Feb 2026",
            lastUpdated: " 2 days ago",
            totalChapters: 10,

        },
        {
            moduleName: "Advance Excel",
            inCharge: "Mr Zeshan",
            state: "Current",
            icon: "/icons/progress_ic.png",
            color: "#efdf0977",
            totalFiles: 15,
            timeAssign: "Mon 9 Jan 2026",
            lastUpdated: " 3 days ago",
            totalChapters: 10,
            batch: "Batch 2 2026",
        },
    ]);
    return modules;
}