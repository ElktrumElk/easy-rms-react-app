import { useState } from "react";


export default function educationalServiceData() {


    const [educationalServices] = useState({
        "CODE": {
            /**The administrator */
            admins: [
                {
                    name: "Madusan",
                    RegisterId: "Id654321",
                    superAdmin: true,
                    loginId: "123456789"

                },
                {
                    name: "Rajesh Kumar",
                    RegisterId: "Id123456",
                    superAdmin: false,
                    loginId: "24681012"
                }
            ],

            Admindata: {

                batchesEnrolled: {

                    b01: {
                        name: "Batch 1 2026",
                        dateEnrolled: "Wed 5 Jan 2026",
                        inCharge: "Zeshan",
                        modules: 10,
                        courseName: "Software Engineerer",
                        students: 20
                    },

                    b02: {
                        name: "Batch 2 2026",
                        dateEnrolled: "Mon 10 Jan 2026",
                        inCharge: "Abdullah Mustapha",
                        modules: 10,
                        courseName: "Infrastrutral Management",
                        students: 10
                    },

                    b03: {
                        name: "Batch 3 2026",
                        dateEnrolled: "Fri 8 Feb 2026",
                        inCharge: "Rajesh Kumar",
                        modules: 10,
                        courseName: "Graphic Media",
                        students: 7
                    },

                    b04: {
                        name: "Batch 4 2026",
                        dateEnrolled: "Thu 27 Jan 2026",
                        inCharge: "Zeshan",
                        modules: 10,
                        courseName: "Software Engineerer",
                        students: 10
                    },

                    b05: {
                        name: "Batch 5 2026",
                        dateEnrolled: "Fri 9 Jan 2026",
                        inCharge: "Zeshan",
                        modules: 9,
                        courseName: "Cyber Security",
                        students: 21
                    }
                },

                courses: {
                    "Software-Egineering": {
                        numberOfBatch: 1,
                        numberofModules: 10,
                        totalStudent: 0
                    },

                    "Infrastructure-networking": {
                        numberOfBatch: 1,
                        numberofModules: 10,
                        totalStudent: 0
                    },

                    "Cyber-Security": {
                        numberOfBatch: 1,
                        numberofModules: 7,
                        totalStudent: 0
                    },

                    "Graphic-Multimedia": {
                        numberOfBatch: 1,
                        numberofModules: 4,
                        totalStudent: 0
                    },

                    "CCTV-installatin": {
                        numberOfBatch: 1,
                        numberofModules: 2,
                        totalStudent: 0
                    }
                }
            },

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
                                numberofFiles: 0,
                                status: "onHold"
                            },
                            {
                                name: "Advance Excel",
                                batchAssociated: "00001",
                                date: "Wed 26 Feb 2026",
                                inCharge: "Zeshan",
                                numberofFiles: 0,
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
                                numberofFiles: 0,
                                status: "onHold"
                            },
                            {
                                name: "Advance Excel",
                                batchAssociated: "00001",
                                date: "Wed 26 Feb 2026",
                                inCharge: "Zeshan",
                                numberofFiles: 0,
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