import educationalServiceData from "../accounts/db";


/**
 * Fetch the data of the login user
 * @param {Object} param0
 * @param {Function} param0.navigate - React useNavigat should be passed here for navigation
 * @param {String} param0.type - The type is need to set navigation. it value should be navigate
 */
export default function fetchData({ navigate = false, type = false }) {
    /**Comment: Fetch store data */

    const educationalValue = localStorage.getItem("edu")
    const role = localStorage.getItem("userRole");
    const dat = educationalServiceData()

    //Check for proper validation */
    if (educationalValue && role) {

        //Comment:  Check if the role is admin for loop fetching*/
        if (role === 'Admin') {
            const adminId = localStorage.getItem("adminID");

            if (adminId) {
                //Comment: Retrieve the save data from the local storage. This is demo! */
                const datas = dat[`${educationalValue}`][`${role.toLowerCase()}s`]
                    /**
                     * comment: if the type is set to navigate then it will return to the dashboard 
                     * This is actually needed for login validation
                     * */
                    if (type === "navigate") {
                        navigate("/dashboard", { replace: true });
                    }

                    //comment: set initial login to false
                    localStorage.setItem("initLogin", false);

                    //comment: returns the data
                    return {
                        adminPersonalData: datas[`${adminId}`],
                        data: dat[`${educationalValue}`]['Admindata']
                    }
              
            }
        }

        else if (role === 'Student') {

            const studentID = localStorage.getItem('studentId');

            /** **Comment**: Get the data of the student */
            let datas = dat[`${educationalValue}`]?.[`${role.toLocaleLowerCase()}`]?.[`${studentID}`];

            if (type === "navigate") {
                navigate("/dashboard", { replace: true });
            }
            
            return {
                studentPersonalData: { studentName: datas.studentName, studentId: datas.studentId },
                data: datas.data
            }
        }
        else {
            return "Still under development"
        }
    }
    else {
       localStorage.setItem("isLoggedIn", false);
        return false;
    }

}