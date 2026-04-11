import { useState } from "react"


export default function AccessCourseContainer() {

    const [accesCourse] = useState([
        {
            courseName: "Software Engineering",
            dateEnrolled: "Mon 5 Sep 2025",
            status: "Ongoing",
            duration: "2 years",
            certificate: "Diploma",
            fee: 19200,
            payment: 9200,
            balance: 10000
        },
        {
            courseName: "Graphic Design",
            dateEnrolled: "Fri 5 Jan 2026",
            status: "Ongoing",
            duration: "1 year",
            certificate: "Certificate",
            fee: 6800,
            payment: 4000,
            balance: 2800
        }

    ])
   
   
    return (
        <>
            {
                accesCourse.map((course, indx) => (

                    <div key={indx} className="list_sub_cnt-8">
                        <div className="list_top_sec-8">
                            <div className="res_name_cnt-8">
                                <h2>{course.courseName}</h2>

                                <div className="list_status_cnt-8">
                                    <img src="/icons/progress_ic.png" width={"20"} height={"20"} />
                                    <span>{course.status}</span>
                                </div>
                            </div>

                        </div>

                        <div className="list_info-8">
                            <div>
                                <img src="/icons/date_ic.png" width={"20px"} height={"20px"} />
                                <span>{course.dateEnrolled}</span>
                            </div>

                            <div>
                                <img src="/icons/duration_clock.png" width={"20px"} height={"20px"} />
                                <span>{course.duration}</span>
                            </div>
                            <div>
                                <img src="/icons/certificate.png" width={"20px"} height={"20px"} />
                                <span>{course.certificate}</span>
                            </div>

                            <div>
                                <img src="/icons/course_fee.png" width={"20px"} height={"20px"} />
                                <span>Course Fee: <strong>{course.fee}</strong></span>
                            </div>
                        </div>
                        <div className="li_btm-8">
                            <div>
                                <img src="/icons/payment_made.png" width={"20px"} height={"20px"}/>
                                <span>Payment Made: <strong>{course.payment}</strong></span>
                                <span className="module_up_status-8">Balance: {course.balance}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}