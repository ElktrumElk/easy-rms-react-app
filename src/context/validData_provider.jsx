import { useState } from "react";
import { ValidData } from "./validData";

/**The provider for use login */
export default function ValidDataProvider({children}) {

    const [loginData, setLoginData] = useState(false);

return (
   
    <ValidData.Provider value={{loginData, setLoginData}} >
        {children}
    </ValidData.Provider>
)
    
}