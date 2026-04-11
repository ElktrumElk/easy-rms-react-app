import { useState } from "react";


export default function educationalServiceData() {


    const [educationalServices] = useState({
        "CODE": {
            /**The administrator */
            admins: [
                {
                    name: "Madusan",
                    RegisterId: "Id" + Math.floor(Math.random() * 99999),
                    superAdmin: true,
                    loginId: "123456789",

                },
                {
                    name: "Rajesh Kumar",
                    RegisterId: "Id" + Math.floor(Math.random() * 99999),
                    superAdmin: false,
                    loginId: "24681012",
                },
                {
                    data: {
                        batchesEnrolled: {

                            "00001": {
                                name: "Batch 1 2026",
                                dateEnrolled: "Wed 5 Jan 2026",
                                inCharge: "Zeshan",
                                modules: 10,
                                courseName: "Software Engineerer",
                                students: null
                            },
                            "00002": {
                                name: "Batch 2 2026",
                                dateEnrolled: "Mon 10 Jan 2026",
                                inCharge: "Zeshan",
                                modules: 10,
                                courseName: "Infrastrutral Management",
                                students: null


                            },
                            "00003": {
                                name: "Batch 3 2026",
                                dateEnrolled: "Fri 8 Feb 2026",
                                inCharge: "Zeshan",
                                modules: 10,
                                courseName: "Graphic Media",
                                students: null

                            },
                            "00004": {
                                name: "Batch 4 2026",
                                dateEnrolled: "Thu 27 Jan 2026",
                                inCharge: "Zeshan",
                                modules: 10,
                                courseName: "Software Engineerer",
                                students: null


                            },
                            "00005": {
                                name: "Batch 5 2026",
                                dateEnrolled: "Fri 9 Jan 2026",
                                inCharge: "Zeshan",
                                modules: 9,
                                courseName: "Cyber Security",
                                students: null
                            }
                        },
                        modules: {
                            "Advance Excel": {
                                batchAssociated: "00001",
                                inCharge: "Zeshan",
                                numberofFiles: null
                            },
                            "HTML / CSS": {
                                batchAssociated: "00001",
                                inCharge: "Zeshan",
                                numberofFiles: null,
                            },
                            "N++": {
                                batchAssociated: "00001",
                                inCharge: "Zeshan",
                                numberofFiles: null,
                            },
                            "MS Office": {
                                batchAssociated: "00001",
                                inCharge: "Zeshan",
                                numberofFiles: null,
                            },
                            "Logic Building": {
                                batchAssociated: "00001",
                                inCharge: "Zeshan",
                                numberofFiles: null,
                            }
                        }
                    }
                }
            ],
            student: {
                "ID2026001": {
                    studentName: "Elkanah Cole",
                    studentId: "Code2025001",
                    data: {
                        batchesEnrolled: 1,
                        accessCourse: 1,
                        accessModules: 1,
                        course: [
                            {
                                name: "Software Engineering",
                                dateAssign: "Mon 5 Jan 2026",
                                duration: "2 years",
                                certificate: "Diploma",
                                fee: 38200,
                                paymentMade: 28000,
                                balance: 10200,
                                status: "onGoing"
                            }
                        ],
                        modules: [
                            {
                                name: "HTML / CSS",
                                date: "Mon 9 Feb 2026",
                                batchAssociated: "00001",
                                inCharge: "Abdullah",
                                numberofFiles: null,
                                status: "onHold"
                            },
                            {
                                name: "Advance Excel",
                                batchAssociated: "00001",
                                date: "Wed 26 Feb 2026",
                                inCharge: "Zeshan",
                                numberofFiles: null,
                                status: "Current"
                            }
                        ]
                    }
                }
            },

            lecturer: {
                "LE2026001": {
                    LectureName: "Adullah Mustapha",
                    LectureId: "CODE202200465",
                    data: {
                        batchesEnrolled: 1,
                        accessModules: 1,
                        accessCourse: 2,
                        modules: [
                            {
                                name: "HTML / CSS",
                                date: "Mon 9 Feb 2026",
                                batchAssociated: "00001",
                                inCharge: "Abdullah",
                                numberofFiles: null,
                                status: "onHold"
                            },
                            {
                                name: "Advance Excel",
                                batchAssociated: "00001",
                                date: "Wed 26 Feb 2026",
                                inCharge: "Zeshan",
                                numberofFiles: null,
                                status: "Current"
                            }
                        ]
                    }
                }
            }
        },

        "ipam": {},
        "fbc": {},
        "limkokwing": {},
        "IMATT College": {},
        "IAMTEC": {}

    })

    return educationalServices;

}