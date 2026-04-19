import educationalServiceData from "../accounts/db";


/**
 * Fetch the data of the login user
 * @param {Object} param0
 * @param {Function} param0.navigate - React useNavigat should be passed here for navigation
 * @param {String} param0.type - The type is need to set navigation. it value should be navigate
 */
export default function fetchData({ navigate = false, type = false }) {
    /**Comment: Fetch store data */

    const adminId = localStorage.getItem("adminID");
    const educationalValue = localStorage.getItem("Edu")
    const role = localStorage.getItem("userRole");
    const dat = educationalServiceData()

    //Check for proper validation */
    if (adminId && educationalValue && role) {

        //Comment: Retrieve the save data from the local storage. This is demo! */
        const datas = dat[`${educationalValue}`][`${role.toLowerCase()}s`]

        //Comment:  Check if the role is admin for loop fetching*/
        if (role === 'Admin') {

            //comment: Get the save key index for direct hash fetching
            const index = localStorage.getItem("index");
            //Comment: check if index exist
            if (index) {
                /**
                 * comment: if the type is set to navigate then it will return to the dashboard 
                 * This is actually needed for login validation
                 * */
                if (type === "navigate") {
                    navigate("/dashboard", { replace: true });
                }
                //comment: returns the data
                return {
                    adminPersonalData: datas[index],
                    data: dat[`${educationalValue}`]['Admindata']
                }
                //comment: automatically navigate to the dashboard
            }

            else {
                //Comment: return to login if the hash index wasn't found
                localStorage.setItem("isLoggedIn", false);
                return false;
            }
        }
        else if (role === 'Student') {
          
            const studentID = localStorage.getItem('studentId');
            let datas;
            if (studentID) {
                Object.keys(dat[`${educationalValue}`]?.['student']).forEach(idx => {
                    if (studentID === dat[`${educationalValue}`]?.['student'][`${idx}`].studentId) {
                        datas = dat[`${educationalValue}`]?.['student']
                    }
                })
            }
        }
    }
    else {
        localStorage.setItem("isLoggedIn", false);
        return false;
    }

}