import quotes from "../../../../scripts/quotes"

import { useContext } from "react";
import { AuthContext } from "../../../../context/auth_context_export";

/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.isViewBatch - A function to display the batch panel. it only allow string to be pass as an argument
 * @returns 
 */
export default function GreetingContainer({isViewBatch}) {

    const {userRole} = useContext(AuthContext);
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
                        <h2>Good Morning Elkanah Cole.</h2>
                        <span><strong>ID: </strong>Code2026001</span>
                    </div>
                    <button className="view_batch_button-9" onClick={() => {isViewBatch("BE")}}>View Batch</button>

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