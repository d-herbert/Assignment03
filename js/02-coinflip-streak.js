let coinFlip 
let times = 0

// display
document.write('<h3> welcome to the `coin flip streak app`</h3><br>')

do {
    coinFlip = Math.round(Math.random(1))
    if (coinFlip === 0) {
        times += 1
    } else {
        console.log(`heads flip achieved ${times} time(s) before getting a tails flip`)
    }
} while (coinFlip === 0)