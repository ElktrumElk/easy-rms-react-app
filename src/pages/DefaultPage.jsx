import { useNavigate } from "react-router-dom";
import SignButton from "./components/buttons.jsx";

export default function DefaultPage() {
  const navigate = useNavigate();
  const handleSignIn = () => navigate("/login");

  return (
    <>
      <div id="welcome_screen" className="welc-1">
        <header className="header-1">
          <div className="logo_cnt-1">
            <img
              className="logo_img-1"
              src="https://img.icons8.com/?size=100&id=32242&format=png&color=000000"
              alt="logo"
            />
            <h1 className="logo_name-1">easy</h1>
          </div>
        </header>

        <section className="fram_sec-1">
          <div className="main_frame-1">
            
          
            <div className="slogan_cnt-1">
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
