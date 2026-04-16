import quotes from "../../../../scripts/quotes"

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/auth_context_export";
import { ValidData } from "../../../../context/validData";
import { useNavigate } from "react-router-dom";
import fetchData  from "../../../../scripts/fetchData";
import { useValidationLogin } from "../../../../hooks/useValidation_login";

/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.isViewBatch - A function to display the batch panel. it only allow string to be pass as an argument
 * @returns 
 */
export default function GreetingContainer({ isViewBatch }) {

    const { setLoginData } = useValidationLogin();

    //const navigate = useNavigate();
    const data = fetchData({ navigate: false, type: false });


    const { userRole } = useContext(AuthContext);
    const { loginData } = useContext(ValidData);

    const [dayinWords, setDay] = useState("");
    const [ind, setInd] = useState(0);
    const [greetinOpacity, setGreetinOpacity] = useState(0)

    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes();




    let j = 0;
    let greet = "";
    useEffect(() => {
        j += 1;
        if (j <= 1) {
            if (hour > 12 && minute >= 0 && hour < 18 && minute <= 59) {
               
                greet = `Good Afternoon ${loginData ? loginData.adminPersonalData.name : data.adminPersonalData.name}`
            }
            else if (hour >= 18 && minute >= 0 && hour < 24) {
               greet = `Good Evening ${loginData ? loginData.adminPersonalData.name : data.adminPersonalData.name}`
            } else {
                greet = `Good Morning ${loginData ? loginData.adminPersonalData.name : data.adminPersonalData.name}`
                console.log(greet)
            }

            const timeOut = setTimeout(() => {
                console.log(greet.length)
                if (ind < greet.length) {
                    setDay((prev) => prev + greet[ind])
                    setInd(ind + 1)
                    setGreetinOpacity((prev) => prev += 1 / 10)
                }
            }, 100)

        }

    }, [minute, hour, ind])



    return (
        <>
            <div className="greeting_cnt-8">
                <div className="verified_info_cnt-8">
                    <div className="verified-8">
                        <img />
                        <span>{userRole}</span>
                    </div>

                </div>
                <div className="quote-8">
                    <p>
                        Knoweldge is the key in becoming rich.
                    </p>
                </div>
                <div className="sub_greeting_cnt-8">
                    <div className="greetings-8">
                        <h2 style={{
                            opacity: greetinOpacity
                        }}>{dayinWords}</h2>
                        <span><strong>ID: </strong>Code2026001</span>
                    </div>
                    <button className="view_batch_button-9" onClick={() => { isViewBatch("BE") }}>View Batch</button>

                    <div className="quote-8 qin-8">
                        <p>
                            Knoweldge is the key in becoming rich.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}