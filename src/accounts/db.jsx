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
                        students: 0
                    },

                    b02: {
                        name: "Batch 2 2026",
                        dateEnrolled: "Mon 10 Jan 2026",
                        inCharge: "Abdullah Mustapha",
                        modules: 10,
                        courseName: "Infrastrutral Management",
                        students: 0
                    },

                    b03: {
                        name: "Batch 3 2026",
                        dateEnrolled: "Fri 8 Feb 2026",
                        inCharge: "Rajesh Kumar",
                        modules: 10,
                        courseName: "Graphic Media",
                        students: 0
                    },

                    b04: {
                        name: "Batch 4 2026",
                        dateEnrolled: "Thu 27 Jan 2026",
                        inCharge: "Zeshan",
                        modules: 10,
                        courseName: "Software Engineerer",
                        students: 0
                    },

                    b05: {
                        name: "Batch 5 2026",
                        dateEnrolled: "Fri 9 Jan 2026",
                        inCharge: "Zeshan",
                        modules: 9,
                        courseName: "Cyber Security",
                        students: 0
                    }
                },

                courses: {
                    "Software-Egineering": {
                        numberOfBatch: 7,
                        numberofModules: 10,
                        totalStudent: 400
                    },

                    "Infrastructure-networking": {
                        numberOfBatch: 5,
                        numberofModules: 10,
                        totalStudent: 200
                    },

                    "Cyber-Security": {
                        numberOfBatch: 4,
                        numberofModules: 7,
                        totalStudent: 80
                    },

                    "Graphic-Multimedia": {
                        numberOfBatch: 4,
                        numberofModules: 4,
                        totalStudent: 1500
                    },

                    "CCTV-installatin": {
                        numberOfBatch: 3,
                        numberofModules: 2,
                        totalStudent: 25
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