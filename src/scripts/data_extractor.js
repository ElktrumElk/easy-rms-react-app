

/**
   * Validate the the right number of batch to be given
*/
export function batchNumberValidator(userRole, data) {
    if (userRole === 'Student') {
        //comment: if userRole is student
        return data.data.batchesEnrolled
    }
    else if (userRole === 'Admin') {
        //comment: else we use admin
        return Object.keys(data.data.batchesEnrolled).length
    }
    else if (userRole === 'Instructor') {
        return 'Under Development'
    }
    else {
        return false;
    }
}

export function courseValidator(userRole, data) {

    if (userRole === 'Student') {
        //comment: if userRole is student
        return data.data.accessCourse
    }
    else if (userRole === 'Admin') {
        //comment: else we use admin
        return Object.keys(data.data.courses).length
    }
    else if (userRole === 'Instructor') {
        return 'Under Development'
    }
    else {
        return false;
    }
}

/**
 * Number of student
 * @param {String} userRole 
 * @param {Number} endStudentNumer 
 * @param {Object} data
 */
export function endStudnetNumber(userRole, endStudentNumer, data) {
    if (userRole === 'Admin') {
        let num = 0;
        Object.keys(data.data.batchesEnrolled).forEach((b, idx) => {
            num += data.data.batchesEnrolled[`${b}`].students
        })
        return num;
    }
    else if (userRole === 'Student') {
        return data.data.accessModules
    }
}