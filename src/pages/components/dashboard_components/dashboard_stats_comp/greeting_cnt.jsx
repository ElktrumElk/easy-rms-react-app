import { useContext, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../../../context/auth_context_export";
import { ValidData } from "../../../../context/validData";
import fetchData from "../../../../scripts/fetchData";
import { useValidationLogin } from "../../../../hooks/useValidation_login";
import quotes from "../../../../scripts/quotes";

export default function GreetingContainer({ isViewBatch }) {
    const { setLoginData } = useValidationLogin();

    // 1. Move data fetching to useEffect + useState (or use a proper data-fetching library like TanStack Query)
    const [data, setData] = useState(fetchData({ navigate: false, type: false }));
    const [loading, setLoading] = useState(true);



    const { userRole, userID } = useContext(AuthContext);
    const { loginData } = useContext(ValidData);

    const [dayinWords, setDay] = useState("");
    const [ind, setInd] = useState(0);
    const [greetinOpacity, setGreetinOpacity] = useState(0);

    const quote = quotes(); // assuming this is cheap



    // Better greeting logic
    useEffect(() => {
        if (!data && !loginData) return; // wait for data

        const time = new Date();
        const hour = time.getHours();

        let greet = "";
        const name = loginData?.adminPersonalData?.name || data?.adminPersonalData?.name || loginData?.studentPersonalData?.studentName || data?.studentPersonalData?.studentName || "";

        if (hour >= 12 && hour < 18) {
            greet = `Good Afternoon ${name}`;
        } else if (hour >= 18) {
            greet = `Good Evening ${name}`;
        } else {
            greet = `Good Morning ${name}`;
        }

        let i = 0;
        let g = ""; //used this to fix the unexpected out put of the greeting
        const interval = setInterval(() => {

            if (i < greet.length) {
                g += greet[i]
                setDay(g);
                setInd(i + 1);
                setGreetinOpacity((prev) => Math.min(1, prev + 0.1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);

    }, [data, loginData]); // depend on data/loginData, not on changing minute/hour
   
    return (
        <>
            <div className="greeting_cnt-8">
                <div className="verified_info_cnt-8">
                    <div className={userRole ? "verified-8" : "verified-8 loading_skeleton"}>
                        <img />
                        <span>{userRole}</span>
                    </div>

                </div>
                <div className={quote !== null ? "quote-8 " : "quote-8 loading_skeleton"}>
                    <p>
                        {quote !== null ? `${quote.quote}` : ''}
                    </p>
                </div>
                <div className="sub_greeting_cnt-8">

                    <div className={"greetings-8"}>
                        <h2 className={dayinWords === "" ? "greeting_skeleton-8 loading_skeleton" : ''} style={{
                            opacity: dayinWords === "" ? 1 : greetinOpacity
                        }}>{dayinWords}</h2>
                        <span><strong>ID: </strong>{userID}</span>
                    </div>

                    <button className="view_batch_button-9" onClick={() => { isViewBatch("BE") }}>View Batch</button>

                    <div className={quote !== null ? "quote-8 qin-8 " : "quote-8 qin-8 loading_skeleton"}>
                        <p>
                            {quote !== null ? `${quote.quote}` : ''}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}