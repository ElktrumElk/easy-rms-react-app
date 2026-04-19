import { useState } from "react";


export default function educationalServiceData() {


    const [educationalServices] = useState({
        "CODE": {
            /**The administrator */
            admins: {

                "Id654321": {
                    name: "Madusan",
                    superAdmin: true,
                    loginId: "123456789"
                },

                "Id123456": {
                    name: "Rajesh Kumar",
                    superAdmin: false,
                    loginId: "24681012"
                }
            },

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
                        timeCreated: 'Mon 5 Jan 2022',
                        numberOfBatch: 1,
                        numberofModules: 10,
                        totalStudent: 0,
                        duration: "2 years",
                        fee: 19200,
                        certificate: 'Diploma / Degree'
                    },

                    "Infrastructure-networking": {
                        timeCreated: 'Mon 5 Jan 2022',
                        numberOfBatch: 1,
                        numberofModules: 10,
                        totalStudent: 0,
                        duration: "2 years",
                        fee: 19200,
                        certificate: 'Diploma / Degree'
                    },

                    "Cyber-Security": {
                        timeCreated: 'Wed 9 Feb 2024',
                        numberOfBatch: 1,
                        numberofModules: 7,
                        totalStudent: 0,
                        duration: "2 years",
                        fee: 19200,
                        certificate: 'Diploma / Degree'
                    },

                    "Graphic-Multimedia": {
                        timeCreated: 'Mon 18 March 2024',
                        numberOfBatch: 1,
                        numberofModules: 4,
                        totalStudent: 0,
                        duration: "2 years",
                        fee: 19200,
                        certificate: 'Diploma'
                    },

                    "CCTV-installatin": {
                        timeCreated: 'Mon 9 Jan 2025',
                        numberOfBatch: 1,
                        numberofModules: 2,
                        totalStudent: 0,
                        duration: "2 years",
                        fee: 19200,
                        certificate: 'Diploma'
                    }
                }
            },

            student: {
                "Code2026001": {
                    studentName: "Elkanah Cole",
                    loginID: "ID2026001",
                    studentId: "Code2026001",

                    data: {
                        batchesEnrolled: 1,
                        accessCourse: 1,
                        accessModules: 2,
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