import { useContext } from "react"
import { ValidData } from "../context/validData"



export function useValidationLogin() {

    const isValid = useContext(ValidData);

    if (!isValid) {
        return new Error("Please useValidation must be used within the ValidData provider");
    }

    return isValid;
}