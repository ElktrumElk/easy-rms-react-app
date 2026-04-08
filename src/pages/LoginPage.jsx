import { useRef, useState } from "react";
import { BackBtn } from "./components/buttons"
import Dashboard from "./DashboardPage";

export default function LoginPage({ click }) {

    const educationalType = ["CODE", "Ipam", "FBC"];
    const loginType = ["Student", "Lecturer", "Admin"];
    const availableID = ["ID2026001", "ID2026002", "ID2026003"];

    const [error, showError] = useState(false);
    const [renderDashboard, setRenderDashboard] = useState(false);

    const eduTypeValue = useRef(null);
    const logTypeValue = useRef(null);
    const IdValue = useRef(null);
    const preventFormSubmit = useRef(null);


    const loginValidation = () => {

        if (
            !educationalType.includes(eduTypeValue.current?.value) ||
            !loginType.includes(logTypeValue.current?.value ||
                !availableID.includes(IdValue.current?.value)

            )) {
            showError(true);
        }
        else {
            setRenderDashboard(true)
        }

    }

    const hideErr = () => {
        showError(false);
    }


    if (renderDashboard) {
        return <Dashboard />
    } else {

        return (
            <>
                <div id="login" className="log_cnt-2">

                   {/**btn to go */}
                    <BackBtn cb={click} />

                    <div className="left-2">
                        <iframe className="anim"
                            src="https://lottie.host/embed/131e22f1-7895-42dc-979a-78cd88116916/1trkqx743Y.lottie"></iframe>
                    </div>
                    <div className="info-2">
                        <div className="cnt1-2">
                            <img className="logo_img-1 logo_img_2-1"
                                src="https://img.icons8.com/?size=100&id=32242&format=png&color=000000" alt="logo" />
                            <h1>
                                Hello Again!
                            </h1>
                        </div>

                        <form ref={preventFormSubmit} className="form-2" action={() => { return }}>
                            <div className="cnt2-2">

                                <fieldset className="inp_cnt1-2">
                                    <legend>Eductional Service</legend>

                                    <input
                                        ref={eduTypeValue}
                                        className="inp edu_inp-2"
                                        placeholder="Enter Eduction Service"
                                        type="text" required
                                        onFocus={hideErr}

                                    />

                                    <div className="edu_serv_list-2">
                                        <ul className="ed">
                                            <li>College of digiatal Excellence</li>
                                            <li>Ipam</li>
                                            <li>FBC</li>
                                            <li>Limkonkwing</li>
                                        </ul>
                                    </div>
                                </fieldset>

                                <div className="cnt3-2 a1-2">
                                    <fieldset className="inp_cnt1-2">
                                        <legend>Login Type</legend>

                                        <input
                                            ref={logTypeValue}
                                            className="inp edu_inp-2" type="text"
                                            onFocus={hideErr}

                                        />

                                        <div className="edu_serv_list-2">
                                            <ul>
                                                <li>Student</li>
                                                <li>Lecturer</li>
                                                <li>Admin</li>
                                            </ul>
                                        </div>
                                    </fieldset>
                                    <p className="hint-2">Enter the type of login needed</p>
                                </div>

                                <div className="cnt3-2">
                                    <fieldset className="inp_cnt1-2">
                                        <legend>ID</legend>
                                        <input ref={IdValue}
                                            className="inp" placeholder="ID:********"
                                            type="password" required
                                            onFocus={hideErr}
                                        />

                                    </fieldset>


                                    <div className="child_cnt-2">


                                        <div className="sub_child_cnt-2">
                                            <input className="check_box-2" type="checkbox" />
                                            <span>Remember Me</span>
                                        </div>

                                        <a className="fgt-2" href="#">Forget ID</a>
                                    </div>
                                </div>
                            </div>
                            <button className="submit_btn-2" type="submit" onClick={loginValidation}>Login</button>

                            <p style={{
                                alignSelf: "center",
                                padding: '.5rem 0rem',
                                color: 'red',
                            }}>
                                {error ? 'Invalid Login' : ''}
                            </p>
                        </form>
                        <p className="info2-2">You can register your Educational Service at <a href="#">easyeduregister.com</a></p>
                    </div>
                </div>
            </>
        )
    }
}
