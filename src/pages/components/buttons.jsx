//Sign in button

/**
 * 
 * @param {*} param0
 * @param {any} param0.content - content of the sign in button 
 * @returns 
 */
export default function SignButton({ content, className, cb }) {
  const updateSignClick = () => {
    if (typeof cb === "function") {
      cb(true);
    }
  };
  return (
    <button onClick={updateSignClick} id="sign_in" className={className}>
      {content}
    </button>
  );
}

export function BackBtn({ cb }) {

    const updateBackClick = () => {
        if (typeof cb === 'function') {
            cb(false);
        }
    }

    return <img className="login_back_btn-2" alt="Back" onClick={updateBackClick}/>
}