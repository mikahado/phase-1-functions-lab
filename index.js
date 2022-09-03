// Code your solution in this file!
const hq = 42


function distanceFromHqInBlocks(pickup) {
    const distFromHq = pickup % hq
    const distBelow = hq % pickup
        if (pickup < 42) {
            return distBelow
        } else {
            return distFromHq
        } 
    }
    

function distanceFromHqInFeet(pickup) {
    const distFromHq = pickup % hq
    const distBelow = hq % pickup
    const distInFeet = distFromHq * 264
    const distBelowInFeet = distBelow * 264
        if (pickup < 42) {
            return distBelowInFeet
        } else {
            return distInFeet
         }
        
        }

function distanceTravelledInFeet(a,b) {
    const totalInFeet = Math.abs(a - b) * 264
    const totalInFeetBelow = Math.abs(a - b) * 264
    if (a > b) {
        return totalInFeetBelow
    } else if (b > a) {
        return totalInFeet
    } 

}

function calculatesFarePrice(a, b) {
    const priceInFeet = Math.abs(a - b) * 264
    const mainPrice = priceInFeet - 400

    if (priceInFeet < 400) {
        return 0
    } else if (priceInFeet > 400 && priceInFeet < 2000) {
        return mainPrice * .02
    } else if (priceInFeet > 2000 && priceInFeet <= 2500) {
        return 25
    } else if (priceInFeet > 2500) {
        return 'cannot travel that far'
        }
    }

    console.log(calculatesFarePrice(50,58))

