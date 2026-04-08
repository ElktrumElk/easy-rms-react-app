import { useState } from "react";
import SignButton from "./components/buttons"


/**
 * 
 * @param {*} param0 
 * @param {HTMLButtonElement} param0.isSign - Sign-in btn
 * @returns 
 */
export default function DefaultPage({ isSign }) {

    return (
        <>
            <div id="welcome_screen" className="welc-1">
                <header className="header-1">

                    <div className="logo_cnt-1">
                        <img className="logo_img-1" src="https://img.icons8.com/?size=100&id=32242&format=png&color=000000"
                            alt="logo" />
                        <h1 className="logo_name-1">easy</h1>
                    </div>

                    <div className="nav_links_cnt-1">
                        <nav className="nav_cnt-1">
                            <ul className="nav_child_cnt-1">
                                <li><a href="#features">Features</a></li>
                                <li><a href="#solutions">Solutions</a></li>
                                <li><a href="#resources">Resources</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="sign_btn_cnt-1">
                        <SignButton className={"sign_in_btn-1"} content={"Sign in"} cb={isSign}/>
                    </div>
                </header>

                <section className="fram_sec-1">
                    <div className="main_frame-1">
                        <img className="logo_img-1 logo_img_2-1" src="https://img.icons8.com/?size=100&id=32242&format=png&color=000000"
                            alt="lg" />
                        <h2 className="slogan-1">Centralized Learning for a Smarter Future</h2>
                        <p className="slogan_mini-1">Everything you need to learn right here.</p>

                        <div className="reg_sig_btn-1">
                            <button  className="btns-1">Register</button>

                            <SignButton className={"btns-1 s_1-1"} content={"Sign in"} cb={isSign}/>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}