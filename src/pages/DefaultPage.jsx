import { useNavigate } from "react-router-dom";
import SignButton from "./components/buttons.jsx";
import LoginSplashScreen from "../components/login_splash_screen.jsx";
export default function DefaultPage() {
  const navigate = useNavigate();
  const handleSignIn = () => navigate("/login");

  return (
    <>
      <div id="welcome_screen" className="welc-1 splash-screen">
        <header className="header-1">
        </header>

        <section className="fram_sec-1">
            <LoginSplashScreen />
          <div className="main_frame-1">
            
            <div className="slogan_cnt-1">
              <h1 className="slogan-1">Centralize Your Future in One Place.</h1>
              <p className="slogan_mini-1">Everything you need to learn right here.</p>
            </div>

            <div className="reg_sig_btn-1">
              <button className="btns-1">Register</button>
              <SignButton className={"btns-1 s_1-1"} content={"Sign in"} cb={handleSignIn} />
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
