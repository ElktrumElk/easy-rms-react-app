import { useNavigate} from "react-router-dom";
import { useEffect, useRef, useState  } from "react";
import SignButton from "./components/buttons.jsx";
import LoginSplashScreen from "../components/login_splash_screen.jsx";
export default function DefaultPage() {

  const navigate = useNavigate();
  const handleSignIn = () => navigate("/login");
  document.body.style.backgroundColor = 'transparent' //handling ackground color to match the cureent page


  return (
    <>

      <div id="welcome_screen" className="welc-1 splash-screen">
        <div className="background_content-1"></div>

        <header className="header-1">
          <div className="logo_cnt-1">
            <img src="/rms_logo_light.jpg" className="logo_img-1" />
            <h1>RMS</h1>
          </div>
        </header>

        <section className="fram_sec-1">
          {<LoginSplashScreen />}


          <div className="slogan_cnt-1">
            <h2 className="slogan-1">Centralize Your Future</h2>
            <p className="slogan_mini-1"
            >A smart system to efficiently allocate, schedule, and track educational resources.
              Optimizes classrooms, staff, and materials to enhance learning operations.
            </p>

            <div className="reg_sig_btn-1">

              <SignButton className={"btns-1 s_1-1"} content={"Sign in"} cb={handleSignIn} />
            </div>

          </div>

          <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
          </div>

          <div>
            <div className="bg_bubble-12"></div>
            <div className="bg_bubble-12"></div>
            <div className="bg_bubble-12"></div>
            <div className="bg_bubble-12"></div>
          </div>

        </section>
      </div>
    </>
  );
}
