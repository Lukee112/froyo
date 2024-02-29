const userInput = prompt('Favorite ice cream');
const userInputArr = userInput.split(',');

function reduceToObject(arr) {
    const froyoObj = {};

    for (let index = 0; index < arr.length; index++) {
        const froyoFlavor = userInputArr[index];
        if (froyoFlavor in froyoObj) {
            froyoObj[froyoFlavor] += 1;
        } else {
            froyoObj[froyoFlavor] = 1;
        }
    }

    return froyoObj;
}
const result = reduceToObject(userInputArr);
console.log(result);