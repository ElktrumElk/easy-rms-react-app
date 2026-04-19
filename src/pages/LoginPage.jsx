import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackBtn } from "./components/buttons.jsx";
import educationalServiceData from "../accounts/db";
import useAuth from "../hooks/useAuth.js";
import { useValidationLogin } from "../hooks/useValidation_login.js";
import fetchData from "../scripts/fetchData.js";

export default function LoginPage() {

    const navigate = useNavigate();

    //Comment: A useContext that holds users logins
    const { isAuthenticated, login } = useAuth();
    //comment: validate user and share the data across the application
    const { setLoginData } = useValidationLogin();


    const dat = educationalServiceData();
    const loginType = ["Student", "Instructor", "Admin"];

    //const availableID = ["ID2026001", "ID2026002", "ID2026003"]; dev

    //Comment: Shows the invalid login
    const [error, showError] = useState(false);

    //Comment: Reference
    const eduTypeValue = useRef(null);
    //comment: login input element
    const logTypeValue = useRef(null);
    //comment: id input element
    const IdValue = useRef(null);
    //comment: password input element
    const passwordValue = useRef(null);

    //Commet: Fetch data if use already logged in
    const data = fetchData({
        navigate: navigate,
        type: "navigate"
    });

    //Comment: Authenticate
    useEffect(() => {
        console.log("User not logged in") //debigging

        if (isAuthenticated) {
            setLoginData(data);
            console.log("User has already logged in") //debigging
        }
        document.body.style.backgroundColor = '#f5f5f5' //handling ackground color to match the cureent page

    }, []);

    //comment: handle login 
    const loginValidation = (event) => {
        event.preventDefault();

        /**Login inputs */
        //Educational service
        const eduValue = eduTypeValue.current?.value?.trim() || "";
        //Login Type
        const logValue = logTypeValue.current?.value?.trim() || "";
        //ID for validation
        const idValue = IdValue.current?.value?.trim() || "";
        //Password validation
        const passValue = passwordValue.current?.value?.trim() || "";



        if (
            dat[`${eduValue}`] &&
            loginType.includes(logValue)
        ) {
            /*Admin login*/
            if (logValue === "Admin") {
                //Comment: Get the data of the education
                const data = dat[`${eduValue}`];
                //comment: Check if id exist
                if (data.admins[`${idValue}`]) {
                    //comment: now check for the password
                    if (data.admins[`${idValue}`]?.[`${passValue}`])
                        login(logValue);
                    navigate("/dashboard", { replace: true });

                    /**Temporal-> save tha data in the localstorage... this is a frontend development */
                    localStorage.setItem("adminID", idValue);
                    localStorage.setItem("edu", eduValue);
                    localStorage.setItem("isLoggedIn", true);

                    //comment: Share the data aross the application
                    setLoginData({
                        adminPersonalData: data.admins[`${idValue}`],
                        data: dat[`${eduValue}`]['Admindata']
                    })


                } else {
                    localStorage.setItem("isLoggedIn", false);
                    showError(true);
                    return;
                }
            }

            /**======================Student Login============================== 
            * =========                                                ======== */
            else if (logValue === "Student") {

                if (dat[`${eduValue}`]?.[`${logValue.toLowerCase()}`]?.[`${idValue}`]) {
                    
                    if (passValue === dat[`${eduValue}`]?.[`${logValue.toLowerCase()}`]?.[`${idValue}`]?.[`loginID`]) {
                        const studentData = dat[`${eduValue}`]?.[`${logValue.toLowerCase()}`]?.[`${idValue}`]

                        login(logValue);
                        navigate("/dashboard", { replace: true });
                        /**Temporal */
                        localStorage.clear("*");
                        localStorage.setItem("studentId", studentData.studentId);
                        localStorage.setItem("Edu", eduValue);
                        localStorage.setItem("isLoggedIn", true);

                        setLoginData({
                            adminPersonalData: admin,
                            data: dat[`${eduValue}`]['Admindata']
                        })
                    }
                } else {
                    showError(true);
                    console.log("Error")
                }
            }
        }
        else {

            localStorage.setItem("isLoggedIn", false);
            showError(true);
            console.log("Error")
            return;
        }

    };

    const hideErr = () => {
        showError(false);
    };

    return (
        <>

            <div id="login" className="log_cnt-2">
                <BackBtn cb={() => navigate("/")} />

                <div className="left-2">
                    <iframe
                        className="anim"
                        src="https://lottie.host/embed/131e22f1-7895-42dc-979a-78cd88116916/1trkqx743Y.lottie"
                    ></iframe>
                </div>
                <div className="info-2">
                    <div className="cnt1-2">
                        <img
                            className="logo_img-1 logo_img_2-1"
                            src="https://img.icons8.com/?size=100&id=32242&format=png&color=000000"
                            alt="logo"
                        />
                        <h1>Hello Again!</h1>
                    </div>

                    <form className="form-2" onSubmit={loginValidation}>
                        <div className="cnt2-2">
                            <fieldset className="inp_cnt1-2">
                                <legend>Eductional Service</legend>
                                <input
                                    ref={eduTypeValue}
                                    className="inp edu_inp-2"
                                    placeholder="Enter Eduction Service"
                                    type="text"
                                    required
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
                                        className="inp edu_inp-2"
                                        type="text"
                                        onFocus={hideErr}
                                    />
                                    <div className="edu_serv_list-2">
                                        <ul>
                                            <li>Student</li>
                                            <li>Instructor</li>
                                            <li>Admin</li>
                                        </ul>
                                    </div>
                                </fieldset>
                                <p className="hint-2">Enter the type of login needed</p>
                            </div>

                            <div className="cnt3-2">
                                <fieldset className="inp_cnt1-2">
                                    <legend>ID</legend>
                                    <input
                                        ref={IdValue}
                                        className="inp"
                                        placeholder="ID"
                                        type="password"
                                        required
                                        onFocus={hideErr}
                                    />
                                </fieldset>

                                <fieldset className="inp_cnt1-2">
                                    <legend>Password</legend>
                                    <input
                                        ref={passwordValue}
                                        className="inp"
                                        placeholder="Password"
                                        type="password"
                                        required
                                        onFocus={hideErr}
                                    />
                                </fieldset>

                                <div className="child_cnt-2">
                                    <div className="sub_child_cnt-2">
                                        <input className="check_box-2" type="checkbox" />
                                        <span>Remember Me</span>
                                    </div>
                                    <a className="fgt-2" href="#">
                                        Forget ID
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button className="submit_btn-2" type="submit">
                            Login
                        </button>
                        <p
                            style={{
                                alignSelf: "center",
                                padding: ".5rem 0rem",
                                color: "red",
                            }}
                        >
                            {error ? "Invalid Login" : ""}
                        </p>
                    </form>
                    <p className="info2-2">
                        You can register your Educational Service at <a href="#">easyeduregister.com</a>
                    </p>
                </div>
            </div>
        </>
    );
}

