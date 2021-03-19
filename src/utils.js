/**
* Sleep seconds
 * @param {Number} time 
 * @returns {Promise<void>}
 */
const sleep = time => new Promise( resolve => setTimeout(resolve, time * 1000) )


/**
 * Clear screen & scroll back buffer
 */
const clearScreen = () => {
    process.stdout.write('\u001b[3J\u001b[2J\u001b[1J');
    console.clear();
}


module.exports = {
    sleep,
    clearScreen
};