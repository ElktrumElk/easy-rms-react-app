import { useContext, useState } from "react"
import fetchData from "../../../../scripts/fetchData"
import { AuthContext } from "../../../../context/auth_context_export";


export default function AccessCourseContainer() {

    const data = fetchData({ navigate: false, type: false });
    let accesCourse = [];
    let courseName = [];

    const { userRole } = useContext(AuthContext);

    if (userRole === 'Admin') {
        Object.keys(data.data.courses).forEach((course, idx) => {
            accesCourse.push(data.data.courses[`${course}`]);
            courseName.push(course);
            console.log(accesCourse);
        })

    }



    return (
        <>
            {
                accesCourse.map((course, indx) => (

                    <div key={indx} className="list_sub_cnt-8">
                        <div className="list_top_sec-8">
                            <div className="res_name_cnt-8">
                                <h2>{courseName[indx]}</h2>
                                {
                                    userRole !== 'Admin' &&
                                    <div className="list_status_cnt-8">
                                        <img src="/icons/progress_ic.png" width={"20"} height={"20"} />
                                        <span>{course.status}</span>
                                    </div>
                                }
                            </div>

                        </div>

                        <div className="list_info-8">
                            <div>
                                <img src="/icons/date_ic.png" width={"20px"} height={"20px"} />
                                <span>{userRole === 'Admin' ? course.timeCreated : course.dateEnrolled}</span>
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
                                <img src="/icons/payment_made.png" width={"20px"} height={"20px"} />
                                <span>{"Payment : <strong>{course.payment}</strong>"}</span>
                                <span className="module_up_status-8">Balance: {course.balance}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}