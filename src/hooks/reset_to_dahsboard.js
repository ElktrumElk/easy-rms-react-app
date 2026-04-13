

/**
 * 
 * @param {Object} param0
 * @param {any} param0.r1 - multiple arguments
 */
export const resetToDashboard = (...r1) => {
    r1.forEach(v => {
        if(typeof v === 'function') {
            v(false);
        }
    }) 
}