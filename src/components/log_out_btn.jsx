import { useNavigate } from "react-router-dom";


/**
 * 
 * @param {Object} param0 
 * @param {Boolean} param0.sideBarExpand - A boolean to check if the side bar has expand or not 
 * @returns 
 */
export default function LogOutButton({sideBarExpand}) {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear("*");
        navigate('/', {replace: true});
    }

    return (
        <>
            <button 
            className={sideBarExpand ? "logout_button-11" : "logout_button-11 collapse"} 
            onClick={handleLogOut}
            >
                <img className="logout_ic-11" src="https://img.icons8.com/?size=100&id=2445&format=png&color=FF0000" alt="logout"/>
                {sideBarExpand && <span className="logout_text-11">Logout</span>}
            </button>
        </>
    )
}